import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleCLass="footer-links"></SocialLinks>
  <h4>Copyrigh&copy;{new Date().getFullYear()}
  <span> Willy Lopez</span> all rights reserved
  </h4>
      </div>
    </footer>
  )
}

export default Footer
