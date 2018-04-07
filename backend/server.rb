require 'sinatra'
require 'json'
require 'pry'
require './data-dummy'


set :sessions, true

get '/' do
  model = Database.new
  mahasiswa = model.findByID(1)
  return 200, mahasiswa.to_json
end

post '/insert' do
  data = JSON.parse(request.body.read.to_s)
  model = Database.new
  return 403, 'insert gagal' if model.insert(data)

  return 200, 'insert sukses'
end

put '/update' do
  data = JSON.parse(request.body.read.to_s)
  model = Database.new
  where = 'npm=1'

  return 403, 'update gagal' if model.update(data, where)
end

get '/detail/:username' do
  puts session[:auth]
  username = params['username']
  p username
end

# /detail/reza
# /detail/kelas
get '/profile/:key' do
  return 'kelas saya' if params['key'] == 'ka07'

  return 'nama saya reza, kelas ka07'
end


post '/login' do
  data = JSON.parse(request.body.read.to_s)
  username = data['username']
  password = data['password']

  return 403, 'password salah' if password != '1234'

  return 403, 'username tidak di kenal' if username != 'budi'

  session[:auth] = 'ok'
end