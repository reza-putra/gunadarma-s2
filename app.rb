# 1. install Ruby
# 2. buka CMD
# 3. Pindah ke Directory D
# 4. buat folder baru dengan nama gunadarma
# 5. instal gem sinatra dengan perintah
# "gem install sinatra"
# 6. buat file app.rb dan copy code di bawah ini


require "sinatra"

get "/" do
	"done"
end

post "/insert" do
	"insert new"
end

put "/put" do
	"update"
end

