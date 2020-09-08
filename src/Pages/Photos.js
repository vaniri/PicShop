import React, { useContext } from 'react';
import { Context } from '../Contex';
import { getClass } from '../utils/index';
import Image from '../Components/Image';
import SearchPhoto from '../Components/SearchPhoto';

const Photos = () => {
    const { allPhotos } = useContext(Context);

    return (
        <div>
            <div> <SearchPhoto /></div>
            <main className="photos">
                {allPhotos.map((img, i) => (
                    <Image key={img.id} img={img} className={getClass(i)} />
                ))}
            </main>
        </div>
    )
}

export default Photos;