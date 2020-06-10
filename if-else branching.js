var nama = "Mikael"
var peran = ""

if (nama == "Mikael") {
    if(peran =="") {
    console.log("Halo "+ nama +"! Pilih peranmu untuk memulai game!");
  } else if(peran =="Ksatria") {
    console.log("Selamat datang di Dunia Proxytia, "+ nama +"\n Halo "+ peran +" "+ nama +", kamu dapat menyerang dengan senjatamu!");
  } else if(peran =="Tabib") {
    console.log("Selamat datang di Dunia Proxytia, "+ nama +"\n Halo "+ peran + " " + nama +", kamu dapat menyerang dengan senjatamu!")
  }
}
else {
  console.log("Nama/peran harus diisi!");
  }
