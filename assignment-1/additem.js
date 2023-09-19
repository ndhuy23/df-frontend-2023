let form = document.getElementById('modal-content-add')
let list = document.getElementById('listBook')

form.addEventListener('submit',function(event){
    event.preventDefault();
    var book = {
        name: document.getElementById('name').value,
        author: document.getElementById('author').value,
        topic: document.getElementById('topic').value
    }
    books.push(book);
    renderBook(books);
    deletes = document.querySelectorAll(".delete");
    for(const del of deletes){
        del.addEventListener('click', showDel);
    }
    formAdd.style.display="none";
    reloadDelBtn();
})


