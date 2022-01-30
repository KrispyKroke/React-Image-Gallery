import GalleryItem from '../GalleryItem/GalleryItem';

// This component is responsible for taking in the galleryList as a prop
// and iterating over the list to produce a GalleryItem component for each item in the gallery.
function GalleryList({galleryList, fetchList}) {
    
    return (
        <>
            {galleryList.map((picture) => {
                const galleryItem = picture;
                return (
                    <GalleryItem key={galleryItem.id} fetchList={fetchList} galleryItem={galleryItem} />
                );
            })}
        </>

    );


}

export default GalleryList;