import React from "react";

export const Header = () => {
    return (
        <>
            <div className="header">
                <div className="bg">
                    <img src="./Images/comic.webp" alt="" />
                </div>
                <div className="search-bar">
                    <img src="./Images/pngegg.png" alt="" />
                    <input type="search" placeholder="Search Here" className="search"/>
                </div>
            </div>
        </>
    )
}