import Home from "./components/HomePage/Home";
import Packets from "./components/Packets/Packets";
import Promotion from "./components/Promotion/Promotion";
import Contact from "./components/Contact/Contact";

export const routes = [
   { path: '', component: Home},
   { path: '/Packets', component: Packets },
   { path: '/Promotion', component: Promotion },
   { path: '/Kontakt', component: Contact }
]
