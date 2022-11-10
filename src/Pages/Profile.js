import React from "react";
import { HelmetProvider } from "react-helmet-async";

function Profile({
  imgSrc = "./placeholderimage.jpeg",
  name,
  bio,
  location,
  followers,
  following,
  twitter_username,
  medium_username, 

  html_url,
}) {
  return (
    <>
    <HelmetProvider>
      <title>My Github Portfolio</title>
      <meta name="description" content="Frontend Developer" />
      <link rel="canonical" href="http://localhost:3001/portfolio/" />
    <div id="profile">
      <div id="profile-section">
      <div id="avatar">
        <img src={imgSrc} alt="Me" />
      </div>
      <h1 alt="profile name">{name}</h1>
      </div>
      <div id="profile-details">
        <div className="bio">
        <p>
          {bio}</p>
          </div>
        <p>{location}</p>
        <div>
          <a href="https://github.com/jeweleni?tab=followers">
            <button
              className="
          buttons"
            >
              Followers: {followers}
            </button>
          </a>
        </div>
        <div>
          <a href="https://github.com/jeweleni?tab=following">
            <button className="buttons">Following: {following}</button>
          </a>
        </div>

        <a href="https://twitter.com/jeweleni_diva/">
          <button className="btns"><i className="fa-brands fa-twitter"></i>{twitter_username}</button>
        </a>

        <a href="https://github.com/jeweleni">
          <button className="btns"><i className="fa-brands fa-github"></i>{html_url}</button>
        </a>
      </div>

      <a href=" https://medium.com/@EMJCREATES">
        
        <button className="medium"><i class="fa-brands fa-medium"></i></button>
      </a>
    </div>
    </HelmetProvider>
    </>
  );
}

export default Profile;