import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksArr = links.map(link => {
    return(
      <a href={`#${link}`} key={link}>{link}</a>
    )
  })

  return <nav>{linksArr}</nav>;
}

export default NavBar;
