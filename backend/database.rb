require 'mysql2'

class Database
  def initialize
    @table = 'mahasiswa'
    @client = Mysql2::Client.new(
      host: 'localhost',
      username: "root",
      password: "root",
      database: "gunadarma"
    )
  end

  #findByID mencari mahasiswa berdasrkan field id pada database
  def findByID(id)
    result = @client.query("Select * from #{@table} where id=#{id}")
    resutl
  end

  # findBy mencari mahasiswa berdasarkan column dan value pada database
  def findBy(column, value)
    result = @client.query("SELECT * FROM #{@table} WHERE #{column} = \"#{value}\"")
    result
  end

  # fetchAll mendapatkan semua valu pada table mahasiswa
  def fetchAll
    result = @client.query("SELECT * FROM #{@table}")
    result
  end

  # insert tambahkan mahasiswa baru
  def insert(data)
    
    query = "INSERT INTO #{@table} VALUES (null,#{data["npm"].to_i}, \"#{data["nama"]}\", \"#{data["kelas"]}\",\"#{data["jurusan"]}\", \"#{data["fakultas"]}\")"
    p query
    exe = @client.query(query)
    return true if exe.nil?
    false
  end

  # delete hapus mahasiswa
  # @params update type:Hash
  def update(update, where)
    query = []
    update.each do |k,v|
      query.push("#{k}=\"#{v}\"")
    end 

    exe = @client.query("UPDATE #{@table} SET #{query.join("','")} WHERE #{where}")

    return true if exe.nil?
    false
  end

  # delete hapus mahasiswa
  def delete(column, value)
    exe = @client.query("DELETE FROM #{@table} WHERE #{column}= \"#{value}\"")

    return true if exe.nil?
    false
  end

  # cleanTable hapuse semua mahasiswa pada database
  def cleanTable
    exe = @client.query("TRUNCATE TABLE #{@table}")
    return true if exe.nil?
    false
  end
end