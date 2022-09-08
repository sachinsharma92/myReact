import React, { useState } from 'react'
import axios from 'axios'

export default function FatchNews() {
  const [news, setNews] = useState([]);

  const fatchNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=9c8d194cd2884e9a854295b9939080fd")
      .then((response) => {
        console.log(response, 'check button action')
        setNews(response.data.articles)
      })
  }
  return (
    <>

      <div className='container'>
        <button className='btn btn-primary my-5' onClick={fatchNews}>Fatch News</button>

        <div className='row'>
          {news.map((value) => (
            <div className='col-sm-4'>
              <div className="card my-3">
                <img src={value.urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{value.title}</h5>
                  <small className='text-primary'>{value.author}</small>
                  <p className="card-text">{value.description}</p>
                  <p className='alert'>{value.publishedAt}</p>
                  <p className='card-text'>{value.content}</p>
                  <a href={value.url} className="btn btn-primary">Go In Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
