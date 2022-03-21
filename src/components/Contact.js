import React from "react";

// icons
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  return (
    <div id="contact">
      <h2>Contact Me</h2>
      <ul>
        <li>
          <AlternateEmailIcon className="icon" />
          <a href="mailto:averywblake734@gmail.com">Email</a>
        </li>
        <li>
          <LinkedInIcon className="icon" />
          <a
            href="https://www.linkedin.com/in/avery-blake-397a25223/"
            className="icon"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li>
          <TwitterIcon className="icon" />
          <a
            href="https://twitter.com/stealthblacklol"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <GitHubIcon className="icon" />
          <a
            href="https://github.com/Scrub4Life?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
