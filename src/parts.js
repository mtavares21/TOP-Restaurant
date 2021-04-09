
const Wrapper = (() => {

//factory functions to create top section, normal section and image wrappers.
  const top = (id, appendTo) => {
    

      const parent = document.querySelector(appendTo)
      const top = document.createElement("div");
      parent.appendChild(top)
      top.id = id;   
      top.style.display = "flex";
      top.style.flexWrap = "wrap";
      top.style.justifySelf = "center";
      top.style.justifyContent = "center";
      top.style.justifyItems = "center";
      top.style.alignContent = "start";
      top.style.minHeight = "500px"
    const set = ( width, height, image) => {
        const top = document.getElementById(id)
        top.style.width = width;
        top.style.height = height;
      if (image != ""){
        top.style.backgroundImage = `url(${image})`;
        top.style.backgroundRepeat = "no-repeat"
        top.style.backgroundSize = "cover";
      }
    }
    return { set }
  }
 
 // Sections should be all igual, so no set() option.
  const section = (id, appendTo) => {
 
      const parent = document.querySelector(appendTo)
      const section = document.createElement('div');
      section.id = id;
      section.style.display = "flex";
      section.style.flexWrap = "wrap";
      section.style.justifySelf = "center";
      section.style.justifyContent = "center";
      section.style.justifyItems = "center";
      section.style.alignContent = "start"
      section.style.boxShadow = "inset 30px 10px 200px 100px black";
      section.style.backgroundColor = "rgb(63,10,11)"
      section.style.width = "100vw"
      section.style.height = "fit-content"
      parent.appendChild(section)
  }
// For logo and the "Menu" page.
  const image = (id, appendTo, image) => {

      const imgWrapper = document.createElement("div")
      imgWrapper.id = id;
      imgWrapper.style.textAlign = "center";
      imgWrapper.style.display = "flex";
      imgWrapper.style.justifyContent = "center"
      imgWrapper.style.justifyItems = "center";
      imgWrapper.style.alignItems = "center";
      imgWrapper.style.backgroundImage = `url(${image})`;
      imgWrapper.style.backgroundRepeat = "no-repeat";
      imgWrapper.style.maxWidth = "500px"
      imgWrapper.style.minWidth = "50px"
      const parent = document.querySelector(appendTo)
      parent.appendChild(imgWrapper)

    
    const set = (width, height, margin, fit) => {
      const imgWrapper = document.getElementById(id)
      imgWrapper.style.width = width;
      imgWrapper.style.height = height;
      imgWrapper.style.margin = margin;
      fit === "default"? imgWrapper.style.backgroundSize = "cover":
      imgWrapper.style.backgroundSize = fit;
    }
  return { set}
  }
  return { top, section, image }
})()

  const Text = (() => {

    const title = (id, appendTo, text) => {
      const title = document.createElement('h1');
      title.id = id;
      title.classList = "remove";
      title.innerText = text;
      title.style.fontFamily = 'Arial';
      title.style.fontSize = "50px"
      title.style.color = "white";
      title.style.marginTop = "10%"
      title.style.marginLeft = "auto";
      title.style.marginRight = "auto";
      title.style.justifySelf = "center";
      title.style.textAlign = "center";
      title.style.width = "100%";
      title.style.height = "50px";
      const parent = document.querySelector(appendTo);
      parent.appendChild(title)
    }

    const subTitle = (id, appendTo, text) => {
      const subTitle = document.createElement('h4');
      subTitle.id = id;
      subTitle.innerText = text;
      subTitle.style.color = "white";
      subTitle.style.marginLeft = "auto";
      subTitle.style.marginRight = "auto";
      subTitle.style.fontSize = "30px";
      subTitle.style.textAlign = "center";
      subTitle.style.width = "100%"
      const parent = document.querySelector(appendTo);
      parent.appendChild(subTitle)
    }

    const section = (id, appendTo, text) => {
      const section = document.createElement('section');
      section.id = id
      section.innerText = text
      section.style.color = 'white';
      section.style.justifyContent = "center";
      section.style.textAlign = "center";
      section.style.margin = "30px";
      section.style.Width = "100%";
      const parent = document.querySelector(appendTo);
      parent.appendChild(section)
    }
  
  return { title, subTitle, section }
  })()




export { Wrapper, Text }