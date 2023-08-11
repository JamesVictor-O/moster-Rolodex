import React from "react";
import "./card.css";
export function Card({ monster }) {
    return (
        <div className="card">
            <div className="image-container">
            <img src={`http://robohash.org/${monster.id}?set=set2&siz=180x120`} alt="" />
            </div>
            <h2 key={monster.id}>{monster.name}</h2>
            <p>{ monster.email}</p>
        </div>
    )
}