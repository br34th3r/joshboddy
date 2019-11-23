import React from "react"
import { Link } from 'gatsby';

function card(props) {
  const { cardTitle, cardSubtitle, link, img } = props;
  return (
    <div className="col-lg-4">
      <a href={link} className="card mx-3 my-5">
        <div className="card-body">
          <h2 className="card-title">{cardTitle}</h2>
          <p className="card-text">{cardSubtitle}</p>
        </div>
      </a>
    </div>
  )
}

export default card
