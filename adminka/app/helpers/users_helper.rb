module UsersHelper
    def time_of_action_or_end_of_action user
        end_of_action = Time.parse(user.end_of_action).strftime('%k:%M - %d/%m/%Y') if user.end_of_action
        end_of_action || user.time_of_action
    end

    def make_border_for_first
        size = User.all.size
        (size == 0) ? 'border-r-30-full' : 'border-r-30-first'
    end


    def make_border_for_last id
         'border-r-30-last'  if User.last.id == id
    end

    def expired? user
        'expired' if user.state == 'expired'
    end

    def get_label
        (params[:action] == 'new') ? 'Добавить' : 'Продлить'
    end
end
