import React, { useState, useEffect } from "react";
const { Provider, Consumer } = React.createContext();

const ContextProvider = ({ children }) => {
  const [allPhotos, setAllPhotos] = useState([]);

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

  return <Provider value={{ allPhotos }}>{children}</Provider>;
};

export { ContextProvider, Consumer as ContextConsumer };