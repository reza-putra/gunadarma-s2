require 'mysql'

class Database2 
  def initialize
    @table = 'mahasiswa'
    @client = Mysql.real_connect('localhost', 'root', 'root', 'gunadarma')
  end

  #findByID mencari mahasiswa berdasrkan field id pada database
  def findByID(id)
    result = @client.query("Select * from #{@table} where id=#{id}")
    resutl
  end
end