function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6">
            <h2 className="fw-bold">About AI Frontend Helper</h2>

            <p className="text-muted mt-3">
              AI Frontend Helper is a simple web application designed
              to help beginners understand frontend development concepts.
            </p>

            <p className="text-muted">
              It provides quick explanations for HTML, CSS, JavaScript,
              React, and Bootstrap.
            </p>
          </div>

          <div className="col-md-6">
            <div className="card shadow-sm border-0 p-4">
              <h4 className="fw-bold">What can you learn?</h4>

              <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item">HTML Structure</li>
                <li className="list-group-item">CSS Styling</li>
                <li className="list-group-item">JavaScript</li>
                <li className="list-group-item">React Components</li>
                <li className="list-group-item">Bootstrap</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;