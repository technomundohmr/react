import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const App = () => {
    const [Categories, setCategories] = useState(['Dragon Ball']);


    return (
        <>
            <h2>Gif Expert APP</h2>
            < AddCategory setCategories={setCategories} Categories={Categories}/>
            <hr />
            <ol>
                {Categories.map((category) => {
                    return(
                        <GifGrid 
                            key={category}
                            category = {category}
                        />
                    )
                })}
            </ol>
        </>
    );
}

export default App;
