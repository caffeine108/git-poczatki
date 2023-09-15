console.log("Hello World!");

// ---------------------------------------------
// Deklaracja zmiennych w javascript
// ---------------------------------------------

// deklaracja zmiennej za pomocą słowa kluczowego var -> nie używać
// var name = 'Janusz';

// ---------------------------------------------
// Deklaracja zmiennej za pomocą słowa kluczowego let -> ES6
// ---------------------------------------------

let first_name = "Janusz";
console.log("Moje imię to:", first_name);

let last_name, age;
console.log(last_name, age);

// ---------------------------------------------
// Deklaracja stałej -> ES6
// ---------------------------------------------

const pi = 3.14;
console.log("PI:", pi);


// ---------------------------------------------
// pi = 3.15; // błąd - nie można przypisać nowej wartości do stałej
// ---------------------------------------------

let pi_2 = 3.14;
console.log(pi_2);
pi_2 = 3.15; // OK - można przypisać nową wartość do zmiennej
console.log(pi_2);

// ---------------------------------------------
// Przypisanie zmiennej do innej zmiennej
// ---------------------------------------------

let number = 18;
let age_user = number;

console.log("Number:", number);
console.log("Age User:", age_user);

// ---------------------------------------------
// Nadpisanie zmiennej
// ---------------------------------------------

age_user = 20;

console.log("Number po zmianie:", number);
console.log("Age User po zmianie:", age_user);

// ---------------------------------------------
// Sklejanie stringów
// ---------------------------------------------
const hello = "Hello";
const world = "world!";

const helloWorld = hello + " " + world;
console.log("Hello world:", helloWorld);

// ---------------------------------------------
// Template string -> ES6
// ---------------------------------------------
const templateString = `Tekst z template`;
console.log("To jest template string:", templateString);
const helloWorldTemplate = `Tekst bezpośrednio w template stringu oraz :${hello} ${world}`;
console.log(helloWorldTemplate);

// ---------------------------------------------
// Wykonywanie operacji matematycznych
// ---------------------------------------------

const a = 10;
const b = 5;

let resultAdd = a + b;
console.log("Dodawanie:", resultAdd);

let resultSub = a - b;
console.log("Odejmowanie:", resultSub);

let resultMulti = a * b;
console.log("Mnożenie:", resultMulti);

let resultDiv = a / b;
console.log("Dzielenie:", resultDiv);

// ---------------------------------------------
// undefined vs null -> typy specjalne w javascript -> wartosci puste
// ---------------------------------------------

// ---------------------------------------------
// undefined
// ---------------------------------------------

let emptyVariable;
console.log("undefined - emptyVariable", emptyVariable);

// ---------------------------------------------
// null - to oznacza zerujemy ta zmienna, nie chcemy by posiadala jakakolwiek wartośc lub referencję dla czegoś
// ---------------------------------------------

let emptyVariableNull = null;
console.log("null - emptyVariableNull", emptyVariableNull);

// ---------------------------------------------
// FUNKCJE
// ---------------------------------------------

 
// Deklaracja funkcji
// (parametr1, parametr2, ...) => { ciało funkcji }

function logMessage(message) {

    // zrób dowolne rzeczy które się wywołają w ciele funkcji...
    // let messageConcated = message + " " + message;

    let messageConcated = `${message} to_jest_sklejka_tekstu ${message}`;
    console.log(messageConcated);
}

// console.log(message) -> błąd
// console.log(messageConcated) -> błąd

// Wywołanie funkcji

logMessage('To jest pierwszy komunikat');
logMessage('Kupię opla');
logMessage('Dowolny tekst');

// ---------------------------------------------
// Funkcja zwracająca wartość
// ---------------------------------------------

function generateEmailAddress(account, domain) {
    return `${account}@${domain}`
}

const email = generateEmailAddress('test', 'gmail.com');
console.log('Nasz email to:', email);

// ---------------------------------------------
const functionWithoutReturn = logMessage('test');
const functionWithReturn = generateEmailAddress('test1', '1gmail.com')
console.log('functionWithoutReturn', functionWithoutReturn)
console.log('functionWithReturn', functionWithReturn)

// ---------------------------------------------
// Obiekty (Objects) - struktura danych w javascript
// ---------------------------------------------

const user_szymon = {

    name: 'Szymon',
    surname: 'Szymański',
    age: 28,
    email: 'test@gmail.com',
}

console.log('User Szymon name is:', user_szymon.name);
console.log('User Szymon surname is:', user_szymon.surname);
console.log('User Szymon age is:', user_szymon.age);

const user_wojtek = {

    name: 'Wojtek',
    surname: 'Tetoński',
    age: 88,
    email: 'test@example.com',
}

console.log('User Wojtek name is:', user_wojtek.name);
console.log('User Wojtek surname is:', user_wojtek.surname);
console.log('User Wojtek age is:', user_wojtek.age);

// ---------------------------------------------
// Tablice (Arrays) - struktura danych w javascript -> przechowuje wiele/liste wartości
// ---------------------------------------------

// deklaracja tablicy -> pusta tablica
// const users = [];

// deklaracja tablicy -> tablica z wartościami
const users = [user_szymon, user_wojtek, 'test', 12];
// .push -> przykładowa metoda -> w tym przypadku dodaje element do tablicy

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

console.log('Users:', users);
users.push('test2');
console.log('Users po pushu:', users);
