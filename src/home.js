import image from "./home.jpeg";
import { Wrapper, Text } from "./parts.js";
import { drawLine }  from "./skel.js"
const home = () => {
  
// Top section setup
  
  const Top = Wrapper.top("top", "#content");
  Top.set("100vw", "50vw", image);
  Text.title("title", "#top", "WELCOME");
 
// Next section content
  
Wrapper.section("section", "#content")
  Text.subTitle("subTitle", "#section",`WELCOME TO THE BAR THAT OFFERS THE BEST OF BOTH WORLDS.
IRELAND. AND EVERYWHERE ELSE.`)
  Text.section("textSection", "#section",`
YOU LOOK THIRSTY… 
LET’S TAKE CARE OF THAT.

THERE ARE LOTS OF GREAT BARS IN THE WORLD.

BUT THERE’S NO WORLD LIKE THIS BAR.`)
drawLine("HOME")
    
}

export { home }