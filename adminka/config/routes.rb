Rails.application.routes.draw do
  root 'users#index'

  resources :users, only: %i[index new create destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/:hwid/:key' , to: 'requests#handle'

end
