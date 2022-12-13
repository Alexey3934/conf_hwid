class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def new
    @user = User.new
    render :new, layout: false
  end

  def create
    @user = User.new(user_params)
    @user.key = random_key()

    if @user.save
      head :ok
    else
      render :new, layout: false, status: :unprocessable_entity
    end
  end

  def destroy
    ids = params[:id].split(',')
    ids.each {|id| User.find(id).destroy}
    head :ok
  end

  private
    def user_params
     params.require(:user).permit(:info, :time_of_action) 
    end
end
