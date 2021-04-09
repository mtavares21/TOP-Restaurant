import image from './contacts.jpeg'
import { Wrapper, Text} from "./parts.js";

const contacts = () => {
  const Top = Wrapper.top("top", "#content")
  Top.set("100vw", "50vw", image);
  Text.title("title", "#top", "CONTACTS");
  Wrapper.section("section", "#content");
  Text.subTitle("hoursTitle", "#section", "OPENING HOURS");
  Text.section("hours", "#section", `MONDAY - CLOSED

TUESDAY - FRIDAY 4PM - 11PM

SATURDAY - SUNDAY 12PM - 11PM`)
  Text.subTitle("contactsTitle", "#section", `YOU'LL FIND US:`)
  Text.section("contacts", "#section", `30 WATER STREET (NEAR BROAD ST)

NEW YORK, NY, 10004, UNITED STATES`)

}

export { contacts }