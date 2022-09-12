import React from 'react'
import PropTypes from 'prop-types'

const Options = ({name}) => {
  return (
    <form>
        <input type="checkbox" id={`${name} options`} />
        {" "}
        <label htmlFor={`${name} options`}>{name}</label> 
    </form>
  )
}

Options.propTypes = {}

export default Options