import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    cencelFormListener()
    centring_form()
    submitListener()
  }
}

function cencelFormListener() {
  $("#cencel_form").on('click', ()=>{
      $("#blanket").removeClass('blanket')
      $("#form-wrap").remove()
  })
}

const centring_form = () => {
  const form = $("#form-wrap")
  const left = (window.innerWidth * 0.8 - form.width()) /2 + (window.innerWidth * 0.2) 
  const top  = (window.innerHeight- form.height())/4

  form.css('left', left)
  form.css('top',  top)
  form.css('display', 'block')
}






function validation_on_digits(input){
  const regex = new RegExp('^[0-9]+$')
  if (!regex.test(input)) {
    alert("в поле должны быть введено число")
    return true
  } 
  return false
}



function submitListener() {
  $("form").on('submit',(e)=>{
    $(".trim").each((_i, input)=>input.value = input.value.trim())

    const formData = new FormData(e.target);  
    fetch('/users', {
          method: 'post',
          body: formData,
          headers: {'X-CSRF-Token': X_CSRF_Token}
      })
      .then(res=>{
        if (res.status == 200) window.location.href = `/`
        else return res.text()
      })    
      .then(html=>{
        $("#form-wrap").remove()
        $('body').prepend(html)
      })



    e.preventDefault()
  })
}