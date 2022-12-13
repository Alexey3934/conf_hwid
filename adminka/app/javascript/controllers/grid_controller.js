import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    gridRowListener()
    copyKeyListener()
    // makeBorderRadius()
    hrs()
  }
}

function hrs(){
  const rows = $(".grid-user")

  rows.each((i, row)=>{
    if (i < (rows.length - 1)) row.style.borderBottom = 'dashed 1px #3b3b3b'
  })
}



const copyContent = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Content copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

function viewCopied(text){
  text.style.color = 'black'
  setTimeout(()=>{
    text.style.color = 'white'
  }, 500)

}


function copyKeyListener() {
    $(".copy").each((_i,text)=>{
      text.addEventListener('click', (e)=>{
        const text = e.target
        copyContent(text.innerHTML)
        viewCopied(text)

      })


    })
}


function toggleToDelete(event){
    if (event.target.classList.contains('extend-time')) return
    if (event.target.classList.contains('copy')) return
    


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