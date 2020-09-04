import React, { useState, useEffect } from "react";
const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const managingCart = img => {
      if (!cartItems.some(existItem => existItem.id === img.id)) {
        addToCart(img);
      } else {
        deleteFromTheCart(img);
      }
  }

  const addToCart = img => {
    setCartItems(prevItem => [...prevItem, img]);
  }

  const deleteFromTheCart = img => {
      setCartItems(prevItems => {
        return prevItems.filter(item => item.id !== img.id)
      })
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

  return <Context.Provider value={{ allPhotos, cartItems, toggleFavorite, managingCart, deleteFromTheCart }}>{children}</Context.Provider>;
};

export { ContextProvider, Context };