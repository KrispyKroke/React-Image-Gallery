import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

function App() {

    const [galleryList, setGalleryList] = useState([]);

    useEffect(() => {
      fetchList();
    }, []);


    const fetchList = () => {
      axios.get('/gallery').then((response) => {
        setGalleryList(response);
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
