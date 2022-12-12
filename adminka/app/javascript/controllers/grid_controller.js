import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    gridRowListener()
  }
}


function toggleToDelete(event){
    event.target.parentNode.classList.toggle('to-delete')
}



function gridRowListener() {
    ($(".grid-user")).each((_i, row)=>row.addEventListener('click', toggleToDelete))    
}