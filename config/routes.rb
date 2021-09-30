Rails.application.routes.draw do
  root to: 'lists#index'
  get 'lists/new', to: 'lists#new', as: :new_list
  post 'lists', to: 'lists#create'
  get 'lists/:id', to: 'lists#show', as: :list
end
