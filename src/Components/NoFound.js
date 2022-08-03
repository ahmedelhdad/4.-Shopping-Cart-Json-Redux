import React from 'react'
import { Link } from 'react-router-dom'

const NoFound = () => {
  return (
    <div className='not-found'>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to='/'>Go Shoppings</Link>
    </div>
  )
}

export default NoFound
