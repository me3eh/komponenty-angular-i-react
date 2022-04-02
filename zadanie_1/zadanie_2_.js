// import { workerData } from "worker_threads"
// Zaproponuj kod klasy Szyfr (nazwa, autor, data_stworzenia - możesz wybrać dowolny rok z właściwego okresu, klucz - może to być dowolnie zapisana reguła szyfrów podstawieniowych) z następującymi cechami:
// a) hermetyzacja pól z dostępem protected,
// b) konstruktor,
// c) getters i setters,
// d) dodaj metody:
//     zaszyfruj(slowo), która szyfruje dane słowo,
//     historiaSzyfrowania() - która zwraca wszystkie słowa, które były zgłoszone do szyfrowania w formacie tablicy obiektów [{slowo1: słowo_do_zaszyfrowania, slowo2: slowo_zaszyfrowane}]
var Student = /** @class */ (function () {
    function Student(name, author, createDate, key) {
        this.name = name;
        this.author = author;
        this.createDate = createDate;
        this.key = key;
        this.words = [];
    }
    Object.defineProperty(Student.prototype, "Name", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "Author", {
        get: function () {
            return this.author;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "CreateDate", {
        get: function () {
            return this.createDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "Key", {
        get: function () {
            return this.key;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "addName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "addAuthor", {
        set: function (author) {
            this.author = author;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "addCreateDate", {
        set: function (createDate) {
            this.createDate = createDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "addKey", {
        set: function (key) {
            this.key = key;
        },
        enumerable: false,
        configurable: true
    });
    // zaszyfruj(slowo), która szyfruje dane słowo,
    // historiaSzyfrowania() - która zwraca wszystkie słowa, które były zgłoszone do szyfrowania w formacie tablicy obiektów [{slowo1: słowo_do_zaszyfrowania, slowo2: slowo_zaszyfrowane}]
    Student.prototype.cipher = function (word) {
        var cipheredWord = '';
        var helpArray = [];
        for (var i = 0; i < word.length; ++i) {
            helpArray[i] = String.fromCharCode(word.charCodeAt(i) + this.key);
        }
        cipheredWord = helpArray.join("");
        this.words.push({ original_word: word, ciphered: cipheredWord });
        return cipheredWord;
    };
    Student.prototype.historyOfCiphered = function () {
        return this.words;
    };
    return Student;
}());
var student = new Student('Mark', 'Twain', new Date(), 1);
console.log(student.cipher("hiihi"));
console.log(student.cipher("hlh"));
console.log(student.cipher("h1i"));
console.log(student.historyOfCiphered());
// student.addMark=5;student.addMark=4.5;student.addMark=4;
// console.log(student.Name,student.Surame,student.Age);
