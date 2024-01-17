// PRESENTAZIONE TYPESCRIPT

// 1) TypeScript è un linguaggio di programmazione, piú precisamente, un superset di JavaScript che permette di definire tipi, classi, interfacce e moduli opzionali al JavaScript. A differenza di quest'ultimo infatti, presenta la caratteristica di poter saltare il passaggio dello studio della documentazione per capire il tipo di dati che girano nel codice, e ha la capacitá di riportate errori quiando i tipi non sono corretti. Inoltre, sempre a differenza di JavaScript, esegue un controllo in fase di compilazione e ritorna eventuali errori prima che il codice venga eseguito.

// 2) TypeScript si serve di un compiler che permette di compilare il codice JavaScript in un codice TypeScript. Il compiler è un programma che trasforma l'input TypeScript in un codice JavaScript. Questo compiler deve essere installato nella cartella radice del progetto attraverso il comando npm install typescript --save-dev ed é di fondamentale importanza per il funzionamento di un'app.

// 3) Nel linguaggio Typescript ci serviamo molto spesso della "inferenza del tipo" che ci permette di definire il tipo di una variabile quando non è specificato. Ad esempio:

let numero: number
let stringa: string
let booleano: boolean
//4) In Typescript non é possibile modificare il tipo di una variabile dopo averla dichiarata, ma é possibile dichiarare varianti di tipo "any" quando ad esempio ci aspettiamo un risultato da una operazione ma non sappiamo il tipo di risultato. Esempio:

let temp: any

temp = "string"
temp = 2
temp = true

// 5) Se invece abbiamo un'idea del tipo di variabile che possa tornare da un'operazione, possiamo definire il tipo di una variabile usando il tipo Union.	Ad esempio, se ho una variante "anno" presumibilmente il tipo sará una stringa o un numero e scriveremo cosí:

let anno: string | number

anno = "2024"
anno = 2024

//6) In Typescript esistono anche array tipizzati con lunghezza e tipo predefinito per ogni elemento. Questi array vengono chiamati 'tuples'. La caratteristica dei tuples é che una volta dichiarati i tipi degli elementi in un array, non sará possibile invertire l'ordine degli elementi altrimenti avremo un errore. La corretta compilazione risulta quindi:

let tuple1: [string, number]
let tuple2: [number, string]

tuple1 = ["string", 2]
tuple2 = [2, "string"]

// 7) Le interfacce di TypeScript sono uno strumento che permettono di stabilire la struttura di determinati oggetti. Ad esempio:

interface Persona {
  nome: string
  cognome: string
  eta: number
}

let Matteo: Persona = {
  nome: "Matteo",
  cognome: "Romano",
  eta: 29,
}
//8) Type e Interface presentano differenze sostanziali. Type si usa per difinire il tipo di dati di una variabile e puó essere usato anche in altri componenti come tuples etc.. Non supporta le classi e non puó essere esteso. Le interface invece sono definite come sintassi per la classe che determina gli elementi. Non possono essere usate con i tuples ma possono essere estese e supportano le classi

//Esempio di type:

type Car = {
  brand: string
  model: string
  color: string
  year: number
}

//Esempio di interface:

interface Motorbikes {
  brand: string
  model: string
  color: string
  year: number
}

//9) I generics sono modelli di codice che è possibile definire e riutilizzare nell'intero codebase. Forniscono un modo per indicare a funzioni, classi o interfacce il tipo che si vuole usare al momento della loro chiamata.

function generica<T>(arg: T): T {
  return arg
}
generica<string>("Sono una stringa")

interface book<T> {
  title: string
  author: string
  pages: number
  price: number
}

const book1: book<string> = {
  title: "I tre moschettieri",
  author: "Alexandre Dumas",
  pages: 300,
  price: 15,
}

const book2: book<number> = {
  title: "Prometeo Liberato",
  author: "Percy Bysshe Shelley",
  pages: 300,
  price: 15,
}
