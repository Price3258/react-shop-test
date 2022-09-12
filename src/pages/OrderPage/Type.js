import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Products from './Products';
import ErrorBanner from '../../components/ErrorBanner';
import Options from './Options';

const Type = ({ orderType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  useEffect(()=> {
    loadItems(orderType);
  });

  const loadItems = async (orderType) => {
    try {
      const response = await axios.get(`http://localhost:5011/${orderType}`);
      setItems(response.data);

    }catch(error) {
      setError(true);
    }
  }

  if(error) {
    return <ErrorBanner message="에러가 발생했습니다." />
  }

  const ItemComponents = orderType ==='products' ? Products : Options;

  const optionItem = items.map((item)=> (
    <ItemComponents
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ))

  return (
    <>
      <h2>
        주문 종류
      </h2>
      <p>
        하나의 가격
      </p>
      <p>
        총 가격:
      </p>
      <div
        style={{
          display:'flex',
          alignItems:'center',
          flexDirection: orderType ==='options' && 'column'
        }}
      >
       {optionItem}
      </div>
    </>
  )
}

Type.propTypes = {}

export default Type