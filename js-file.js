let myLibrary = [];

const container = document.querySelector(".container");
const formContainer = document.querySelector(".form-container");

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    const addBook = new Book(title, author, pages, 'yes');
    myLibrary.push(addBook);
}

// myLibrary[0] = new Book("AAA", "AAA", "123", "read it");

function display() {
    const items = document.querySelectorAll(".newItem");
    items.forEach((item) => {
        item.remove();
    })
    for (let i = 0; i < myLibrary.length; i++) {
        const div1 = document.createElement('div');
        div1.classList.add("newItem");
        div1.textContent = myLibrary[i].title;

        const div2 = document.createElement('div');
        div2.classList.add("newItem");
        div2.textContent = myLibrary[i].author;
        container.appendChild(div1);
        container.appendChild(div2);
    }
}

const newBook = document.querySelector("#btn");
newBook.addEventListener('click', () => {
    formContainer.style.cssText = "opacity: 1";
    display();
});

console.log(addBookToLibrary);

const submit = document.querySelector("#submit");
submit.addEventListener('click', () => {
    addBookToLibrary();
    formContainer.style.cssText = "opacity: 0"
    console.log(myLibrary);
});

