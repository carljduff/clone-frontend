import React, { useEffect } from "react";
import { useState } from "react";
import "../css/items.css";
import request from "../services/api.request";
import { API_URL } from "../services/auth.constants";

const Items = ({ id }) => {
  const [items, setItems] = useState([]);
  const [itemLabel, setItemLabel] = useState([]);
  const [list, setList] = useState([])

  


  useEffect(() => {
    async function getItems() {
      let options = {
        url: `${API_URL}api/items/?event__id=${id}`,
        method: "GET",
      };
      let resp = await request(options);
      setItems(resp.data);

    }
    getItems();
  }, []);



  
  return (
    <>
      <div className="items">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};


const Item = ({ item }) => {

  
  const handleClick = () => {
    console.log(`Item ID: ${item.id}`);
    console.log(`Item Label: ${item.label}`);
  };

  const deleteHandler = async () => {
    try {
      let options = {
        url: `${API_URL}api/items/${item.id}`,
        method: "DELETE",
      };
      let resp = await request(options);
      console.log("Item successfully deleted.");
     
      // window.location.reload();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      {/* <MainEvent items={item} /> */}
      {item.label}
      <button className="item-btn" onClick={handleClick}>
        *Select*
      </button>
      <button className="item-btn" onClick={deleteHandler}>
        *DELETE
      </button>
    </div>
  );
};

export default Items;
