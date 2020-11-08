let myLibrary=[];

function Book(name,author) {
    this.name=name
    this.author=author
}

function addBookToLibrary(bk) {
    myLibrary.push(bk)
}

function displayBooks() {
    for (i=0;i<myLibrary.length;i++) {
        var list_of_books=document.querySelector("#book_list")
        var row_count=list_of_books.rows.length;
        var new_row=list_of_books.insertRow(row_count)
        var book_cell=new_row.insertCell(0)
        var author_cell=new_row.insertCell(1)
        book_cell.innerHTML=myLibrary[i].name
        author_cell.innerHTML=myLibrary[i].author
    }
}

const b1=new Book("Night without end","Alistair Maclean");
addBookToLibrary(b1);
const b2=new Book("Ice Station Zebra","Alistair Maclean");
addBookToLibrary(b2);
displayBooks();