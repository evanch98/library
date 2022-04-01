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
    let state;
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let check = document.querySelector("#status").checked;
    if (check === true) {
        state = "✓";
    }
    else {
        state = "✖";
    }
    const addBook = new Book(title, author, pages, state);
    myLibrary.push(addBook);
}

// myLibrary[0] = new Book("AAA", "AAA", "123", "read it");

function removeBook(i) {
    myLibrary.splice(i, 1);
}

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

        const div3 = document.createElement('div');
        div3.classList.add("newItem");
        div3.textContent = myLibrary[i].pages;

        const div4 = document.createElement('div');
        div4.classList.add("newItem");
        div4.textContent = myLibrary[i].status;

        const rmButton = document.createElement('button');
        rmButton.classList.add("rmButton");
        rmButton.setAttribute('id', i);
        rmButton.textContent = "␡";

        rmButton.addEventListener('click', () => {
            alert(rmButton.id);
            removeBook(rmButton.id);
            display();
        })

        div1.appendChild(rmButton);
        container.appendChild(div1);
        container.appendChild(div2);
        container.appendChild(div3);
        container.appendChild(div4);
    }
}

const newBook = document.querySelector("#btn");
newBook.addEventListener('click', () => {
    formContainer.style.cssText = "opacity: 1";
});

console.log(addBookToLibrary);

const submit = document.querySelector("#submit");
submit.addEventListener('click', () => {
    addBookToLibrary();
    formContainer.style.cssText = "opacity: 0"
    display();
});
