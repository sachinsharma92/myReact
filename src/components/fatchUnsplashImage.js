import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function FatchUnsplashImage() {
  const [photo, setPhoto] = useState("")
  const [result, setResult] = useState([])

  const changePhoto = () => {
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=VvLCcjJcL0gXnUkC95qe0tO3GTQYg4BfLYn0MU5XPTk`)
      .then((response) => {
        setResult(response.data.results);
      })
  }

  // const [fatchImages, setFatchImages] = useState([])
  // useEffect(() => {
  //   axios.get(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=VvLCcjJcL0gXnUkC95qe0tO3GTQYg4BfLYn0MU5XPTk`)
  //     .then((response) => {
  //       console.log(response, 'check imagessss action')
  //       setFatchImages(response.data.results)
  //     })
  // }, [])

  return (
    <div className='container'>
      <div className='my-5 d-flex'>
        <input placeholder='search images here...' type="text" className='form-control' value={photo} onChange={(e) => {
          setPhoto(e.target.value)
        }} 
        // onKeyUp={changePhoto}
        style={{height: 40, marginRight: 20}} />
        <button type='submit' style={{height: 40, width: 200,}} onClick={changePhoto} className='btn btn-primary'>Get Photo</button>

      </div>

      <div className='row'>
        {result.map((value) => {
          return (
            <div class="col-lg-3 col-md-4 col-6">
              <img class="img-fluid img-thumbnail d-block mb-4" src={value.urls.full} alt='' />
            </div>
          )
        })}
      </div>

      {/* <div className='row'>
        {fatchImages.map((value, index) => (
          <div className='col-sm-4' key={index}>
            <div className="card my-3">
              <img src={value.urls.full} className="card-img-top" alt={value.alt_description} />
            </div>
          </div>
        ))}
      </div> */}
    </div>
  )
}
