let colorInput = document.querySelector("#color");
let hexInput = document.querySelector("#hex");

//event listeners 
colorInput.addEventListener("input", () =>{
  let color = colorInput.value;
  hexInput.value = color;
  document.body.style.backgroundColor = color;
});