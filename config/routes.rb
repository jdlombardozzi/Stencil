Rails.application.routes.draw do
  root 'pages#index'

  scope '/:locale', :locale => /#{I18n.available_locales.join('|')}/ do
    get :index, :path => '/', :to => 'pages#index'
    resources :pages, only: :show, constraints: {id: /.*/}, defaults: {id: 'styleguide'}
  end
end