const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const picArray = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"];


/* Declaring the alternative text for each image file */
const altImg = {pic1:"eye",pic2:"gallery",pic3:"flowers",pic4:"people",pic5:"butterfly"};

/* Looping through images */


const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
