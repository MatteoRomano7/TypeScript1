// PRESENTAZIONE TYPESCRIPT
// 1) TypeScript è un linguaggio di programmazione, piú precisamente, un superset di JavaScript che permette di definire tipi, classi, interfacce e moduli opzionali al JavaScript. A differenza di quest'ultimo infatti, presenta la caratteristica di poter saltare il passaggio dello studio della documentazione per capire il tipo di dati che girano nel codice, e ha la capacitá di riportate errori quiando i tipi non sono corretti. Inoltre, sempre a differenza di JavaScript, esegue un controllo in fase di compilazione e ritorna eventuali errori prima che il codice venga eseguito.
// 2) TypeScript si serve di un compiler che permette di compilare il codice JavaScript in un codice TypeScript. Il compiler è un programma che trasforma l'input TypeScript in un codice JavaScript. Questo compiler deve essere installato nella cartella radice del progetto attraverso il comando npm install typescript --save-dev ed é di fondamentale importanza per il funzionamento di un'app.
// 3) Nel linguaggio Typescript ci serviamo molto spesso della "inferenza del tipo" che ci permette di definire il tipo di una variabile quando non è specificato. Ad esempio:
var numero
var stringa
var booleano
//4) In Typescript non é possibile modificare il tipo di una variabile dopo averla dichiarata, ma é possibile dichiarare varianti di tipo "any" quando ad esempio ci aspettiamo un risultato da una operazione ma non sappiamo il tipo di risultato. Esempio:
var temp
temp = "string"
temp = 2
temp = true
// 5) Se invece abbiamo un'idea del tipo di variabile che possa tornare da un'operazione, possiamo definire il tipo di una variabile usando il tipo Union.	Ad esempio, se ho una variante "anno" presumibilmente il tipo sará una stringa o un numero e scriveremo cosí:
var anno
anno = "2024"
anno = 2024
//6) In Typescript esistono anche array tipizzati con lunghezza e tipo predefinito per ogni elemento. Questi array vengono chiamati 'tuples'. La caratteristica dei tuples é che una volta dichiarati i tipi degli elementi in un array, non sará possibile invertire l'ordine degli elementi altrimenti avremo un errore. La corretta compilazione risulta quindi:
var tuple1
var tuple2
tuple1 = ["string", 2]
tuple2 = [2, "string"]
var Matteo = {
  nome: "Matteo",
  cognome: "Romano",
  eta: 29,
}
//9) I generics sono modelli di codice che è possibile definire e riutilizzare nell'intero codebase. Forniscono un modo per indicare a funzioni, classi o interfacce il tipo che si vuole usare al momento della loro chiamata.
function generica(arg) {
  return arg
}
generica("Sono una stringa")
var book1 = {
  title: "I tre moschettieri",
  author: "Alexandre Dumas",
  pages: 300,
  price: 15,
}
var book2 = {
  title: "Prometeo Liberato",
  author: "Percy Bysshe Shelley",
  pages: 300,
  price: 15,
}
