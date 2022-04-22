import React from 'react'
import {Spinner} from 'react-bootstrap'
const LoadingSpinner = () => {
  return (
        <Spinner animation="border" role="status" style={{margin: 'auto'}}>
        <span className="visually-hidden">Loading...</span>
        </Spinner>
  )
}

export default LoadingSpinner