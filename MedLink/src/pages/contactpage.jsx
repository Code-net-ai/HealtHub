import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <main>
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us.</p>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contactpage">Contact</Link>
          </li>
          <li>
            <Link to="/aboutpage">About</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}

export default Contact;
