import axios from 'axios';
import {useState} from 'react';



function GalleryItem({galleryItem, fetchList}) {
    // Local state for handling the toggling of display of pictures and descriptions.
    const [isClicked, setIsClicked] = useState(false);



    // This handles the display of text for the amount of likes a photo has received.
    let likesText = '';
    if (galleryItem.likes <= 0) {
        likesText = 'No people love this :(';
    } else  if (galleryItem.likes === 1) {
        likesText = '1 person loves this!';
    } else {
        likesText = `${galleryItem.likes} people love this!`;
    }


    // Variables used for the conditional rendering of images and descriptions.
    const image =  <img src={galleryItem.path} width="200" height="200"></img>;
    const description = <p>{galleryItem.description}</p>
    // Toggles local state when run.
    const runSwap = () => {
        setIsClicked(!isClicked);
    }

    // This function handles the PUT request for updating the likes on each picture when that
    // picture's button is pressed. Refreshes the page on successful update.
    const addLikes = () => {
        axios.put(`/gallery/like/${galleryItem.id}`).then(() => {
            fetchList();
        }).catch((err) => {
            alert(err);
        });
    }

    return (
        <div className="picture">
            <div onClick={runSwap}>
                {isClicked ? description : image}
            </div>
            <div>
                <button onClick={addLikes} >Love It!</button>
            </div>
            <div>
                <p>{likesText}</p>
            </div>
        </div>
    );


}

export default GalleryItem;