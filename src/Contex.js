import React, { useState, useEffect } from "react";
const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [ allPhotos, setAllPhotos ] = useState([]);
  const [ cartItems, setCartItems ] = useState([]);

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

  const emptyCart = () => {
    setCartItems([]);
  }

  const clientID = "8h8DkUl-2ggHJSOWw-MCbcrtM9zc7saiye4iA68wtOo";
  const numberOfPhotos = 30;
  const url =
    "https://api.unsplash.com/photos/random/?count=" +
    numberOfPhotos +
    "&client_id=" +
    clientID;

  const getPhoto = async (url) => {
    const res = await fetch(url);
    const photoData = await res.json();
    setAllPhotos(photoData);
  };

  const setupSearch = query => {
    const photosUrl = query ? `${url}&query=${query}` : url;
    getPhoto(photosUrl);
  };

  useEffect(setupSearch, [url]);

  const toggleFavorite = id => {
    const NewImgArr = allPhotos.map(img => {
      if (img.id === id) {
        return { ...img, isFavorite: !img.isFavorite };
      }
      return img;
    });
    setAllPhotos(NewImgArr);
  }

  return (
    <Context.Provider
      value={{ allPhotos, cartItems, toggleFavorite, managingCart, deleteFromTheCart, emptyCart, setupSearch }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };