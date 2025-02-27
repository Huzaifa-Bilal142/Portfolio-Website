var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname)
{
for(tablink of tablinks){
    tablink.classList.remove("active-links");
}
for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
}
event.currentTarget.classList.add("active-links");
document.getElementById(tabname).classList.add("active-tab");
}

var sidemeu = document.getElementById("sidemenu");

function openmenu()
{
    sidemeu.style.right = "0";
}
function closemenu()
{
    sidemeu.style.right = "-200px";
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzFGjij1gSQ0myfjotp58uvgeRP3HC6hNqOjMeMu0Wj_E5BMXU9aZzvHkM0r3X_WfrJ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent Successfully"
        setTimeout (function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
