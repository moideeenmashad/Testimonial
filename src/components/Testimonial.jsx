import React from "react";

const Testimonial = () => {
  return (
    // Testimonial
    <div>
      <div className="container-fluid">
        <div className="container">
          <div className="row g-4">
            <center className="mb-5">
              <h2 className="mt-4 mb-5 text-light fw-bold">WHAT CLIENTS SAY</h2>
            </center>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
              <div className="card mb-5">
              <center>
                <img src="\Img\man (1).png" alt="" srcset="" className="img-fluid profile-img"/><br />
                <strong className="">Unknown</strong>
              </center>
                <p className="p-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo quisquam quidem laborum nemo reiciendis aspernatur
                  molestias, accusantium pariatur repudiandae consequuntur enim
                  amet aut voluptas id ex quis nulla dolorem quaerat.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div className="card mb-5 ">
            <center>
                <img src="\Img\man (2).png" alt="" srcset="" className="img-fluid profile-img"/>
              </center>
                <p className="p-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo quisquam quidem laborum nemo reiciendis aspernatur
                  molestias, accusantium pariatur repudiandae consequuntur enim
                  amet aut voluptas id ex quis nulla dolorem quaerat.
    
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div className="card mb-5">
              <center>
                <img src="\Img\woman (1).png" alt="" srcset="" className="img-fluid profile-img"/>
              </center>
                
                <p className="p-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo quisquam quidem laborum nemo reiciendis aspernatur
                  molestias, accusantium pariatur repudiandae consequuntur enim
                  amet aut voluptas id ex quis nulla dolorem quaerat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
