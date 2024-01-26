import React from 'react'
import {Link} from "react-router-dom";
export default function Home(props) {
  return (
    <div className="lefttab">
        <div className="inner">
          <div className="img">
            <img src={props.logo} alt="Image" />
          </div>
          <div className='a'>

          <Link to="/">Home</Link>
          <Link to="/upper">UpperCase</Link>
          <Link to="/lower">LowerCase</Link>
          <Link to="/convertxml">HTML to XML</Link>
          <Link to="/converthtml">XML to HTML</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Constact Us</Link>
          </div>
        </div>
      </div>
  )
}
