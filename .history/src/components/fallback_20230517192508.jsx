import React from "react";
import { Link } from "react-router-dom";
/** @jsxImportSource theme-ui */

const ErrorBoundaryFallback = ({ error }) => {
  return (
    <div
      className="errorBoundary"
      role="alert"
      sx={{
        backgroundColor: "background",
        color: "text",
      }}
    >
      <h1 className="errorBoundary--title">Something went wrong</h1>
      <pre className="errorBoundary--text">{error}</pre>
      <Link to="/" className="errorBoundary--link">
        Go back to the homepage
      </Link>
    </div>
  );
};

export default ErrorBoundaryFallback;
