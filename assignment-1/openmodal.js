let addBook = document.querySelector(".add-book")
let modals = document.querySelectorAll(".modal")
let btnCloses = document.querySelectorAll('.close')
let modalContents= document.querySelectorAll(".modal-content")
let formDel = document.getElementById("form-delete");
let formAdd = document.getElementById('form-add');
let deletes = document.querySelectorAll(".delete");



function showAdd(){
    formAdd.style.display="flex"
}
function hideAdd(){
    formAdd.style.display="none"
}
function showDel(){
    formDel.style.display="flex"
}
function hideDel(){
    formDel.style.display="none"
}

//Them sach
addBook.addEventListener('click',showAdd)
for(const btnClose of btnCloses){
    btnClose.addEventListener('click',hideAdd)
    btnClose.addEventListener('click',hideDel)
}
for(const modal of modals){
    modal.addEventListener('click',hideAdd);
    modal.addEventListener('click',hideDel);
}
for(const modalContent of modalContents){
    modalContent.addEventListener('click', function(event){
        event.stopPropagation()
    })
}
//Xoa sach

formDel.addEventListener('click',hideDel);



