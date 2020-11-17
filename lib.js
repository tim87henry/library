let myLibrary=[];
let bookIndex=1;
let newBook=true;
let currentEditedBookIndex=0;

function Book(name,author,pages,read,index=bookIndex) {
    this.name=name;
    this.author=author;
    this.pages=pages;
    this.read=read;
this.index=bookIndex++;
}

function addBookToLibrary(bk) {
    myLibrary.push(bk)
}

function displayBooks() {
    var list_of_books=document.querySelector("#book_list")
    list_of_books.innerHTML="";
    for (i=0;i<myLibrary.length;i++) {
        const newDiv = document.createElement("div");
        newDiv.id="newBook";

        const bookDiv = document.createElement("div");
        bookDiv.id="bookDiv";
        const bookName = document.createTextNode(myLibrary[i].name);
        bookDiv.appendChild(bookName);
       
        const authorDiv = document.createElement("div");
        authorDiv.id="authorDiv";
        const authorName = document.createTextNode(myLibrary[i].author)
        authorDiv.appendChild(authorName);
       
        const lastRow = document.createElement("div");
        lastRow.id="lastRow";

        const pagesDiv = document.createElement("div");
        pagesDiv.id="pagesDiv";
        const numPages = document.createTextNode(myLibrary[i].pages+"p");
        pagesDiv.appendChild(numPages);

        const readDiv = document.createElement("div");
        readDiv.id="readDiv";
        let hasRead="Not read";
        if (myLibrary[i].read) {
            hasRead="Read";
        }
        const readBook = document.createTextNode(hasRead);
        readDiv.appendChild(readBook);

const closeDiv = document.createElement("div");
closeDiv.id="closeDiv";
const closeBtn = document.createElement("button");
closeBtn.className="closeBtn";
closeBtn.innerHTML="&#10006";
closeBtn.dataset.indexNumber=i;

const editBtn = document.createElement("button");
editBtn.className="editBtn";
editBtn.innerHTML="&#9998";
editBtn.dataset.indexNumber=i;

closeDiv.appendChild(editBtn);
closeDiv.appendChild(closeBtn);

editBtn.addEventListener("click",function() {
document.getElementById("book_name").value=myLibrary[editBtn.dataset.indexNumber].name;
document.getElementById("author_name").value=myLibrary[editBtn.dataset.indexNumber].author;
document.getElementById("num_pages").value=myLibrary[editBtn.dataset.indexNumber].pages;
if (myLibrary[editBtn.dataset.indexNumber].read) {
document.getElementsByName("has_read")[0].checked=true;
} else {
document.getElementsByName("has_read")[1].checked=true;
}
currentEditedBookIndex=editBtn.dataset.indexNumber;
newBook=false;
modalBox.style.display="block";
});

closeBtn.addEventListener("click",function() {
myLibrary.splice(closeBtn.dataset.indexNumber,1);
displayBooks();
});

newDiv.appendChild(closeDiv);
        newDiv.appendChild(bookDiv);
        newDiv.appendChild(authorDiv);
        lastRow.appendChild(pagesDiv);
        lastRow.appendChild(readDiv);
        newDiv.appendChild(lastRow);
        list_of_books.appendChild(newDiv);
    }
}

const b1=new Book("Night without end","Alistair Maclean",350,true);
addBookToLibrary(b1);
const b2=new Book("Ice Station Zebra","Alistair Maclean",400,true);
addBookToLibrary(b2);
const b3=new Book("The Day of Jackal","Frederick Forsyth",425,true);
addBookToLibrary(b3);
const b4=new Book("The Crimson Flame","Franklin W. Dixson",200,true);
addBookToLibrary(b4);
const b5=new Book("My Story","Rafael Nadal",150,false);
addBookToLibrary(b5);
const b6=new Book("Eye of the Needle","Ken Follett",250,true);
addBookToLibrary(b6);
const b7=new Book("The Girl with the Dragon Tattoo","Stieg Larsson",400,false);
addBookToLibrary(b7);
displayBooks();

addBookBtn = document.getElementById("add_book_button")
modalBox = document.getElementById("modal_box")
closeBtn = document.getElementById("close_button")
addBtn = document.getElementById("add_button")
var closeBookBtns = document.getElementsByClassName('closeBtn');

addBookBtn.onclick = function() {
document.getElementById("book_name").value="";
document.getElementById("author_name").value="";
document.getElementById("num_pages").value="";
document.getElementsByName("has_read")[0].checked=false;
document.getElementsByName("has_read")[1].checked=false;
    modalBox.style.display="block";
}

closeBtn.onclick = function() {
    modalBox.style.display="none";
}

addBtn.onclick = function() {
    if (newBook) {
const newBook=new Book(document.getElementById("book_name").value,document.getElementById("author_name").value,document.getElementById("num_pages").value,document.getElementsByName("has_read")[0].checked);
addBookToLibrary(newBook);
} else {
myLibrary[currentEditedBookIndex].name=document.getElementById("book_name").value;
myLibrary[currentEditedBookIndex].author=document.getElementById("author_name").value;
myLibrary[currentEditedBookIndex].pages=document.getElementById("num_pages").value;
if (document.getElementsByName("has_read")[0].checked) {
myLibrary[currentEditedBookIndex].read=true;
} else {
myLibrary[currentEditedBookIndex].read=false;
}
newBook=true;
}
    displayBooks();
    modalBox.style.display="none";
}