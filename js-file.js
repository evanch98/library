let myLibrary = [];

const container = document.querySelector(".container");
const formContainer = document.querySelector(".form-container");

class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}

// Function to add book objects to myLibrary
function addBookToLibrary() {
    let state;

    // Getting values from form input
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;

    // Checking whether the checkbox is checked
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

// To remove book
function removeBook(i) {
    myLibrary.splice(i, 1);
}

// Function to display books on the screen
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
        div4.style.cursor = 'pointer';
        div4.addEventListener('click', () => {
            if (myLibrary[i].status === "✓") {
                myLibrary[i].status = "✖";
            }
            else {
                myLibrary[i].status = "✓";
            }
            display();
        });

        const rmButton = document.createElement('button');
        rmButton.classList.add("rmButton");
        rmButton.setAttribute('id', i);
        rmButton.textContent = "del";

        rmButton.addEventListener('click', () => {
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

// Setting the formContainer opacity to 1 upon clicking the button to allow users to insert book
const newBook = document.querySelector("#btn");
newBook.addEventListener('click', () => {
    formContainer.style.cssText = "opacity: 1";
});

// Event listener for submit button
// After clicking the submit button, the opacity of the formContainer will change into 0
const submit = document.querySelector("#submit");
submit.addEventListener('click', () => {
    addBookToLibrary();
    formContainer.style.cssText = "opacity: 0"
    display();
});
