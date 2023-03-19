import React from "react";

const ReadMore = ({ data }) => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="row">
              <div className="col-md-6">
                <div className="images p-3">
                  <div className="text-center p-4">
                    <img id="main-image" src={data.thumbnailUrl} width={250} />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="product p-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-long-arrow-left" />
                      <span className="ml-1">Back</span>
                    </div>
                    <i className="fa fa-shopping-cart text-muted" />
                  </div>
                  <div className="mt-4 mb-3">
                    <span className="text-uppercase text-muted brand">
                      {data.status}
                    </span>
                    <h5 className="text-uppercase">{data.title}</h5>
                    <div className="price d-flex flex-row align-items-center">
                      <div className="ml-2">
                        <small className="dis-price">{data.pageCount}</small>
                        <span>{data.pageCount/23}% OFF</span>
                      </div>
                    </div>
                  </div>
                  <p className="about">{data.longDescription}</p>

                  <div className="cart mt-4 align-items-center">
                    <button className="btn btn-danger text-uppercase mr-2 px-4">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
