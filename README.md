# library


const readToggle = document.createElement('button');
    readToggle.textContent = book.read ? "Read" : "Unread";
    readToggle.classList.add(book.read ? "read" : "unread");
    readToggle.addEventListener('click', handleReadButton);
    bookPanel.appendChild(readToggle);


    function handleReadButton(event) {
  const button = event.target;
  const libraryIndex = button.parentElement.dataset.index;

  if (button.classList[0] === "read") {
    button.classList.remove("read")
    button.classList.add("unread")
    button.textContent = "Unread"
    library[libraryIndex].read = false;
  } else {
    button.classList.remove("unread")
    button.classList.add("read")
    button.textContent = "Read"
    library[libraryIndex].read = true;
  }
}