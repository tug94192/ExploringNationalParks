import React from "react";
import "../Style/footer.css";

/**
 * Footer component for the Exploring National Parks application.
 * Renders a footer with the application name and an animated tree image.
 * @module Footer
 * @memberof GlobalComponents
 * @returns {JSX.Element} The rendered Footer component.
 * 
 */
const Footer = () => {
  return (
    <div className="footer">
      <script src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      <span>
        <p>Exploring National Parks</p>
        <img
          src="https://web.archive.org/web/20091027005003im_/http://it.geocities.com/aniellobarra/Img/Clip/Animated/tree.gif"
          alt=""
        />
      </span>
      <div>
      <a class="twitter-timeline" data-height="200" data-theme="dark" href="https://twitter.com/TempleAlert?ref_src=twsrc%5Etfw">Tweets by TempleAlert</a>
      </div>

      
    </div>
    
  );
};

export default Footer;
