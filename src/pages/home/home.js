import React from "react";
import './Home.css';
import { Link } from "wouter";
import Search from "../../components/search/search";

export default function Home(){
  const links = ['Argentina', 'Pandas', 'Dragon Ball Z', 'Rick and Morty'];
  return(
    <section className="section-links">
      <div className="links-container">
        {
          links.map(x =>
            <Link className="link" key={x} to={`gif/${x}`}>{x}</Link>
          )
        }
      </div>
      <div>
        <Search />
      </div>
    </section>
  )
}