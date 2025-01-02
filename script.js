let input = document.getElementById("todoInput");
let output = document.getElementById("todoList");
let btn = document.getElementById("addButton");

btn.addEventListener("click", function () {
  let arr = [];
  const text = input.value;
  let c = document.createElement("li");
  c.textContent = text;
  output.appendChild(c);
  let a = localStorage.setItem("key", text);
  let ab = localStorage.getItem("key");
  console.log(ab);
  if (text !== "") {
    arr.push(ab);
  }
  input.value = "";
});
