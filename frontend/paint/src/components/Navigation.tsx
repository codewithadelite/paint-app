import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  
    let image = require('../voima.jpg')
  return (
    <nav className="navbar navbar-expand-lg navbar-light  bg-white">
        <div className='container'>
            <a className="navbar-brand" href="#">
                <img src={image} alt="" height='50'/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="posters/">Poster</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="poster/add/">Add Poster</Link> 
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navigation