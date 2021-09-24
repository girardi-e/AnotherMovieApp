Rails.application.routes.draw do
  root to: 'lists#index'
  get 'lists/:id', to: 'lists#show', as: :list
end
