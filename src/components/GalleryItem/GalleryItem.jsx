function GalleryItem({galleryItem}) {

    let likesText = '';
    if (galleryItem.likes <= 0) {
        likesText = 'No people love this :(';
    } else {
        likesText = `${galleryItem.likes} people love this!`;
    }

    return (
        <div className="picture">
            <div>
                <img src={galleryItem.path} width="200" height="200"></img>
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