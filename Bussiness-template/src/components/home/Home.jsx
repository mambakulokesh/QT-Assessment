import "./Home.css";

function Home() {
  return (
    <div className="container-fluid text-white d-flex justify-content-center align-items-center" id="homeContainer">
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="container p-4">
            <h1>Welcome to my website</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quisquam, qui aut dolorum eum doloremque corrupti eveniet corporis
              cumque repudiandae minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. In, officiis!
            </p>
            <button className="btn btn-primary" id="button">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
