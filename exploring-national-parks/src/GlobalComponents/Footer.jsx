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
      <a class="twitter-timeline" data-height="200" data-theme="dark" href="https://twitter.com/TempleUniv?ref_src=twsrc%5Etfw">Tweets by TempleUniv</a> 
      </div>

      <div class = 'youtube-video-container'>
        <iframe class='youtube-video' width="100%" height="100%" src="https://www.youtube.com/embed/diy_b2eoDN8?autoplay=1&loop=1&mute=1&playlist=diy_b2eoDN8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"><small>Powered by <a href="https://embed.tube/embed-code-generator/youtube/">youtube embed video</a> generator</small></iframe>
      </div>
    </div>
    
  );
};

export default Footer;
