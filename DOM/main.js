// Document Object Model aka DOM

// to write directly to the document we do document.write()
document.write("hello world");
document.write("<h1> hello world </h1>");

//change document title
document.title = "Document Object Model";

// navigating the document
console.log(document.head);
console.log(document.body);

// navigating with child nodes
console.log(document.body.childNodes);
// you can also put this in a variable
const cn = document.body.childNodes;
console.log(cn[1]);
console.log(cn[5].childNodes[7]);

//navigating with children
console.log(document.body.children);
const clt = document.body.children;
console.log(clt[1].children[2]);

// firstchild, lastchild
console.log(document.body.firstChild); // returns the firstnode
console.log(document.body.lastChild); // returns the lastnode

//firstChildElement and lastChildElement
console.log(document.body.firstElementChild); //returns the first element
console.log(document.body.lastElementChild); //returns the last element

console.log(document.body.children[2].lastElementChild); // to print P in the console

// searching the DOM
// .getElementsByTagName()
// .getElemenstByClassname()
// .getElementById()
// .querySelector()
// .querySelectorAll()

// .getElementByTagName() - returns a html collection of all the elements searched from the document
const liTags = document.getElementsByTagName("p");
console.log(liTags[0]);

// .getElementByClassname() - returns a collection of elements with the specified class name
const classElements = document.getElementsByClassName("dom");
console.log(classElements);

// .getElementsById() - returns the element with the specified id
const idElement = document.getElementById("h2");
console.log(idElement);

const figure = document.getElementById("figure");
console.log(figure);

// querySelector() - gets you the first element
const elem = document.querySelector(".dom");
console.log(elem);

// querySelectorAll() - gets you all the elements available
const elem2 = document.querySelectorAll("h2");

// mainpulating or modifying the dom  15-08-2024
const h1Elem = document.createElement("h1");
const h1Text = document.createTextNode("Bye World!");
console.log(h1Elem);
console.log(h1Text);

h1Elem.append(h1Text);

document.body.appendChild(h1Elem);

// creat an element li and insert it into our html document at the ul element
// at the ul element before the li with the class 'dom'
const liElem = document.createElement("li");
liElem.innerText = "C++"; //innerHTML, innerText

const existing_li = document.getElementsByClassName("dom")[0]; // this specifies where the element
// will be inserted before

const ulElem = document.getElementsByTagName("ul")[0]; /// this is the element we will insert into

ulElem.insertBefore(liElem, existing_li);

const img = document.createElement("img");

img.src = "./934732.jpg";

img.setAttribute("src", "./934732.jpg");

img.style.width = "500px ";

document.getElementsByTagName("figure")[0].append(img);

const countries = [
  "",
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Côte d'Ivoire",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo (Kinshasa)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "North Korea",
  "South Korea",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Lithuania",
  "Luxembourg",
  "Macedonia (FYROM)",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten (Dutch part)",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste (East Timor)",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
];

const select = document.createElement("select");

select.id = "country";

countries.forEach((country) => {
  const option = document.createElement("option");
  if (!country) {
    option.innerText = "---Select your Country---";
    option.selected = true;
    option.disabled = true;
    select.append(option);
  } else {
    option.innerHTML = country;
    option.value = country.toLocaleLowerCase();
    select.append(option);
  }
});

const putselect = document.getElementsByClassName("putselect")[0];
document.getElementById("form").insertBefore(select, putselect);



// Accessing attribute from element in DOM     20-08-2024
const heading = document.querySelector('h2')
const elemId = heading.getAttribute('id')
const elemClass = heading.getAttribute('class')

heading.setAttribute('id', 'heading2')
heading.setAttribute('title', 'A heading element')
heading.setAttribute('style', 'color: red; border: 2px solid black;')


// setting attribute using the  assignment operator

heading.id = 'heading5'
heading.style = 'color: red; background-color: gray; border: 2px solid green;'
heading.style.color = 'black'
heading.style.backgroundColor = '#fff'


// Task 2 
// const li = document.querySelectorAll('ol li')[1]
// theli.id = 'Ruby'
// theli.className = 'Rails'
// theli.style.color = 'blue'
// console.log(theli.innerHTML)

// Edit task3 to right code
const type = document.querySelectorAll('form input')[1]
type.setAttribute('type','text')
console.log(type)
// Edit task3 to right code


// task
const par = document.getElementsByClassName('dom')[2]
const parText = par.innerHTML.split('e')
para.innerHTML = paraText.join('')
// par.setAttribute('style', 'color: green;')
// par.style = 'color: green;'
par.innerHTML.split('e')

console.log(par)


// console.log(elemId)
// console.log(elemClass)