require "bundler/setup"
require 'sinatra'
require 'json'
require 'pry'

set :sessions, true

get '/' do
  'Hello world!'
end

post '/login' do
  data = JSON.parse(request.body.read.to_s)
  username = data['username']
  password = data['password']

  return 403,'password salah' if password != '1234'

  return 403,'username tidak di kenal' if username != 'budi'

  session[:auth] = "ok"
end

get '/detail/:username' do
  puts session[:auth]
  username = params["username"]
  p username
  # database =
end
