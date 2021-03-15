//Array that the object is pushed to, this is then looped and each constructor displayed
let myLibrary = [];

// Object and constructor variables
function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        }
//Add method to book prototype

Book.prototype.toggleRead = function() {
    // code here
}
    
// Test book
const theHobbit = new Book('The Hobbit','J.R.R. Tolkien','295 pages', true)
    myLibrary.push(theHobbit);
    
// Pushes object data to myLibary Array
    
function addBookToLibrary(event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        const read = document.querySelector('#read').checked
        let newBook = new Book(title, author, pages, read);
        myLibrary.push(newBook);
        displayLibrary();
      }


    //Display the form, function is called from HTML 'add book' button

    function displayForm() {
        
        const formDiv= document.querySelector('#form_container');

        const formBook = document.createElement('form');
        formBook.id = 'form';
        formBook.name = 'form';
        formDiv.appendChild(formBook);

        function appendInput(type, id, labelText) {
            const label = document.createElement('label');
            label.htmlFor = id;
            label.textContent = labelText;
            formBook.appendChild(label);
            
            const input = document.createElement('input');
            input.type = type;
            input.id = id;
            input.name = id;
            formBook.appendChild(input);
        
            const br = document.createElement('br');
            formBook.appendChild(br);
          }
        
          appendInput("text", "title", "Title:", );
          appendInput("text", "author", "Author:", );
          appendInput("number", "pages", "# of pages:",);
          appendInput("checkbox", "read", "Read",);
          
        //Submit button of form 
          const submit = document.createElement('button');
          submit.id = 'submit';
          submit.textContent = 'Submit';
          submit.addEventListener('click', addBookToLibrary);
          formBook.appendChild(submit);
        }
    
        // function to validation form
    
    

    // Display the library

    function displayLibrary() {
        const container = document.querySelector('#library_container');
        container.textContent = '';

        //My library is looped, table created and text content taken from the constructors
        myLibrary.forEach((book, index) => {
            const bookTable = document.createElement('div');
            bookTable.classList.add('book');
            bookTable.dataset.index = index;
            container.appendChild(bookTable);

            const titleText = document.createElement('h3');
            titleText.textContent = book.title;
            bookTable.appendChild(titleText);
            
            const authorText = document.createElement('p');
            authorText.textContent = book.author;
            bookTable.appendChild(authorText);

            const pages = document.createElement('p');
            pages.textContent = book.pages;
            bookTable.appendChild(pages);

            const readText = document.createElement('p');
            readText.textContent = book.read;
            bookTable.appendChild(readText);

            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.addEventListener('click', removeBook )
            bookTable.appendChild(removeButton);
        })
    }

    
// Button to remove the book from the library
    function removeBook(event) {
        const button = event.target;
        const libraryIndex = button.parentElement.dataset.index;
        myLibrary.splice(libraryIndex, 1);
        displayLibrary();
    }
        