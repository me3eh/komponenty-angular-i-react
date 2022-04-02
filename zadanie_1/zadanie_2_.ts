// import { workerData } from "worker_threads"

// Zaproponuj kod klasy Szyfr (nazwa, autor, data_stworzenia - możesz wybrać dowolny rok z właściwego okresu, klucz - może to być dowolnie zapisana reguła szyfrów podstawieniowych) z następującymi cechami:

// a) hermetyzacja pól z dostępem protected,

// b) konstruktor,

// c) getters i setters,

// d) dodaj metody:

//     zaszyfruj(slowo), która szyfruje dane słowo,
//     historiaSzyfrowania() - która zwraca wszystkie słowa, które były zgłoszone do szyfrowania w formacie tablicy obiektów [{slowo1: słowo_do_zaszyfrowania, slowo2: slowo_zaszyfrowane}]
class Student{
    protected name: string;
    protected author: string;
    protected createDate: Date;
    protected key: number;
    private words:Array<{ original_word:string, ciphered:string }>;
    constructor(name: string, author: string, createDate: Date, key:number){
        this.name = name;
        this.author = author;
        this.createDate = createDate;
        this.key = key;
        this.words = [];
    }

    get Name():string{
        return this.name;
    }
    get Author():string{
        return this.author;
    }
    get CreateDate():Date{
        return this.createDate;
    }
    get Key():number{
        return this.key;
    }
    set addName(name:string){
        this.name = name;
    }
    set addAuthor(author:string){
        this.author = author;
    }
    set addCreateDate(createDate:Date){
        this.createDate = createDate;
    }
    set addKey(key:number){
        this.key = key;
    }

    // zaszyfruj(slowo), która szyfruje dane słowo,
    // historiaSzyfrowania() - która zwraca wszystkie słowa, które były zgłoszone do szyfrowania w formacie tablicy obiektów [{slowo1: słowo_do_zaszyfrowania, slowo2: slowo_zaszyfrowane}]
    cipher(word:string):string{
        let cipheredWord = '';
        let helpArray = [];
        for(let i = 0 ; i < word.length ; ++i){
            helpArray[i] = String.fromCharCode(word.charCodeAt(i) + this.key);
        }
        cipheredWord = helpArray.join("");
        this.words.push( { original_word: word, ciphered: cipheredWord } );
        return cipheredWord;
    }
    historyOfCiphered():Array<{ original_word:string, ciphered:string }>{
        return this.words;
    }
}

let student=new Student('Mark','Twain',new Date(), 1);
console.log( student.cipher( "hiihi" ) );
console.log( student.cipher( "hlh" ) );
console.log( student.cipher( "h1i" ) );
console.log( student.historyOfCiphered() );

