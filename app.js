// Kullanıcı Uyarı
alert("Lütfen konsolunuzu açınız!");

////**************************** Kullanıcı Uyarı Bitiş

// Kullanıcıdan Verileri Alma
let cezaTutari = prompt("Ceza Tutarını Giriniz: ");
let cezaGun = prompt("Cezanız 15 günü geçti mi ? ( Evet ise 1/ Hayır ise 0) ");
//////**************************** Kullanıcıdan Verileri Alma Bitiş
//Ceza İndirim Koşulu
if (cezaGun == 1) {
  indirimsiz(cezaTutari);
} else if (cezaGun == 0) {
  indirimHesapla(cezaTutari);
} else {
  console.log("Hatalı Giriş Yaptınız!");
}
//**************************** Ceza İndirim Koşulu Bitiş

//Trafik Ceza İndirimli Hali

function indirimHesapla(degerİndirim) {
  let indirimli = degerİndirim - degerİndirim * 0.25;
  console.log("İndirimli Tutar: " + indirimli);
}
//**************************** Trafik Ceza İndirimli Hali Bitiş

// Trafik Cezası İndirimsiz Hali
function indirimsiz(degerİndirimsiz) {
  console.log("İndirimsiz Tutar: " + degerİndirimsiz);
}
//**************************** Trafik Cezası İndirimsiz Hali Bitiş
