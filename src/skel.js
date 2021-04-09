import Logo from './logo.png'
import { Wrapper, Text } from './parts.js'
import { home } from './home';
import { about } from './about';
import { menu} from './menu';
import { contacts } from './contacts';
const skel = () => {
    const html = document.querySelector("html")
    html.style.width = "100%";
    html.style.height = "100%";
    
    const body = document.querySelector("body")
    body.style.fontFamily = "Arial"
    body.style.display = "flex";
    body.style.flexWrap = "wrap"
    body.style.justifySelf = "center";
    body.style.justifyItems = "center";
    body.style.backgroundColor = "rgb(63,10,11)";
    body.style.width = "100%";
    body.style.height = "100%";
    body.style.boxShadow = "inset 60px 60px 900px 90px black";
    body.style.margin = "0px"
    
    const content = document.querySelector("#content")
    content.style.display = "flex";
    content.style.flexWrap = "wrap";
    content.style.justifyContent = "center"
    content.style.justifyItems = "center"
    content.style.width = "100%"
    
    const Top = Wrapper.top("top", "#content")
    Top.set("100%", "70vw", "")
    
    const LogoWrap = Wrapper.image("logo", "#top", Logo)
    LogoWrap.set("200px", "100px","30px", "contain")
    

}

const navBar = () => {
    const content = document.getElementById("content")
    const navWrapper = document.createElement("ul");
    navWrapper.id = "navBar"
    navWrapper.style.display = "flex";
    navWrapper.style.flexWrap = "noWrap";
    navWrapper.style.listStyleType = "none";
    navWrapper.style.justifyContent = "center";
    navWrapper.style.width = "100vw";

    const section = document.getElementById("top")
    section.appendChild(navWrapper)

    const nav = ["HOME", "ABOUT", "MENUS", "CONTACTS"];
    const buttons = [home, about, menu, contacts]

    nav.map((item, index) => {
        let button = document.createElement("a");
        const onclick = () => {
            content.remove()
            const createContent = document.createElement("div");
            createContent.id = "content";
            const body = document.querySelector("body")
            body.appendChild(createContent)
            skel();
            navBar();
            buttons[index]();
            drawLine(`${item}`)
        }
        
        button.addEventListener("click", onclick)
        button.style.margin = "10px";
        navWrapper.appendChild(button)
        let li = document.createElement("li");
        li.id = item;
        li.innerText = item;
        li.style.color = "white";
        button.appendChild(li)
    })
    return {drawLine}
}
  const drawLine = (id) => {
        const currItem = document.getElementById(id);
        currItem.style.borderBottomStyle = "solid";
    }


export { skel , navBar, drawLine}