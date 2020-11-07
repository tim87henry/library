let myLibrary=[];

function Book(name,author) {
    this.name=name
    this.author=author
}

function addBookToLibrary() {
    myLibrary[myLibrary.length-1]=this.name
    console.log("Added book")
}

function displayBooks() {
    for (book in myLibrary) {
        console.log(book.name)
    }
}

b1=new Book("Night without end","Alistair Maclean");
b1.addBookToLibrary
displayBooks