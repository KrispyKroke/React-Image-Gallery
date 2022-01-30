import {useState} from 'react';



function GalleryItem({galleryItem}) {
    // Local state for handling the toggling of display of pictures and descriptions.
    const [isClicked, setIsClicked] = useState(false);


    // This handles the display of text for the amount of likes a photo has received.
    let likesText = '';
    if (galleryItem.likes <= 0) {
        likesText = 'No people love this :(';
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

    return (
        <div className="picture">
            <div onClick={runSwap}>
                {isClicked ? description : image}
            </div>
            <div>
                <button>Love It!</button>
            </div>
            <div>
                <p>{likesText}</p>
            </div>
        </div>
    );


}

export default GalleryItem;