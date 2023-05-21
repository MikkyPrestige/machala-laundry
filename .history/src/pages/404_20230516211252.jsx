import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../components/avatar";
import error404 from "../assets/gif/404.gif";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <section>
      <Helmet>
        <title>Machala Laundry | 404  Error Page</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <div className="notFound--container">
        <div className="notFound--container__img">
          <Avatar
            image={error404}
            alt="404"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="notFound--container__text">
          <h1 className="notFound--container__text--title">404</h1>
          <p className="notFound--container__text--subtitle">
            Page not found. Go back to{" "}
            <Link to="/" className="notFound--container__text--subtitle__link">
              homepage
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default NotFound;