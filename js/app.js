console.log("this is app.js")
shownotes();

let addBtn = document.getElementById('addbtn');
addBtn.addEventListener('click', function (e) {

    let addNOTES = document.getElementById('addtext');
    let notes = localStorage.getItem('notes'); // '' me notes is item

    if (notes == null) {  
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addNOTES.value); // here value is a attribute used to fill the placeholder 
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addNOTES.value = "";
    // console.log(notesObj);

    shownotes();
})
// function to show elements from localstorage 
function shownotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = ""; // making a blank string
    notesObj.forEach(function (element, index) {
        html += `<div class="notecard my-2 mx-2 card" style="width: 18rem;">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete note</button>
        </div>
      </div>`
    });
    // this.id add larna se jis element pr click kia gya ha uski id chali jati ha 
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}

//function to delete a note
function deleteNote(index) {
    // console.log("i am deleting", index);

    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
     
    notesObj.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    shownotes(); 

}

let search= document.getElementById('searchtxt');
search.addEventListener('input',function(){
    let inputVal=search.value.toLowerCase();  // agar koi capital me text enter karega it co
    console.log("input event fired!",inputVal);
    let notecards=document.getElementsByClassName('notecard');
    Array.from(notecards).forEach(function(element){
      let cardtxt=element.getElementsByTagName('p')[0].innerText;
    //   console.log(cardtxt);
    if(cardtxt.includes(inputVal)){
      element.style.display="block";
    }
    else{
        element.style.display="none";
    }
    
    })
    
})