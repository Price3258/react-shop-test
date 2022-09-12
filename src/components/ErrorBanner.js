import React from 'react'
import PropTypes from 'prop-types'

const ErrorBanner = ({message}) => {
  const errorMessage = message || '에러'
  return (
    <div
        data-testid="error-banner"
        style={{
            backgroundColor:'red',
            color:'white'
        }}
    >
        {errorMessage}
    </div>
  )
}

ErrorBanner.propTypes = {}

export default ErrorBanner