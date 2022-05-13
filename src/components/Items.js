import React, { useEffect } from "react";
import { useState } from "react";
import "../css/items.css";
import request from "../services/api.request";
import { API_URL } from "../services/auth.constants";
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

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
          <Item items={items} setItems={setItems} key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};


const Item = ({ item, items, setItems }) => {
  const [check, setCheck] = useState(false);
  const [trash, setTrash] = useState(false);
  const [line, setLine] = useState(false);
  const handleClick = () => {
    setCheck(!check);
    setLine(!line)
  };

  const trashClick = () => {
    setTrash(!trash)
    setItems(items.filter((stateItem) => stateItem.id !== item.id))
  }


  const deleteHandler = async () => {

   
      try {
        let options = {
          url: `${API_URL}api/items/${item.id}`,
          method: "DELETE",
        };
        let resp = await request(options);
        trashClick()
        console.log("Item successfully deleted.");
      } catch (error) {
        alert(error);
      }
   
  };



  return (
    <div className="item-list">
      <h5 className={line ? 'label': null}>{item.label}
      <button className="item-btn" onClick={handleClick}>
       <CheckCircleOutlineRoundedIcon className={check ? 'check': null}/>
      </button>
      <button className="item-btn" onClick={deleteHandler}>
        <HighlightOffRoundedIcon className={trash ? 'delete': null}/>
      </button>
      
      
      </h5>
    </div>
  );
};

export default Items;
