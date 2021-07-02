import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const [Images, setImages] = useState([])
    useEffect(()=>{
        getGift();
    }, [])
    const getGift = async()=>{
        const url=`https://api.giphy.com/v1/gifs/search?api_key=YRfKodKzwvxs7IO9Roo1aSCe8Cm59K8o&q=${category}&limit=10`
        const res = await fetch(url);
        const {data} = await res.json();
        const gift = data.map((gif) => {
            return{
                id: gif.id,
                title: gif.title,
                url: gif.images.original.url
            }
        })
        setImages(gift)

    }
    return (
        < >
            <h1>{category}</h1>
            <div className="card-grid">
                {Images.map(img =>(
                    < GifGridItem key={img.id} img={img} />
                ) 
                )
                }
            </div>
        </>
    )
}
