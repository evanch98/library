let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary() {

}

const container = document.querySelector(".container");

myLibrary[0] = new Book("AAA", "AAA", "123", "read it");

function display() {
    for (let i = 0; i < myLibrary.length; i++) {
        const div1 = document.createElement('div');
        div1.classList.add("item");
        div1.textContent = myLibrary[i].title;

        const div2 = document.createElement('div');
        div2.classList.add("item");
        div2.textContent = myLibrary[i].author;
        container.appendChild(div1);
        container.appendChild(div2);
    }
}

display();