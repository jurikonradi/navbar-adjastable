// copy of navigation.js with console.logs

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
console.log("dropDownWidth", dropDownWidth);
let navImportantWidth = Number(
  document.querySelector(".nav-important").clientWidth
);
console.log("navImportantWidth", navImportantWidth);
let navSectionsWidth = Number(document.querySelector(".sections").clientWidth);
console.log("navSectionsWidth", navSectionsWidth);
let navBarWidth = Number(document.querySelector(".navbar").clientWidth);
console.log("navBarWidth", navBarWidth);

navLinks.forEach((element) => {
  let linkElement = document.createElement("a");
  let linkText = document.createTextNode(element.name);
  linkElement.setAttribute("href", element.link);
  linkElement.appendChild(linkText);
  console.log(
    "linkElement width before appending",
    measureDomElement(linkElement, (el) => el.clientWidth)
  );
  totalLinksWidth +=
    measureDomElement(linkElement, (el) => el.clientWidth) + 25; // 44? measureDomElement not correct
  console.log("totalLinksWidth", totalLinksWidth);

  if (
    navBarWidth - navImportantWidth - dropDownWidth - navSectionsWidth >=
    totalLinksWidth
  ) {
    linksBar.appendChild(linkElement);
  } else {
    dropDown.appendChild(linkElement);
  }

  console.log("linkElement width real", Number(linkElement.clientWidth));
});
