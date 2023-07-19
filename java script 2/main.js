//tugas 1

const inputAwal = Number(prompt("masukkan saldo awal kamu"))

let saldoAwal = inputAwal
let Saldo = []
let saldoTambahan = []
let saldoKurang = []
Saldo.push(saldoAwal)
console.log(Saldo[0])

const inputAKhir = confirm("ingin tambah saldo?. klik ok untuk tambah saldo dan klik cancel untuk mengambil saldo")

if (inputAKhir){
    const tambahSaldo = Number(prompt("masukkan jumlah saldo"))
    saldoTambahan.push(tambahSaldo)
    const saldoAkhir1 = saldoAwal + tambahSaldo
    alert(`transaksi berhasil! total saldo yang kamu miliki sekarang adalah RP.${saldoAkhir1}`)
}else{
    const kurangSaldo = prompt("ingin ambil berapa?")
    saldoKurang.push(kurangSaldo)
    const saldoAkhir2 = saldoAwal - kurangSaldo
    alert(`transaksi berhasil! total saldo yang kamu miliki sekarang adalah RP.${saldoAkhir2}`)
}
console.log(saldoTambahan[0])
console.log(saldoKurang[0])

let hari = new Date().getDay()
const namaHari = ['ruang kosong','senin','selasa','rabu','kamis','jumat','sabtu','minggu']
hari = namaHari[hari]
document.writeln(`selamat datang. hari ini adalah hari ${hari}`)
