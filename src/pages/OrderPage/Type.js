import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Products from './Products';

const Type = ({ orderType }) => {
  const [items, setItems] = useState([]);

  useEffect(()=> {
    loadItems(orderType);
  });

  const loadItems = async (orderType) => {
    try {
      const response = await axios.get(`http://localhost:5000/${orderType}`);
      setItems(response.data);

    }catch(error) {
      console.log(error);
    }
  }

  const ItemComponents = orderType ==='products' ? Products : null;

  const optionItem = items.map((item)=> (
    <ItemComponents
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ))

  return (
    <div>{optionItem}</div>
  )
}

Type.propTypes = {}

export default Type