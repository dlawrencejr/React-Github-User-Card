import React from "react";

function Followers({ image, name, html_url }) {
  return (
    <div className="followers">
      <img src={image} alt="avatar-pic" />
      <div className="url-container">
        <h3>Github Handle: {name}</h3>
        <a href={html_url} className="url">
          Go to Github user
        </a>
      </div>
    </div>
  );
}

export default Followers;
