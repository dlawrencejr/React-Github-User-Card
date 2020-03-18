import React from "react";

function User({ username }) {
  const { avatar_url, name, location, login, html_url,followers, bio } = username;

  return (
    <div className="profile">
      <h2>{name}</h2>
      <img src={avatar_url} alt="avatar-pic" />
      <div className="url-container">
        <h2>Github Handle: {login} </h2>
        <h3>Location: {location}</h3>
        <h4>Total Followers: {followers} </h4>
        <p> Bio: {bio}</p>
        <a href={html_url} className="url">
          Go to Github
        </a>
      </div>
    </div>
  );
}

export default User;
