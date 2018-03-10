#### Menyiapkan workspace

* open project (buka cmd dan pindah ke dir gunadarma)
* `cd gunadarma-s2` // masuk ke repo gunadarma-s2
* `git checkout master` // pindah ke branch master
* `git pull` // tarik code baru dari master server
*

#### Setup server backend dengan sinatra

* `gem install bundler` //akan mengintall gem bundler untuk vendoring
* pada folder backend, dan buat file dengan nama server.r b lalu tuliskan code dibawah ini.

```ruby
require 'sinatra'

get '/' do
  'Hello world!'
end
```

* `ruby server.rb` // ruby akan mengexecute file server.rb dan menjalankan server pada port :4567
* buka browser dan arahkan url ke `localhost:4567` // kalian akan mendapatkan response dari server yaitu text `Hello world`
