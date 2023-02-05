// Bir başka şekilde isInteger( ), isFinite( ) veya isNaN( ) kullanarak da kontrol sağlayabiliriz.

//isInteger( ) yöntemi, sayıların tam sayı olup olmadığını belirler.
Number.isInteger(123) //true
Number.isInteger(-123) //true
Number.isInteger(0.5) //false
//isFinite () yöntemi, bir değerin sonlu bir sayı olup olmadığını belirler.
Number.isFinite(0) //true
Number.isFinite('123') //false
Number.isFinite('Hello') //false
Number.isFinite(-Infinity) //false
Number.isFinite(0 / 0) //false
// Number.isNaN () yöntemi, bir değerin NaN (Not-A-Number) olup olmadığını belirler.

Number.isNaN(123) //false
Number.isNaN(0) //false
Number.isNaN('123') //false
Number.isNaN('Hello') //false
Number.isNaN('') //false
Number.isNaN(true) //false
Number.isNaN(undefined) //false
Number.isNaN('NaN') //false
Number.isNaN(NaN) //true

// Explicit Coercion
String(123) // “123”
ParseInt("123") // 12

//Implicit Coercion
If(3<5) // true
console.log(''+123) // "123"
12/'6' // 2

String(123) // “123” explicit
123 + '' // “123”    implicit
// Tahmin edebileceğiniz üzere her primitif değer stringe dönüştürülebilir.

String(123) // “123”
String(-12.3) // “-12.3”
String(null) // “null”
String(undefined) // “undefined”
String(true) // “true”
String(false) // “false”
// Symbol’de durum biraz farklıdır, çünkü dönüşüm sadece explicit bir şekilde yapılabilir, implicit bir şekilde yapılamaz.

String(Symbol('my symbol')) // 'Symbol(my symbol)'
'' + Symbol('my symbol') // TypeError is thrown

Boolean(2) // explicit
var a=!!2 //explicit
if (2) { somethng } // implicit due to logical context
!!2 // implicit due to logical operator
2 || 'hello' // implicit due to logical operator
// Boolean tiplerle uğraşırken truthy, falsy değerler işin içine girerler. Kısaca açıklayacak olursak javascriptin kendi doğası gereği true veya false dönen değerler mevcuttur. Bunlar;

Boolean('') // false
Boolean(0) // false 
Boolean(-0) // false
Boolean(NaN) // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(false) // false

// Yukarıdaki listede olmayan herhangi bir değer, true'ya dönüştürülür. Fonksiyon, Dizi (Array),Tarih (Date),
// kullanıcı tanımlı tip (user-defined-type) vb Symboller gerçek değerlidir (truthy value). 
// Hatta boş nesneler (objectler) ve diziler (arrayler) gerçek değerlidir (truthy value).

Boolean({}) // true
Boolean([]) // true
Boolean(Symbol()) // true
!!Symbol() // true
Boolean(function() {}) // true

//Önemli NOT: Mantıksal operatörlerden || ve &&, dönüşüm işlemini internally (dahili olarak) yapar. 
// Ama gerçekte ifadenin operand değerini döndürür, değer boolean tipinde olmasa bile. 
// Örneklerle daha iyi anlayalım.

// veya “||” operatörü ilk bulduğu true değeri döner
var a= 2 || s || 4 || 5; // 2
// eğer true dönecek değer bulamazsa en son buluğu false değeri döndürür
var b=0 || "" || false || -0 || 0 // 0
var c= 0 ||  ""  ||  "123 " || 4 ; // ”123” dolu string true dönecektir
// ve ”&&” operatörü ilk bulduğu false değeri döner.
var d=2 && 3 && 0 && 5 && 7; // 0
// eğer false dönecek değer bulamazsa en son buluğu true değeri döndürür
var e= 2 && 3 && 5 && 7 // 7

//Nesneler için en kolay tip dönüşümü boolean'dır. Primitif olmayan herhangi bir değer örneğin içi dolu veya
// boş bir nesne (object), dizi (array) fark etmez her zaman true olarak zorlanır. (coerced)
console.log(Boolean({})) // true
console.log(Boolean([])) // true
console.log(Boolean([1,2,3])) // true
console.log(Boolean({13:234})) //true

console.log([1]+[1,2,3])

//İşlem yapabilmek için [ 1 ] ve [ 1,2,3 ] öncelikli olarak primitif türe zorlanır

[ 1 ].toString(); // sonuç "1" verir
[ 1,2,3 ].toString() // sonuç "1,2,3" verir. Bu durumda iki string ifadenin toplanmasından çıkan sonuç "1" + "1,2,3" --> "11,2,3" olacaktır.

//NOT: == operatörünün (lose equality- zayıf eşitlik) farklı iki tipteki a ve b değişkenleri için 
//pratikte nasıl farklı davrandığını, JavaScript Comparison Table ’de gösteren matristen  görebilirsiniz.


console.log("foo" + +"bar")
//+"bar" => Number("bar") => NaN //"foo"+NaN //"foo" +"NaN" //Sonuç= "fooNaN"
console.log('true' == true)
//Number('true')=>NaN //NaN == true //NaN == 1 //Sonuç= false
console.log(null=="")
// null sadece kendine ve undefined'a eşit olduğundan //Sonuç= false
console.log(0 || " 0" && {})
//(0 || "0") %% {} //(false || true) && {} => dolu string true döndüğünden //(true) && {} => || operatörü ilk bulduğu true değeri, && operatörü ilk bulduğu false değeri döner
// true && {} => && operatörü false değer bulamazsa son bulduğu değeri döndürür. //Sonuç={}
console.log(["a"] > null)
//"a" > null => array toStirng metodunun içine girer //NaN > null => Numeric dönüştürmeye girer //NaN > 0 //Sonuç= false