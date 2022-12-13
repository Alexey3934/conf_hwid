module SchedulerState
    extend ActiveSupport::Concern

    def check_states
        users = User.all

        users.map do |user| 


            end_of_action = Time.parse(user.end_of_action) if user.end_of_action
            user.update(state:'expired') if end_of_action && Time.now > end_of_action
        end
    end

end