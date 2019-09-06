import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.id}>
          <img alt={result.volumeInfo.title} className="img-fluid" src={result.volumeInfo.imageLinks.smallThumbnail} />
          <p>Title : {result.volumeInfo.title}</p>
          <span>Authors : {result.volumeInfo.authors} | |</span>
          <span>Published Date : {result.volumeInfo.publishedDate}</span>
          
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
