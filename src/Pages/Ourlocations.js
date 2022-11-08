import React from "react";
import { Link } from "react-router-dom";

const Ourlocations = () => {
  return (
    <section>
      <h1>The our location page</h1>
      <ul>
        <li>
          <Link to="/ourlocation/India">India</Link>
        </li>
        <li>
          <Link to="/ourlocation/England">England</Link>
        </li>
        <li>
          <Link to="/ourlocation/London">London</Link>
        </li>
      </ul>
    </section>
  );
};

export default Ourlocations;
