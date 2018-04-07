require 'pry'

class Database
  def initialize
    @data = [
      {
        :id => 1,
        :data => {
          'nama':'reza', 
          'kelas':'1ka24',
          'npm':'16111031',
          'jurusan':'sistem informasi',
          'fakultas':'filkom',
        }
      },
      {
        :id => 2,
        :data => {
          'nama':'reza', 
          'kelas':'1ka24',
          'npm':'16111031',
          'jurusan':'sistem informasi',
          'fakultas':'filkom',
        }
      },
    ]
  end

  def fetchAll()
    return @data
  end 

  def findByID(id)
    @data.each do |d|
      if d[:id] == id
        return d
      end
    end
  end

  def insert(newData)
    @data.push(newData)
  end

  def update(data, id)
     @data.each do |d, index|
      if d[:id] == id
        @data[index] = d
      end
    end
  end
end