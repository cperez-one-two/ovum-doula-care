// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import DocstyleLayout from "~/layouts/Docstyle.vue";
import HeaderNavbar from "~/components/HeaderNavbar.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faHands,
  faHandHoldingMedical,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
require("~/main.css");

config.autoAddCss = false;
library.add(
  faEnvelope,
  faInstagram,
  faTwitter,
  faHands,
  faHandHoldingMedical,
  faPeopleArrows
);

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("DocstyleLayout", DocstyleLayout);
  Vue.component("HeaderNavbar", HeaderNavbar);
  Vue.component("font-awesome", FontAwesomeIcon);

  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Josefin+Slab&display=swap",
  });
}
