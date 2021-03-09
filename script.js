let myLibrary = [];

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
    

      // Click sumbit button and run the fucntion addBookToLibrary
    document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("submit").addEventListener("click", addBookToLibrary);
    });
    
    // Display the library

    function displayLibrary() {
        const container = document.querySelector('#library_container');
        container.textContent = '';

        myLibrary.forEach((book, index) => {
            const bookPanel = document.createElement('div');
            bookPanel.classList.add('book');
            bookPanel.dataset.index = index;
            container.appendChild(bookPanel);

            const titleText = document.createElement('h3');
            titleText.textContent = book.title;
            bookPanel.appendChild(titleText);
            
            const authorText = document.createElement('p');
            authorText.textContent = "By " + book.author;
            bookPanel.appendChild(authorText);

            const pages = document.createElement('p');
            pages.textContent = book.pages;
            bookPanel.appendChild(pages);

        })
    }

        