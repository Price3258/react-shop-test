import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Products from './Products';
import ErrorBanner from '../../components/ErrorBanner';

const Type = ({ orderType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  useEffect(()=> {
    loadItems(orderType);
  });

  const loadItems = async (orderType) => {
    try {
      const response = await axios.get(`http://localhost:5000/${orderType}`);
      setItems(response.data);

    }catch(error) {
      setError(true);
    }
  }

  if(error) {
    return <ErrorBanner message="에러가 발생했습니다." />
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