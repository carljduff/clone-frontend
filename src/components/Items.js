import React, { useEffect } from "react";
import { useState } from "react";
import { getData } from "../data";
import "../css/items.css";

const Items = () => {
    const [items, setItems] = useState([]);
    const ENDPOINT = 'items'
    useEffect(() => {
        getData({ENDPOINT}).then((data) => {
            setItems(data);
        });
    }, []);

    
    return (
        <>
        <div className="items">
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </div>
        </>
    )
}

const Item = ({item}) => {

    const handleClick = () => {
        console.log(`${item.id}`)
    }

    return (
        <div>
            {item.label}
            <button className="item-btn" onClick={handleClick}>*Select*</button>
            

        
        </div>
    )
}

export default Items;