//globals
var wrapper = document.getElementById("wrapper")




//modal box element and functioncs
var modalHeaderMsg = "Confirm"
var modalBodyMsg = "Are you sure, The information you entered are best to your knowledge ?";
//creating element
var modal = document.createElement("modal")
var modalHeader = document.createElement("div")
var modalBody = document.createElement("div")
var modalActionBtn = document.createElement("div")
var modalCancel = document.createElement("button")
var modalOk = document.createElement("button")
// adding className
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
function openModal() {
  modal.appendChild(modalHeader)
  modal.appendChild(modalBody)
  modal.appendChild(modalActionBtn)
  modalActionBtn.appendChild(modalCancel)
  modalActionBtn.appendChild(modalOk)
  // adding the element to the document
  wrapper.append(modal);
}

function closeModal() {
  modal.remove();
}

// sidebar element and functions
var sidrbar = document.createElement('sidebar')








/*



  <sidebar>
    <name><a><h2>ସମର୍ପଣ</h2></a></name>
    <items><a href="#">Food</a></items>
    <items><a href="#">Clothes</a></items>
    <items><a href="#">Blood</a></items>
    <items><a href="#">Donate</a></items>
    <items><a href="#">Account</a></items>
  </sidebar>




*/