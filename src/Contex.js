import React, { useState, useEffect } from "react";
const { Provider, Consumer } = React.createContext();

const ContextProvider = ({ children }) => {
  const [ allPhotos, setAllPhotos ] = useState([]);

   const toggleFavorite = id => {
      const NewImgArr = allPhotos.map(img => {
        console.log(img.id)
        console.log(id)
        if (img.id === id ) { 
        return { ...img, isFavorite: !img.isFavorite};
      }
      })
      console.log(NewImgArr)
      return NewImgArr;
    }

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

  return <Provider value={{ allPhotos, toggleFavorite }}>{children}</Provider>;
};

export { ContextProvider, Consumer as ContextConsumer };