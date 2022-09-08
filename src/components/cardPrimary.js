import React from 'react'
import PropTypes from 'prop-types';

export default function CardPrimary(props) {
  return (
    <div>
      <img className='image-card-style' src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80" alt="" />
      <h3 className='mt-3'>{props.title}</h3>
      <small>{props.description}</small>
    </div>
  )
}

CardPrimary.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}


CardPrimary.defaultProps = {
  title: "Card title here",
  description: "Card description here",
}
