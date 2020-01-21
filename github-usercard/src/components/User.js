import React from "react";

function User({ username }) {
  const { avatar_url, name, location, login, html_url } = username;

  return (
    <div className="profile">
      <h2>{name}</h2>
      <img src={avatar_url} alt="avatar-pic" />
      <div className="url-container">
        <h2>{location}</h2>
        <h3>{login}</h3>
        <a href={html_url} className="url">
          Go to Github user
        </a>
      </div>
    </div>
  );
}

export default User;
