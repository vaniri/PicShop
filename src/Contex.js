import React, { useState, useEffect } from "react";
const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [ allPhotos, setAllPhotos ] = useState([]);

  const getPhoto = async () => {
    const res = await fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    );
    const photoData = await res.json();
    setAllPhotos(photoData);
  };

  useEffect(() => {
    getPhoto();
  }, []);

  const toggleFavorite = id => {
    const NewImgArr = allPhotos.map(img => {
      console.log(img.id)
      console.log(id)
      if (img.id === id ) { 
      return { ...img, isFavorite: !img.isFavorite};
    }
      return img;
    });
    setAllPhotos(NewImgArr);
  }

  return <Context.Provider value={{ allPhotos, toggleFavorite }}>{children}</Context.Provider>;
};

export { ContextProvider, Context};