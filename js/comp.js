function modal() {
    var confirmInfoMsg = "Are you sure, The information you entered are best to your knowledge ?";

    var modal = document.createElement("modal")
    var modalHeader = document.createElement("div")
    var modalBody = document.createElement("div")
    var modalActionBtn = document.createElement("div")
    var modalCancel = document.createElement("button")
    var modalOk = document.createElement("button")

    modalCancel.classList.add("button")
    modalOk.classList.add("button")
    
    modalActionBtn.classList.add("modal-action-btn")
    modalBody.classList.add("modal-body")
    modalHeader.classList.add('modal-header')
    
    modalHeader.innerHTML = "modal-header";
    modalBody.innerText = confirmInfoMsg
    modalOk.innerText = "ok"
    modalOk.id="modal-ok"
    modalCancel.innerText = "cancel"
    modalCancel.id= "modal-cancel"
    
    modal.appendChild(modalHeader)
    modal.appendChild(modalBody)
    modal.appendChild(modalActionBtn)
    modalActionBtn.appendChild(modalCancel)
    modalActionBtn.appendChild(modalOk)
    
    let wrapper = document.getElementById("wrapper")
    wrapper.append(modal)
  }