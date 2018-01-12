require "sinatra"


get "/" do
	"done"
end

get "/tada" do
	"toda"
end

post "/insert" do 
	"insert new"
end

put "/put" do 
	"update"
end 

delete "/delete" do 
	"delete"
end