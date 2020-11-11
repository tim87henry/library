let myLibrary=[];

function Book(name,author) {
    this.name=name
    this.author=author
}

function addBookToLibrary(bk) {
    myLibrary.push(bk)
}

function displayBooks() {
    var list_of_books=document.querySelector("#book_list")
    list_of_books.innerHTML="";
    for (i=0;i<myLibrary.length;i++) {
        const newDiv = document.createElement("div");
        newDiv.id="newBook"
        const bookDiv = document.createElement("div");
        bookDiv.id="bookDiv"
        const bookName = document.createTextNode(myLibrary[i].name);
        bookDiv.appendChild(bookName);
        const authorDiv = document.createElement("div");
        authorDiv.id="authorDiv"
        const authorName = document.createTextNode(myLibrary[i].author)
        authorDiv.appendChild(authorName)
        newDiv.appendChild(bookDiv)
        newDiv.appendChild(authorDiv)
        list_of_books.appendChild(newDiv);
    }
}

const b1=new Book("Night without end","Alistair Maclean");
addBookToLibrary(b1);
const b2=new Book("Ice Station Zebra","Alistair Maclean");
addBookToLibrary(b2);
const b3=new Book("The Day of Jackal","Frederick Forsyth");
addBookToLibrary(b3);
const b4=new Book("The Crimson Flame","Franklin W. Dixson");
addBookToLibrary(b4);
const b5=new Book("My Story","Rafael Nadal");
addBookToLibrary(b5);
const b6=new Book("Eye of the Needle","Ken Follett");
addBookToLibrary(b6);
const b7=new Book("The Girl with the Dragon Tattoo","Stieg Larsson");
addBookToLibrary(b7);
displayBooks();

addBookBtn = document.getElementById("add_book_button")
modalBox = document.getElementById("modal_box")
closeBtn = document.getElementById("close_button")
addBtn = document.getElementById("add_button")

addBookBtn.onclick = function() {
    modalBox.style.display="block";
}

closeBtn.onclick = function() {
    modalBox.style.display="none";
}

addBtn.onclick = function() {
    const newBook=new Book(document.getElementById("book_name").value,document.getElementById("author_name").value);
    addBookToLibrary(newBook);
    displayBooks();
    modalBox.style.display="none";
}