import React, { useContext } from 'react';
import { ContextConsumer }  from '../Contex';
import { getClass } from '../utils/index';
import Image from '../Components/Image';

const Photos = () => {
    const { allPhotos, toggleFavorite  } = useContext(ContextConsumer);

    return(
        <main className="photos">
           {allPhotos.map((img, i) => (
           <Image key={img.id} img={img} className={getClass(i)} toggleFavorite={toggleFavorite}/>
           ))}
        </main>
    )
}

export default Photos;