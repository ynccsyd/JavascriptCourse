// ************* Template Literals Kullanimi ***************
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let username = "hakan"
const DOMAIN = " kodluyoruz.org "
let email = username + "@" + DOMAIN
// console log("Merhaba", username, "sitemize hosgeldin", ""mail adresin:", email)
let info = `
Merhaba ${username} sitemize hosgeldin…
mail adresin: ${email}
mail adresinin uzunlugu: ${email.length}
borcunuz: ${(2 + 3) * 10} TL
gunun saat bilgisi : ${new Date().getHours()}
kisa isminiz: ${username[0]}.
`
console. log(info)

//backtick kullanımı
//Eski kullanım:
let eskiString = "En sevdiğim yemekler:\nİskender\nMantı"

//Yeni kullanım:
let yeniString = `En sevdiğim yemekler:
İskender
Mantı`

//İnterpolasyon, metin içerisinde değişken kullanmak anlamına gelir. Normal dizeler içerisine ifadeler gömmek için kullanılır.

let ad= `Aycan`;
let soyad= `Yerdelen`;

//Eski kullanım
console.log("Benim adim "+ad+" "+ soyad);

//Yeni kullanım
console.log(`Benim adim ${ad} ${soyad}`);
let a = 99;
let b= 999;

console.log(`${a} çarpı ${b} eşittir ${a*b}`);

//Çıktı: 
//99 çarpı 999 eşittir 98901

////Değişkenlerimizi tanımlayalım
const adi =`Aycan`
const soyadi =`Yerdelen`
const gozRengi =`Kahverengi`
const yas =21
//html ile kullanımı
const kisi = `
<p>${ad}</>
<p>${soyad}</>
<p>${gozRengi}</>
<p>${yas}</>
`;

document.body.innerHTML = kisi;

//örnek
// const kitap = {
//     ad: "Fırtına",
//     yazar: "Shakespeare",
//     tarih: 1610
//   }
//   const bookTable =`
//         <table border>
//     <tbody>
//       <tr>
//         <td>Kitap</td>
//         <td>${kitap.ad}</td>
//       </tr>
//     <tr>
//         <td>Yazar</td>
//         <td>${kitap.yazar}</td>
//       </tr>
//         <tr>
//         <td>Tarih</td>
//         <td>${kitap.tarih}</td>
//       </tr>
//    </tbody>
//     </table>
//   `;
        
//   document.body.innerHTML = bookTable
