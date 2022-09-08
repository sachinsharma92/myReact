import React from 'react'

export default function DateCard(props) {
  const month = props.date.toLocaleString("default", { month: 'long' });
  const day = props.date.toLocaleString("default", { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div>
      <h5>
        <span>{month}</span>
        <span style={{ margin: 10 }}>{day}</span>
        <span>{year}</span>
      </h5>
      <p>{props.title}</p>
      <p>{props.description}</p>
    </div>
  )
}
