const navbar = () => {
const content = document.querySelector("#content")
const navWrapper = document.createElement("ul");
navWrapper.style.display = "flex";
navWrapper.style.flexWrap = "noWrap";
content.appendChild(navWrapper)
const nav = [ "HOME", "ABOUT", "MENUS", "CONTACTS"];
nav.map(item => {
  let button = document.createElement("a");
  navWrapper.appendChild(button) 
  let li = document.createElement("li");
  button.href = `${item.toLowerCase()}()`;
  li.innerText = item;
  button.appendChild(li)
})


}