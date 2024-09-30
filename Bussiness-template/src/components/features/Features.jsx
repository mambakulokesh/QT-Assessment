import "./Features.css";

function Features() {
  return (
    <div className="conainer-fluid p-5">
      <h2 className="text-center mt-3">Our Features</h2>

      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center p-2 border-0" style={{ width: "22rem" }}>
              <div className="card-head d-flex justify-content-center align-items-center">
                <i className="bi bi-pc-display-horizontal bg-primary"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title">Fully Responsive</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nulla similique dolore veniam laboriosam quasi.
                </p>
                <a href="" className="text-decoration-none">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center p-2 border-0" style={{ width: "22rem" }}>
              <div className="card-head d-flex justify-content-center align-items-center">
                <i className="bi bi-person-fill bg-primary"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title">Fully Responsive</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nulla similique dolore veniam laboriosam quasi.
                </p>
                <a href="" className="text-decoration-none">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center p-2 border-0" style={{ width: "22rem" }}>
              <div className="card-head d-flex justify-content-center align-items-center">
                <i className="bi bi-gear bg-primary"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title">Fully Responsive</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nulla similique dolore veniam laboriosam quasi.
                </p>
                <a href="" className="text-decoration-none">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
