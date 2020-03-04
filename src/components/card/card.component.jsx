import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className="card-container">
    <img alt={props.book.title}
      src={props.book.imgurl}/>
        <h2>{props.book.title}</h2>
        <h3>ISBN (or OCLC) :<br></br>{props.book.isbn}</h3>
    </div>
);