# React Gallery

# Description

Duration: 2-3 days

For this project, I created a web application which displayed a gallery of images in the browser.  Each image had a description which could be viewed if you clicked on the image.  You could see the image again by clicking on the description text for each image.  There were buttons below each image which could be clicked to increase the 'likes' for each image.  Text below each button showed the number of likes for each image.

I broke the project into three components: the App, The Gallery List and the Gallery Item components.  

The App was responsible for gathering up the images from the gallery and storing them in local state.  

The Gallery List then looped over the images and created a Gallery Item component for each picture.  

Lastly, the Gallery Item component was responsible for displaying the information for each picture, as well as keeping track of likes for each picture and the toggling between descriptions and pictures on click of each item.

## Screenshots

## Gallery of Images

This is how the app will look when you first boot it up.  You will see 5 images with the ability to 'like' them.

<img width="1219" alt="Screen Shot 2022-03-20 at 2 09 13 PM" src="https://user-images.githubusercontent.com/91631646/159178848-fda26419-2f2c-4c35-956d-d57d4bff165c.png">


