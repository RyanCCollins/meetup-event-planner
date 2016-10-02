Rails.application.routes.draw do
  devise_for :users
  mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/api"
  root to: redirect("/graphiql")
  resources :api
end
