// **************** Boolean Veri Turu ile Calismak ****************
// 0 ve 1'i Anlamak ->
let isActive = false // 0
isActive = true // 1
console. log(isActive)

let userName;
let isUserName = Boolean(userName)
console. log(userName)

Boolean("11") // true
Boolean("0") // true
Boolean("") // false

userName = "user"
console.log("UserName:", Boolean(userName)) //true

// 0,-0, null, false, NaN, undefined, ("")
Boolean(0) //false
Boolean(-0) // false
Boolean(-0.1) // true
Boolean(0 === 0) // true

// Not: Karar Yapilari Kisminda Tekrar Anlatilacak
Boolean(userName.length > 0) // true

// İçinde değer barındıran tüm ifadeler true'tur.
const b1 = Boolean(100);
const b2 = Boolean(3.14);
const b3 = Boolean(-15);
const b4 = Boolean("Hello");
const b5 = Boolean('false');
const b6 = Boolean(1 + 7 + 3.14);
console.log(Boolean(1n));
console.log(Boolean(-1n));
console.log(Boolean(Infinity));
console.log(Boolean({}));
console.log(Boolean(Symbol()));

// İçinde değer barındırmayan tüm ifadeler false 'tur.
const c1 = Boolean(undefined);
const c2 = Boolean(null);
const c3 = Boolean("");
const c4 = Boolean(false);
const c5 = Boolean(NaN);
const c6 = Boolean(0);
const c7 = Boolean(-0);
// Buradan anlayacağımız üzere 0 ve -0 hariç tüm sayılar bize true olarak döner.