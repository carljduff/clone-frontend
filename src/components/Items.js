import React, { useEffect } from "react";
import { useState } from "react";
import { getData } from "../data";
import "../css/items.css";
import request from "../services/api.request";

const Items = () => {
    const [items, setItems] = useState([]);
    const ENDPOINT = 'items'
    useEffect(() => {
        async function getItems() {
            let options = {
                url: 'https://8000-carljduff-clonebackend-qzjqj4zemon.ws-us43.gitpod.io/api/items/',
                method: 'GET',
            }
            let resp = await request(options)
            setItems(resp.data)
        }
        getItems()
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