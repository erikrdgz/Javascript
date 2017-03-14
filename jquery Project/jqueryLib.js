function newBook(title, author, numberOfPages, published) {
    //properties
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    //events
    //methods
    this.published = published;
}
var library = function () {};

$(function () {
    window.glibrary = new library();
    window.glibrary.init();
});

library.prototype.init = function () {
    this.$Jumbo = $(".jumbotron ul");
    this.$Well = $(".well-lg ul");
    this.$addBooks = $(".addBooks ul");
    this.myBookArray = new Array();
    this._bindEvents();
};

library.prototype._bindEvents = function () {
    $("#addBook").on("click", $.proxy(this._addBook, this));
    $("#removeTitle").on("click", $.proxy(this._removeBookByTitle, this));
    $("#removeAuthor").on("click", $.proxy(this._removeBookByAuthor, this));
    $("#getByTitle").on("click", $.proxy(this._getBooksByTitle, this));
    $("#getByAuthor").on("click", $.proxy(this._getBooksByAuthor, this));
    $("#getAuthors").on("click", $.proxy(this._getAuthors, this));
    $("#getRandomBook").on("click", $.proxy(this._getRandomBook, this));
    $("#getRandomAuthor").on("click", $.proxy(this._getRandomAuthorName, this));
    $("#addBooks").on("click", $.proxy(this._addMultiple, this));
    $("#addBooksBtn").on("click", $.proxy(this._addBooks, this));
};
// ----------------------REFERENCE FOR SINGLE BOOK----------------------
//library.prototype._addBook = function () {
//    var aVals = this._getAddBookValues();
//    if (aVals.length >= 4) {
//        var book = new newBook(aVals[0], aVals[1], aVals[2], aVals[3]);
//        for (var i = 0; i < this.myBookArray.length; i++) {
//            if (this.myBookArray[i].title == book.title) {
//                return false;
//            }
//        }
//        this.myBookArray.push(book);
//        this.$Jumbo.append("<li>" + book.title + "</li>")
//        return true;
//    }
//    return alert("All fields must be filled out. Please check book fields");
//};
////set myBookArray as a variable fr local storage
//library.prototype._getAddBookValues = function () {
//    var aVals = new Array();
//    $("#new-book-form input").each(function (index, val) {
//        var vInput = $(this).val();
//        if (vInput !== "" && vInput !== NaN) {
//            aVals.push($(this).val());
//        }
//    });
//    return aVals;
//};

library.prototype._removeBookByTitle = function () {

    var nArr = $(".jumbotron ul>li");
    var title = $("#rTitleInput").val();
    var bool = false;

    for (var i = 0; i < this.myBookArray.length; i++) {
        if (this.myBookArray[i].title == title) {
            nArr[i].remove();
            this.myBookArray.splice(i, 1);
        }
    };
};

library.prototype._removeBookByAuthor = function () {
    var nArr = $(".jumbotron ul>li");
    var author = $("#rAuthorInput").val();
    var bool = false;
    for (var i = 0; i < this.myBookArray.length; i++) {
        if (this.myBookArray[i].author == author) {
            nArr[i].remove();
            this.myBookArray.splice(i, 1);
        }
    }
};

library.prototype._getBooksByTitle = function () {
    var title = $("#gTitle").val();
    var regex = new RegExp(title, 'gi');
    for (var i = 0; i < this.myBookArray.length; i++) {
        if (this.myBookArray[i].title.match(regex)) {
            this.$Well.empty();
            this.$Well.append("<li class='list-group-item'>" + "<span class ='badge'>Title</span>" + this.myBookArray[i].title + " By: " + this.myBookArray[i].author + "</li>");
        }
    }
};
library.prototype._getBooksByAuthor = function () {
    var author = $("#gAuthor").val();
    var regex = new RegExp(author, 'gi');
    for (var i = 0; i < this.myBookArray.length; i++) {
        if (this.myBookArray[i].author.match(regex)) {
            this.$Well.empty();
            this.$Well.append("<li class='list-group-item'>" + "<span class ='badge'>Author</span>" + this.myBookArray[i].title + " By: " + this.myBookArray[i].author + "</li>");

        }
    }
};
library.prototype._getAuthors = function () {
    var authors = new Array();
    this.$Well.empty();
    for (var i = 0; i < this.myBookArray.length; i++) {
        if (authors.indexOf(this.myBookArray[i].author) <= -1) {
            authors.push(this.myBookArray[i].author);
            this.$Well.append("<li class='list-group-item'>" + "<span class ='badge'>Author</span>" + this.myBookArray[i].author + "</li>");

        }

    };

};

library.prototype._addMultiple = function () {
    this.$addBooks.append("<li class='list-group-item'>" + "<input type='text' name='Title' class='input' placeholder='Title'><input type='text' name='Author' class='input' placeholder='Author'><input type='text' name='Pages' class='input' placeholder='Number of Pages'><input type='text' name='Publish Year' class='input' placeholder='Published mm/dd/yy'>" + "</li>")
}

library.prototype._addBooks = function () {
    var aAddedBooks = this._getAddBookValues2();
    for (var i = 0; i < aAddedBooks.length; i++) {
        var isUnique = true;
        if (this.myBookArray.length > 0) {
            for (var j = 0; j < this.myBookArray.length; j++) {
                if (this.myBookArray[j].title == aAddedBooks[i].title) {
                    isUnique = false;
                }
            }
        }
        if (isUnique) {
            this.myBookArray.push(aAddedBooks[i]);
            this.$Jumbo.append("<li class='list-group-item'>" + "<span class ='badge'>New</span>" + aAddedBooks[i].title + " By: " + aAddedBooks[i].author + "</li>");
        }
    }
    return false;
};
//set myBookArray as a variable fr local storage
library.prototype._getAddBookValues2 = function () {
    var aVals = new Array();
    $("#multiples li").each(function (index) {
        var ajInputs = $(this).children();
        var aList = new Array();
        ajInputs.each(function () {
            var vInput = $(this).val();
            if (vInput != "" && vInput != NaN) {
                aList.push(vInput);
            }

        });
        if (aList.length >= 4) {
            var addedBook = new newBook(aList[0], aList[1], aList[2], aList[3]);
            aVals.push(addedBook);
            aList = new Array();
        } else {
            alert("All fields must be filled out. Please check book fields #" + index + 1);
        }
    });
    return aVals;
};

library.prototype._getRandomBook = function () {
    this.$Well.empty();
    var randomBook = Math.floor(Math.random() * this.myBookArray.length);
    this.$Well.append("<li class='list-group-item'>" + "<span class ='badge'>Random Book</span>" + this.myBookArray[randomBook].title + "</li>") //MathRandom
};
library.prototype._getRandomAuthorName = function () {
    this.$Well.empty();
    var randomAuthor = Math.floor(Math.random() * this.myBookArray.length);
    this.$Well.append("<li class='list-group-item'>" + "<span class ='badge'>Random Author</span>" + this.myBookArray[randomAuthor].author + "</li>") //MathRandom
};







//$("#getRandomBook").on("click", function () {
//    console.log($(this).text());
//});
//$("#addBooks").on("click", function () {
//    console.log($(this).text());
//});
//$("#getAuthors").on("click", function () {
//    console.log($(this).text());
//});
//$("#getRandomAuthor").on("click", function () {
//    console.log($(this).text());
//});