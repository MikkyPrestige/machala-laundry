import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../components/avatar";
import error404 from "../assets/gif/404.gif";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <section>
      <Helmet>
        <title>Machala Laundry | 404 Error Page</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <div className="notFound">
        <div className="notFound--img">
          <Avatar
            image={error404}
            alt="404"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
          <Link to="/" className="notFound--text__link">
            homepage
          </Link>
      </div>
    </section>
  );
};

export default NotFound;
