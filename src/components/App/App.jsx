import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

function App() {

    const [galleryList, setGalleryList] = useState([]);
    // This acts as our onReady function for React. Will run the fetchList function when our client and server are booted up.
    useEffect(() => {
      fetchList();
    }, []);

    // Performs a GET request to the backend to populate our galleryList local state with the 
    // items from the gallery stored on the back-end.
    const fetchList = () => {
      axios.get('/gallery').then((response) => {
        setGalleryList(response.data);
      }).catch((err) => {
        alert(err);
      });
    }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Jared's Gallery</h1>
        </header>
        <GalleryList galleryList={galleryList} />
      </div>
    );
}

export default App;
