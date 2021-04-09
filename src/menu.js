import image from "./menu.jpeg"
import { Wrapper, Text } from "./parts.js";
import mixDrinks from "./menuPhotos/md.jpeg"
import foodMenu from "./menuPhotos/fm.jpeg"
import brunchMenu from "./menuPhotos/bm.jpeg"
import beer from "./menuPhotos/beer.png.jpeg"
import wine from "./menuPhotos/wine.jpeg"
import spirits from "./menuPhotos/spirits.jpeg"

const menu = () => {

  const Top = Wrapper.top("top", "#content");
  Top.set("100vw", "50vw", image);

  Text.title("title", "#top", "Menu");
  Wrapper.section("section", "#content")
  
  const photos = [
    { title: "COCKTAILS", photo: mixDrinks },
    { title: "FOOD", photo: foodMenu },
    { title: "BRUNCH", photo: brunchMenu },
    { title: "BEER", photo: beer },
    { title: "WINE", photo: wine },
    { title: "SPIRITS", photo: spirits }
  ];
  
  Text.section("covid", "#section", `THANKS FOR VISITING US TODAY. THIS MENU IS ONE WE’LL BE SERVING FOR THE DURATION OF THE COVID-19 SITUATION. 

YOUR SAFETY AND PEACE OF MIND ARE OUR PRIORITY, SO REST ASSURED EVERYTHING’S PREPARED IN LINE WITH THE HIGHEST STANDARDS. 
ALL YOUR FAVORITES ARE HERE, AND WE’VE KEPT THE CRAIC IN TOO. WELL, WE COULDN’T LEAVE THAT OUT NOW, COULD WE?`)
  photos.map( item => {
    let Photo = Wrapper.image(item.title, "#section", item.photo);
    Photo.set("320px", "220px", "10px", "cover");
    Text.subTitle(`${item.title}Title`, `#${item.title}`, item.title);
  })
 
}

export { menu } 