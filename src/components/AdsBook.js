import React, { useContext } from "react";

const AdsBook = () => {
  return (
    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light AdsBook">
      <div className="col-md-4 p-lg-5 mx-auto bg-white ">
        <h1 className="display-4 fw-normal">Punny headline</h1>
        <p className="lead fw-normal">
          And an even wittier subheading to boot. Jumpstart your marketing
          efforts with this example based on Apple’s marketing pages.
        </p>
        <a className="btn btn-outline-secondary" href="#">
          Coming soon
        </a>
      </div>
    </div>
  );
};

export default AdsBook;
