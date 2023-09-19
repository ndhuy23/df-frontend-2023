document.getElementById('listBook');
var books=[
    {
        name: 'Refactoring',
        author: 'Martin Fowler',
        topic:'Programming',
    },
    {
        name: 'Designing Data-Intensive Appliacations',
        author: 'Martin Kleppmann',
        topic: 'Database'
    },
    {
        name: 'The Phoenix Project',
        author: 'Gene Kim',
        topic: 'DevOps'
    }
]
function renderBook(array){
    var element = '';
    array.map(book =>{
        element += '<tr>'
                +'<td>'+book.name+'</td>'
                +'<td>'+book.author+'</td>'
                +'<td>'+book.topic+'</td>'
                +'<td><a href="#" class="delete" data-bookname="'+book.name+'">Delete</a></td>'
                +'</tr>'
    })
    document.getElementById('listBook').innerHTML = element;
}
function reloadDelBtn(){
    var deletes = document.querySelectorAll('.delete')
    for(const del of deletes){
        del.addEventListener('click',function(event){
            var delcontent = document.getElementById('delete-content')
            var bookname = del.getAttribute('data-bookname')
            delcontent.innerHTML = 'Do you want to delete <b>'+bookname+'</b> book';
            showDel();
            var deletebtn = document.querySelector('.confirm-yes');
            var bookname = this.getAttribute('data-bookname')
            deletebtn.addEventListener('click',function(){
                var td = del.parentElement;
                var tr = td.parentElement;
                tr.remove();
                hideDel();
            })
            console.log(123)
    
        });
    }
}
window.onload = function(){
    renderBook(books);
    reloadDelBtn();
}
function searchBook(){
    let valueSearch = document.getElementById('search').value;
    let bookSearch = books.filter(value=>{
        return value.name.toUpperCase().includes(valueSearch.toUpperCase());
    })
    renderBook(bookSearch);
    reloadDelBtn();
}