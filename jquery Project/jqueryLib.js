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

};

$(function () {
    var glibrary = new library();
    var book1 = new newBook("The Giver", "Erik R.", 345, "03/03/2001");
    var book2 = new newBook("Harry Potter", "J.K R.", 234, "03/04/2001");
    var book3 = new newBook("Crime", "Jack Smith", 363, "03/05/2001");
    var book4 = new newBook("Mystery", "John Doe", 868, "03/06/2001");
    var book5 = new newBook("The Time", "Jack Smith", 363, "03/05/2001")
});

$("#display").on("click", function () { //not a click event
    console.log("");
});



$("#addBook").on("click", function (event) {
    console.log("test")
});
$("#removeTitle").on("click", function () {
    console.log($(this).text());
});
$("#removeAuthor").on("click", function () {
    console.log($(this).text());
});
$("#getRandomBook").on("click", function () {
    console.log($(this).text());
});
$("#getByTitle").on("click", function () {
    console.log($(this).text());
});
$("#getByAuthor").on("click", function () {
    console.log($(this).text());
});
$("#addBooks").on("click", function () {
    console.log($(this).text());
});
$("#getAuthors").on("click", function () {
    console.log($(this).text());
});
$("#getRandomAuthor").on("click", function () {
    console.log($(this).text());
});