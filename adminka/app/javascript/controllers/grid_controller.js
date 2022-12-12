import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    gridRowListener()
    deleteListener()
  }
}



function deleteListener(){
    const delete_button = $("#delete")
    delete_button.on('click', ()=>{
        if (delete_button.hasClass('unactive')) return

        const ids = []
        $(".grid-user").each((_i,val)=>{
            if (val.classList.contains('to-delete')) ids.push(val.dataset.id)
        })
    })
}





function toggleToDelete(event){
    event.target.parentNode.classList.toggle('to-delete')

    const delete_button = $('#delete') 
    let counter = 0
    $(".grid-user").each((_i,val)=>{
         if (val.classList.contains('to-delete')) counter+=1
    })
    if (counter > 0) delete_button.removeClass('unactive')
    else delete_button.addClass('unactive')
}

function gridRowListener() {
    $(".grid-user").each((_i, row)=>row.addEventListener('click', toggleToDelete))    
}