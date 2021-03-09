//Array that the object is pushed to, this is then looped and each constructor displayed
let myLibrary = [];

// Object and constructor variables
class Book {
constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        
    }
}
    
// Test book
const theHobbit = new Book('The Hobbit','J.R.R. Tolkien','295 pages')
    myLibrary.push(theHobbit);
    
// Pushes object data to myLibary Array
    function addBookToLibrary(event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        let newBook = new Book(title, author, pages);
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
          
        //Submit button of form 
          const submit = document.createElement('button');
          submit.id = 'submit';
          submit.textContent = 'Submit';
          submit.addEventListener('click', addBookToLibrary);
          formBook.appendChild(submit);
    }
    // Display the library

    function displayLibrary() {
        const container = document.querySelector('#library_container');
        container.textContent = '';

        //My library is looped, table created and text content taken from the constructors
        myLibrary.forEach((book, index) => {
            const bookPanel = document.createElement('table');
            bookPanel.classList.add('book');
            bookPanel.dataset.index = index;
            container.appendChild(bookPanel);

            const titleText = document.createElement('h3');
            titleText.textContent = book.title;
            bookPanel.appendChild(titleText);
            
            const authorText = document.createElement('p');
            authorText.textContent = book.author;
            bookPanel.appendChild(authorText);

            const pages = document.createElement('p');
            pages.textContent = book.pages;
            bookPanel.appendChild(pages);

        })
    }

        