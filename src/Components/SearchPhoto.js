import React, { useContext, useRef } from 'react';
import { Context } from '../Contex';

const SearchPhoto = () => {
    const { setupSearch } = useContext(Context);
    const curRef = useRef(null);

    return (
        <div>
            <form
                id="unsplash-search"
                className="unsplash-search form"
                onSubmit={(e) => {
                    e.preventDefault();
                    setupSearch(curRef.current.value);
                }}
            >
                <label>
                    Search Photos on Unsplash
                <input
                    ref={curRef}
                    placeholder="Try 'dogs' or 'coffee'!"
                    type="search"
                    className="input"
                    style={{ marginBottom: 20 }}
                    />
                </label>
            </form>
        </div>
    )
}

export default SearchPhoto;