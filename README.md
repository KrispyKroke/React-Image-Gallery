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

<img width="1010" alt="Screen Shot 2022-03-20 at 2 17 04 PM" src="https://user-images.githubusercontent.com/91631646/159178994-8b6e70be-1dae-43cf-accb-5a902c84d2e6.png">

## Images with Likes

After you have 'liked' a few images, the app will look something like this.

<img width="1204" alt="Screen Shot 2022-03-20 at 2 09 59 PM" src="https://user-images.githubusercontent.com/91631646/159179044-21f6a646-dccd-4fcb-9c34-dad9e4c86ab6.png">

## Images with Descriptions

If you click on any of the images, you can see a description for those images.  If you click on the descriptions, the images will reappear.

<img width="1218" alt="Screen Shot 2022-03-20 at 2 10 30 PM" src="https://user-images.githubusercontent.com/91631646/159179127-044fcd81-41d6-4050-acc6-8b9f1e4b91e0.png">
