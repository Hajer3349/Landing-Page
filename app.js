/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// The procedure below builds the navigation bar
// First, selecting the parent element
const parentElement = document.querySelector('body');
// Creating a new div elememt
const navBar = document.createElement('nav');

// Creating a new unordered list element
const unorderedList = document.createElement('ul');

// Creating list items
const Item1 = document.createElement('li');
const link1 = document.createElement('a');
link1.setAttribute("href", "#section1");
link1.textContent = "Section 1";
Item1.appendChild(link1);

const Item2 = document.createElement('li');
const link2 = document.createElement('a');
link2.setAttribute("href", "#section2");
link2.textContent = "Section 2";
Item2.appendChild(link2);

const Item3 = document.createElement('li');
const link3 = document.createElement('a');
link3.setAttribute("href", "#section3");
link3.textContent = "Section 3";
Item3.appendChild(link3);

const Item4 = document.createElement('li');
const link4 = document.createElement('a');
link4.setAttribute("href", "#section4");
link4.textContent = "Section 4";
Item4.appendChild(link4);

// Appending list items to the unordered list
unorderedList.appendChild(Item1);
unorderedList.appendChild(Item2);
unorderedList.appendChild(Item3);
unorderedList.appendChild(Item4);
// Appending the unordered list to the navigation bar div
navBar.appendChild(unorderedList);

const header = document.querySelector('header');
// Appending the unordered list to the parent element
parentElement.insertBefore(navBar, header);

// Adding class to the navBar
navBar.classList.add('navbar__menu');

// Adding class to the links
link1.classList.add('menu__link');
link2.classList.add('menu__link');
link3.classList.add('menu__link');
link4.classList.add('menu__link');

// Modifying the functionality of the hide button
const hideButton = document.getElementById("hideButton");
const navbar = document.querySelector(".navbar__menu");

hideButton.addEventListener("click", function() {
  navbar.classList.toggle("hidden");
});
// The procedure below adds the scrolling effect when clicking the nav Bar elements
// First, getting all the navigation links
const navLinks = document.querySelectorAll('nav a');

// Adding click event listeners to each link
navLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Preventing default link behavior

    const targetId = link.getAttribute('href'); // Getting the target section ID
    const targetSection = document.querySelector(targetId); // Getting the target section element

    targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target section
   
  });
});

// The procedure below highlights the section in the viewport and its corresponding navBar element using .getBoundingClientRect() function
/*window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navList = document.querySelectorAll('.menu__link');
    
    sections.forEach(function(section, index) {
      const rect = section.getBoundingClientRect();
      
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        section.classList.add('active');
        navList[index].classList.add('highlight');
      } else {
        section.classList.remove('active');
        navList[index].classList.remove('highlight');
      }
    });
  }); */

// Another procedure that highlights the section in the viewport and its corresponding navBar element
// using the window.scrollY method to find the current location
// First, Getting all the sections
const sections = document.querySelectorAll('.sc');
const navList = document.querySelectorAll('.menu__link');

// Adding scroll event listener
window.addEventListener('scroll', () => {
  // Getting the current scroll position
  const scrollPosition = window.scrollY;

  // Iterating through each section
  sections.forEach((sc, index) => {
    // Getting the section's position relative to the viewport
    const sectionTop = sc.offsetTop;
    const sectionHeight = sc.offsetHeight;

    // Checking if the section is in the viewport
    if (scrollPosition > sectionTop && scrollPosition <= sectionTop + sectionHeight) {
      // Adding a CSS class to highlight the section
      sc.classList.add('active');
      navList[index].classList.add('highlight');
    } else {
      // Removing the CSS class if the section is not in the viewport
      sc.classList.remove('active');
      navList[index].classList.remove('highlight');
    }
  });
}); 


