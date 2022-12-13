import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    newUserListener()
    deleteListener()
  }
}


function newUserListener(){
  $("#new").on("click", ()=>{
    $("#blanket").addClass('blanket')
    fetch("users/new")
      .then(res=>res.text())
      .then(html=>{$('body').append(html)
    })
  })
}

function deleteListener(){
  const delete_button = $("#delete")
  delete_button.on('click', ()=>{
      if (delete_button.hasClass('unactive')) return

      const ids = []
      $(".grid-user").each((_i,val)=>{
          if (val.classList.contains('to-delete')) ids.push(val.dataset.id)
      })




      fetch(`/users/${ids}`, {
        method: 'delete',
        headers:{'X-CSRF-Token': X_CSRF_Token}
      }) 
      setTimeout(()=>{window.location.href = '/'}, 200) 





  })
}