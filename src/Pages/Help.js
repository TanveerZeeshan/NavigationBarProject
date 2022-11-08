import React from "react";
import { Link, Outlet } from "react-router-dom";


const Help = () => {
  return (
    <>
      <section>
        <h1>The Help page</h1>
        <br/>
        <div>
        <Link style={{margin:"1rem "}} to='location'>Location</Link>
        <Link style={{margin:"1rem"}} to='contacts'>Contact Us</Link>
        </div>
      </section>
      <br/>
     <Outlet/>
    </>
  );
};

export default Help;
