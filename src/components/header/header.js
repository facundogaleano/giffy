import React, { useState } from "react";
import './Header.css'

export default function Header() {
  const [showNavbar, updateShowNavbar] = useState(true);

  const classNameHeader = showNavbar ? ' show' : ' hidden'; 
  return (
    <section className={"section-header" + classNameHeader}>
      <div className="principal-content">
        <div>
          <h4>Esto es un header</h4>
        </div>
      </div>
      <div className={"button-hidde-container" + classNameHeader}>
        <button onClick={()=> updateShowNavbar(!showNavbar)}>{showNavbar ? '▲' : '▼'}</button>
      </div>
    </section>
  )
}