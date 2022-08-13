import React from "react";
import ProfileLinks from "../components/ProfileLinks";

class Footer extends React.Component {

  render() {
    
    return(
      <footer id="footer" className="flex-container-space w3-container">
        <div>&copy; Sean Trudel Code, 2022.</div>
        <br />
        <ProfileLinks />
        <br />
        <a href="#header" title="Link to top of current page.">Back to top</a>

      </footer>
    )

  }

}

export default Footer;