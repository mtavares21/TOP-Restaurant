import image from "./about.jpeg"
import { Wrapper, Text }from "./parts.js";

const about = () => {
 
const Top = Wrapper.top("top", "#content");
 
  Top.set("100vw", "50vw", image);
  const Title = Text.title("title", "#top", "OUR STORY");
  const Section = Wrapper.section("section", "#content")
  const subTitle = Text.subTitle("subTitle", "#section", "TWICE UPON A TIME…");
  const story = Text.section("story", "#section", `TWO INNOCENT GUYS WITH JUST A HEADFUL OF DREAMS AND STARDUST IN THEIR EYES. THAT’S WHO WE ELBOWED PAST AS WE HAULED OUT OF JFK, LOOKED AROUND AND SAID, 

"OKAY, NEW YORK. YOU’LL DO."
      

      YOU SEE, WE’D ALREADY COME A LONG WAY.
      

      OF COURSE, IT DIDN’T HAPPEN OVERNIGHT. IN ALL, IT TOOK US SIX YEARS TO BREATHE LIFE INTO THE PHENOMENON THAT IS THE DEAD RABBIT. SIX YEARS OF PLANNING AND DREAMING. OF FAILING, THEN FAILING BETTER. FINALLY WE GOT EXACTLY WHAT WE WANTED: THREE FLOORS OF WELCOME, WITH SERIOUS COCKTAILS.

      AN IRISH BAR THAT REDEFINED HOSPITALITY. THE COMPLETE EXPERIENCE.`)


  
}

export { about }  