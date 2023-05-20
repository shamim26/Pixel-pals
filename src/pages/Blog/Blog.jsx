import React from "react";
import useTitle from "../../hook/useTitle";

const Blog = () => {
  useTitle('Blogs')
  return (
    <div className="h-screen mt-16 mx-20 space-y-4">
      <h2 className="text-xl font-semibold">
        # What is an access token and refresh token? How do they work and where
        should we store them on the client-side?
      </h2>
      <p className="ml-4">
        Access token is short-lived token that used to access protected
        resources. And a refresh token is long-lived token that is used to
        generate new access token.Access tokens are stored in the browser's
        local storage or cookies. Refresh tokens are stored in the browser's
        local storage or a secure database.
      </p>
      <h2 className="text-xl font-semibold">
        # Compare SQL and NoSQL databases?
      </h2>
      <p className="ml-4">
        SQL and NoSQL are two different types of databases. SQL databases store
        data in tables, which are made up of rows and columns. Each row
        represents a single record, and each column represents a single piece of
        data about that record. <br />
        NoSQL database store data in many ways.including key-value pairs,
        documents, graphs.It's Good for high performance and scalability.
      </p>
      <h2 className="text-xl font-semibold">
        # What is express js? What is Nest JS?
      </h2>
      <p className="ml-4">
        Express js is a lightweight framework that allows to create web
        applications. It is easy to learn and use, but it does not provide a lot
        of features. Nest js is a more complex framework that provides a lot of
        features. It is more difficult to learn than Express js, but it is a
        good choice for building complex web applications.
      </p>
      <h2 className="text-xl font-semibold">
        # What is MongoDB aggregate and how does it work?
      </h2>
      <p className="ml-4">
        MongoDB aggregate is a way to process data in MongoDB. It allows you to
        group documents together, perform operations on the grouped data, and
        return a single result.
      </p>
    </div>
  );
};

export default Blog;
