//globals
var wrapper = document.getElementById("wrapper")

//modal box element and functioncs
//
//
//
//
//
//creating element
function openModal(){

var modal = document.createElement("modal")
var modalHeader = document.createElement("div")
var modalBody = document.createElement("div")
var modalActionBtn = document.createElement("div")
var modalCancel = document.createElement("button")
var modalOk = document.createElement("button")
// adding css className
modalCancel.classList.add("button")
modalOk.classList.add("button")
modalActionBtn.classList.add("modal-action-btn")
modalBody.classList.add("modal-body")
modalHeader.classList.add('modal-header')
// adding text to elements
modalHeader.innerHTML = modalHeaderMsg
modalBody.innerText = modalBodyMsg
modalOk.innerText = "ok"
modalOk.setAttribute('type', 'button')
modalCancel.innerText = "cancel"
modalCancel.setAttribute('type', 'button')
// appending the element to its parent
modal.appendChild(modalHeader)
modal.appendChild(modalBody)
modal.appendChild(modalActionBtn)
modalActionBtn.appendChild(modalCancel)
modalActionBtn.appendChild(modalOk)

  wrapper.append(modal);
}
function closeModal() {
  modal.remove();
}



// sidebar element and functions
var sidebar = document.createElement('sidebar')
var nameSpace = document.createElement('a')
var nameH2 = document.createElement('h2')
var food = document.createElement('a')
var clothes = document.createElement('a')
var blood = document.createElement('a')
var donate = document.createElement('a')
var account = document.createElement('a')

nameH2.innerText = 'ସମର୍ପଣ'
food.innerText = 'Food'
clothes.innerText = 'Clothes'
blood.innerText = 'Blood'
donate.innerText = 'Donate Us'
account.innerText = 'Account'


food.setAttribute('href', 'foodCollection.html')
clothes.setAttribute('href', 'clothesCollection.html')
blood.setAttribute('href', 'donateBlood.html')
donate.setAttribute('href', 'donateUs.html')
account.setAttribute('href', 'account.html')


nameSpace.appendChild(nameH2)
sidebar.appendChild(nameSpace)
sidebar.appendChild(food)
sidebar.appendChild(clothes)
sidebar.appendChild(blood)
sidebar.appendChild(donate)
sidebar.appendChild(account)

function createSidebar() {
  document.body.appendChild(sidebar)
}




// var modalHeaderMsg and modalBodyMsg is used for assigning modal elements