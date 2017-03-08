function newBook(title, author, numberOfPages, Published) {
    //properties
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    //events
    //methods
    this.Published = Published;
}

var library = function () {

}; //array
library.prototype.myBookArray = new Array();

library.prototype.addBook = function (book) {
    for (var i = 0; i < this.myBookArray.length; i++) {
        if (this.myBookArray[i].title == book.title) {
            return false;
        }
    }
    this.myBookArray.push(book);
    return true;
};

library.prototype.removeBookByTitle = function (title) {
    for (var i = 0; i < this.myBookArray.length; i++) {
        if (this.myBookArray[i].title == title) {
            this.myBookArray.splice(i, 1);
            return true;
        }
    };
    return false; //a loop
};
library.prototype.removeBookByAuthor = function (author) {
    for (var i = 0; i < this.myBookArray.length; i++) {
        if (this.myBookArray[i].author == author) {
            this.myBookArray.splice(i, 1);
            return true;
        }
    };
    return false;
    //loop
};
library.prototype.getRandomBook = function () {
    var randomBook = Math.floor(Math.random() * this.myBookArray.length);
    return this.myBookArray.length <= 0 ? null : this.myBookArray[randomBook]; //MathRandom
};
library.prototype.getBookByTitle = function (title) {
    var regex = new RegExp(title, 'gi');
    var arr1 = new Array();
    for (var i = 0; i < this.myBookArray.length; i++) {
        if (this.myBookArray[i].title.match(regex))
            arr1.push(this.myBookArray[i]);

    }
    return arr1;
};
library.prototype.getBooksByAuthor = function (author) {
    var regex = new RegExp(author, 'gi');
    var arr1 = new Array();
    for (var i = 0; i < this.myBookArray.length; i++) {
        if (this.myBookArray[i].author.match(regex)) {
            arr1.push(this.myBookArray[i]);

        }

    }
    return arr1; //
};
library.prototype.addBooks = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        this.myBookArray.push(arr[i]);
    }
    if (arr.length !== 0) {
        return arr.length;
    } else if (arr.length === 0) {
        return 0;
    }
};
library.prototype.getAuthors = function () {
    var authors = new Array();
    for (var i = 0; i < this.myBookArray.length; i++) {
        if (authors.indexOf(this.myBookArray[i].author) < 0) {
            authors.push(this.myBookArray[i].author);
        }
    };
    return authors;
};
library.prototype.getRandomAuthorName = function () {
    var randomAuthor = Math.floor(Math.random() * this.myBookArray.length);
    return this.myBookArray.length <= 0 ? null : this.myBookArray[randomAuthor].author; //MathRandom
};

var glibrary = new library();
//declaring variables and assigning new instances of our newBook class
var book1 = new newBook("The Giver", "Erik R.", 345, "03/03/2001");
var book2 = new newBook("Harry Potter", "J.K R.", 234, "03/04/2001");
var book3 = new newBook("Crime", "Jack Smith", 363, "03/05/2001");
var book4 = new newBook("Mystery", "John Doe", 868, "03/06/2001");
var book5 = new newBook("The Time", "Jack Smith", 363, "03/05/2001");

//date