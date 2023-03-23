import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
export const Details = () => {
    const { id } = useParams();
    const [item, setItem] = useState()
    const fetch = async () => {
        const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=ecd43655f9c4b50cd889f75bca700059&hash=f94351145d2d0df792e8a0a0a1b5b661`)
        setItem(res.data.data.results[0])
    }
    fetch();
    return (
        <>
            {
                (!item) ? "" : (
                    <div className="box-content">
                        <div className="right-box">
                            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
                        </div>
                        <div className="left-box">
                            <h1>{item.name}</h1>
                            <h4>{item.description}</h4>
                        </div>
                    </div>
                )
            }
        </>
    )
}