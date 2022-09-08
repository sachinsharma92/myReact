import React from 'react'

export const Greeting = () => {
  let currentDate = new Date();
  currentDate = currentDate.getHours();
  let greeting = ""

  if (currentDate >= 1 && currentDate < 12) {
    greeting = "Good Morning Guys!"
    document.body.style.backgroundImage =  "url('https://images.unsplash.com/photo-1515966097209-ec48f3216288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')"
  } else if (currentDate >= 12 && currentDate < 19) {
    greeting = "Good Afternoon Guys!"
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1591178675678-1e76fbc255ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80')"
  }
  else {
    greeting = "Good Night Guys!"
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1514897575457-c4db467cf78e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')"
  }
  return (
    <div>{greeting}</div>
  )
}
