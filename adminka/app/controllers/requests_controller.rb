class RequestsController < ApplicationController

  def handle
    hwid = params[:hwid]
    key  = params[:key]
    user = User.find_by(key:key)
# 1 проверка по ключу, наличие юзера
# 2 если в первый раз защёл юзер с имеющимся ключом
# 3 сравнение hwid текущего|установленного c входящим
# 4 сравнение по времени 
    if user
      unless  user.end_of_action
        end_of_action = Time.now + (user.time_of_action.to_i * 60) # расчёт в минутах
        
        user.update(end_of_action:end_of_action)
        user.update(hwid:hwid) unless user.hwid # не обновлять, если ранее был внесён, а сейчас происходит проделение времени
      end
      if user.hwid == hwid
        time_is_out = user.end_of_action < Time.now 
        unless time_is_out
          render plain: 'true'        
        else          
          # user.destroy
          render plain: 'false'
        end
      else 
        render plain:'false'
      end
      
    else
      render plain: "false"  
    end
  end
  render plain: false
end
