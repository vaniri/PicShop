import React, { useState, useEffect } from "react";
const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = img => {
    setCartItems(previmg => {
      if (!previmg.some(existImg => existImg.id === img.id)) {
        return [...previmg, img]
      }
      return previmg;
    });
    console.log(cartItems)
    
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

  const toggleFavorite = id => {
    const NewImgArr = allPhotos.map(img => {
      if (img.id === id) {
        return { ...img, isFavorite: !img.isFavorite };
      }
      return img;
    });
    setAllPhotos(NewImgArr);
  }

  return <Context.Provider value={{ allPhotos, toggleFavorite, addToCart }}>{children}</Context.Provider>;
};

export { ContextProvider, Context };