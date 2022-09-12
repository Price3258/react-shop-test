import React from 'react'

const Products = ({
  name, imagePath
}) => {
  return (
    <div
      style={{
        textAlign:'center'
      }}
    >
      <img
        style={{width:'75%'}}
        src={`http://localhost:5011/${imagePath}`}
        alt={`${name} product`}
      />
      <form>
        <label style={{textAlign:"right"}} >{name}</label>
        <input 
          style={{ marginRight:7}}
          type="number"
          name="quantity"
          defaultValue={0}
        />
      </form>
    </div>
  )
}

Products.propTypes = {}

export default Products