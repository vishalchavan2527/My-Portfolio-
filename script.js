let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
let sidemenu = document.getElementById("sidemenu");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



function openmenu(){
    sidemenu.style.right= "0";
}
function closemenu(){
    sidemenu.style.right= "-200px";
}  


// From

const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch({ method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent sucessfully!"
        setTimeout(function(){
            msg.innerHTML = ""

        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})