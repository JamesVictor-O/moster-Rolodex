import React, { Children, Component } from "react";
import { Card } from "../card/card.component";
import { ReactDOM } from "react";
import "./cardList.css"

function CardList(props) {
    return (
        <div className="cardlist">
            {
             props.monster.map(monsters => (
                 <Card key={monsters.id} monster={ monsters} />
            ))
            }
        </div>
    )
}

export default CardList;