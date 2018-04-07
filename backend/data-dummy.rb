class Dummy 
  def initialize
    @data = [
      {
        "nama": "reza", 
        "kelas": "1ka24",
        "npm": "16111031",
        "jurusan": "sistem informasi",
        "fakultas": "filkom",
      }
    ]
  end

  def selectAll()
    return @data
  end 

  def insert(newData)
    @data.push(newData)
  end
end