### Persiapan project
Buka terminal masuk ke dalam direktory gunadarma/gunadarma-s2, lalu jalankan perintah berikut.
- `git add .`
- `git commit -m "my change"`

```
penjelasan. perintah diatas akan menambahkan perubahan project ke dalam git
```

* `git checkout -b backend-mysql`
```
penjelasan: perintah di atas akan membuat brach baru dengan nama backend-mysql lalu pindah ke branch tersebut
```

## mySQL

### Persiapkan Database
login ke mysql shell dengan perintah
* ` mysql -u root -p`
```
penjelasan: perintahkan mysql untuk login kedalam shell dengan user "root" menggunakan password
```
membuat database dengan nama gunadarma
* `create database gunadarma;`

gunakan database yang telah kita buat 
* `use gunadarma;`

lihat database yang sedang kita gunakan
* `SELECT DATABASE();`

result:
```
+------------+
| DATABASE() |
+------------+
| gunadarma  |
+------------+
```

membuat table mahasiswa

```
create table mahasiswa(
  id int(10) auto_increment,
  npm int(10),
  nama varchar(20),
  kelas varchar(8),
  jurusan varchar(15),
  fakultas varchar(15),
  PRIMARY KEY (id)
);

```
Cek apakah table sudah terbuat dengan benar dengan perintah.
* `show tables;`
* `describe mahasiswa;`

result:
```
+----------+-------------+------+-----+---------+----------------+
| Field    | Type        | Null | Key | Default | Extra          |
+----------+-------------+------+-----+---------+----------------+
| id       | int(11)     | NO   | PRI | NULL    | auto_increment |
| npm      | int(10)     | YES  |     | NULL    |                |
| nama     | varchar(20) | YES  |     | NULL    |                |
| kelas    | varchar(8)  | YES  |     | NULL    |                |
| jurusan  | varchar(15) | YES  |     | NULL    |                |
| fakultas | varchar(15) | YES  |     | NULL    |                |
+----------+-------------+------+-----+---------+----------------+

```

### Lets play
 
#### Insert 
* `INSERT INTO mahasiswa ( npm, nama, kelas, jurusan, fakultas) values (1, "reza", "1ka24", "eng", "fe");`

```
penjelasan: masukan data baru kedalam table "mahasiswa" dengan value 
(1, "reza", "1ka24", "eng", "fe");
```
cek apakah data sudah di tambahkan kedalam tabel
* `SELECT * FROM mahasiswa;`
* `SELECT * FROM mahasiswa WHERE npm=1;`
```
penjelasan: perintah diatas akan menampilkan semua data pada table mahasiswa
```

#### Update 

* `UPDATE mahasiswa SET nama = "reza aditya", kelas = "2ka07" WHERE npm=1;`

```
penjelasan: perintah diatas akan melakukan perubahan field nama pada table "mahasiswa" yang memiliki nilai npm = 1, perlu di perhatikan setelah syntax WHERE adalah kondisi pada record apa value di ubah
```

#### Delete
* `DELETE FROM mahasiswa WHERE where npm=1;`
```
penjelasan: perintah diatas akan menghapus data pada table "mahasiswa" yang memiliki nilai npm = 1, perlu di perhatikan setelah syntax WHERE adalah kondisi pada record apa value di ubah
```


## Ruby

Buka code editor kalian dan masukan project.

### Install prerequirements

Pindah ke directory backend dengan menjalankan perintah
- `cd backend`

Install mysql library agar ruby dapat terhubung ke mysql
- `gem install mysql2`

Pull code dari github repo
- `git pull origin backend-mysql`

