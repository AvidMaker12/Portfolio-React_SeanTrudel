import React from "react";
import Nav from "./Nav";

class Header extends React.Component {

  render() {

    return(
      <header id="header" className="flex-container-space">
        {/*Logo Home button.*/}
        <span className="logo w3-bar-item w3-mobile w3-animate-opacity"><a href="index.php"><img src="images/logo.gif" id="img-logo" width="100" alt="Link to Home page." /></a></span>
        <Nav />
      </header>
    );

  }

}

export default Header;