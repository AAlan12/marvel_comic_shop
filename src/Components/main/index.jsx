import React from "react"
import { Card } from "../card"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
export const Main = () => {
  const [url,setUrl]=useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=ecd43655f9c4b50cd889f75bca700059&hash=f94351145d2d0df792e8a0a0a1b5b661")
  const [item,setItem]=useState();
  const [search,setSearch]=useState("");
  useEffect(()=>{
    const fetch=async()=>{
      const res=await axios.get(url)
      setItem(res.data.data.results);
    }
    fetch();
  },[url])
  
  const searchMarvel=()=>{
    setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=ecd43655f9c4b50cd889f75bca700059&hash=f94351145d2d0df792e8a0a0a1b5b661`)
  }

  return (
    <>
        <div className="header">
            <div className="bg">
                <img src="./Images/comic.webp" alt="" />
            </div>
            <div className="search-bar">
                <img src="./Images/pngegg.png" alt="logo" />
                <input type="search" placeholder='Search Here'
                 className='search'
                 onChange={e=>setSearch(e.target.value)}
                 onKeyPress={searchMarvel}/>
            </div>
        </div>
       <div className="content">
         
        {
          (!item)?<p>Not Found</p>:<Card data={item}/>
        }
       </div>
    </>
  )
}