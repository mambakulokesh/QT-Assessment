import "./Blog.css";

function Blog() {
  return (
    <div className="container-fluid" id="blogContainer">
      <div className="container">
        <div className="row text-center">
          <div className="col-3 lh-small">
            <i className="bi bi-trophy-fill fs-1"></i>
            <p id="numbers">22</p>
            <p id="title">Awards Winning</p>
          </div>

          <div className="col-3 lh-small ">
            <i className="bi bi-briefcase-fill fs-1"></i>
            <p id="numbers">145</p>
            <p id="title">Finished Projects</p>
          </div>

          <div className="col-3 lh-small">
            <i className="bi bi-car-front-fill fs-1"></i>
            <p id="numbers">349</p>
            <p id="title">Products Sold</p>
          </div>

          <div className="col-3 lh-small">
            <i className="bi bi-twitter fs-1"></i>
            <p id="numbers">2456</p>
            <p id="title">Twitter Fans</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog
