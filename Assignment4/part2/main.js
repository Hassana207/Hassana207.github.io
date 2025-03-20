const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const picArray = ["./images/pic1.jpg","./images/pic2.jpg","./images/pic3.jpg","./images/pic4.jpg","./images/pic5.jpg"];




/* Declaring the alternative text for each image file */
const altImg = {pic1:"eye",pic2:"gallery",pic3:"flowers",pic4:"people",pic5:"butterfly"};

/* Looping through images */
for (let i = 0; i < picArray.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', picArray[i]);

    const imageKey = `pic${i + 1}`; 
    newImage.setAttribute('alt', altImg[imageKey]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener("click", function () {
        displayedImage.setAttribute('src', picArray[i]); 
        displayedImage.setAttribute('alt', altImg[imageKey]); 
    });
}
    

/* Wiring up the Darken/Lighten button */

