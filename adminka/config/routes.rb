Rails.application.routes.draw do
  root 'users#index'

  resources :users

  get '/:hwid/:key' , to: 'requests#handle'

end
