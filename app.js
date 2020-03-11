// document.getElementById("demo").innerHTML = 'Hello world!'
// document.getElementsByTagName("p")
// document.getElementsByClassName('wrapper')
document.getElementById('dogz').style.width = '600px';
// document.getElementById('dogz').style.padding = '600px';
// debugger
// document.getElementById('dogz').src = "https://images.unsplash.com/photo-1548658166-136d9f6a7e76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"

// Events 
var btn = document.getElementById('btn')
var dog = document.getElementById('dogz')
btn.addEventListener("click", changePic)

function changePic() {
  if (dog.src === "https://images.unsplash.com/photo-1548658166-136d9f6a7e76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80") {
    dog.src = "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
  } else {
    dog.src = "https://images.unsplash.com/photo-1548658166-136d9f6a7e76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"
  }
}