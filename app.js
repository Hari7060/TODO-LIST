let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let li = document.createElement("li");
  li.innerText = inp.value;

  let delbtn = document.createElement("button");
  delbtn.innerText = "Delete";
  delbtn.classList.add("delete");
  li.appendChild(delbtn);
  ul.appendChild(li);

  inp.value = "";
});

let delbtns = document.querySelectorAll(".delete");

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let par = event.target.parentElement;
    par.remove();
    console.log("task deleted");
  }
});
