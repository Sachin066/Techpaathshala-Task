import React from 'react'
import netflix from '../img/netflix.png'
import '../css/Navbar.css'
// import Card from '../components/Card';

export default function Navbar() {
  return (
    <div>
      <header>
        <nav>
            <img src={netflix} alt="netflix" className='image'/>

            <ul>
                <li className="bar"><a href="#">HOME</a></li>
                <li className="bar"><a href="#">TV SHOWS</a></li>
                <li className="bar"><a href="#">MOVIES</a></li>
                <li className="bar"><a href="#">LETEST</a></li>
                <li className="bar"><a href="#">MYLIST</a></li>
            </ul>
        </nav>
      </header>

      {/* <Card /> */}

    </div>
  )
}
