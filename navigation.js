let navLinks = [
  { name: "Koronaviruss Covid-19", link: "#link1" },
  { name: "Vakcinācja", link: "#link2" },
  { name: "Aleksejs Navaļnijs", link: "#link3" },
  { name: "Covid-19 dikstāve", link: "#link4" },
  { name: "Hokeja čempionāts - 2021", link: "#link5" },
  { name: "KG kultūras balsojums", link: "#link6" },
  { name: "Teātris.zip", link: "#link7" },
];

import measureDomElement from "./utils/measureDomElement.js";

let totalLinksWidth = 0;
let linksBar = document.querySelector(".links-bar");
let dropDown = document.querySelector(".dropdown-content");
let dropDownWidth = Number(document.querySelector(".dropdown").offsetWidth);
let navImportantWidth = Number(
  document.querySelector(".nav-important").clientWidth
);
let navSectionsWidth = Number(document.querySelector(".sections").clientWidth);
let navBarWidth = Number(document.querySelector(".navbar").clientWidth);

navLinks.forEach((element) => {
  let linkElement = document.createElement("a");
  let linkText = document.createTextNode(element.name);
  linkElement.setAttribute("href", element.link);
  linkElement.appendChild(linkText);

  totalLinksWidth +=
    measureDomElement(linkElement, (el) => el.clientWidth) + 25; // 44? measureDomElement not correct

  if (
    navBarWidth - navImportantWidth - dropDownWidth - navSectionsWidth >=
    totalLinksWidth
  ) {
    linksBar.appendChild(linkElement);
  } else {
    dropDown.appendChild(linkElement);
  }
});
