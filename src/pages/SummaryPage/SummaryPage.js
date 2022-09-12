import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SummaryPage = props => {
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  return (
    <div>
      <form>
        <input 
          type="checkbox"
          checked={checked}
          onChange={(e)=> setChecked(e.target.checked)}
          id="confirm-checkbox"
        /> 
      <label htmlFor="confirm-checkbox">주문하려는 것을 확인하셨나요?</label>
      <br/>
      <button
        type="submit"
        disabled={!checked}
      >
        주문확인
      </button>
      </form>
    </div>
  )
}

SummaryPage.propTypes = {}

export default SummaryPage