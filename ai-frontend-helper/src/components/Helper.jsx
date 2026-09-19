import { useState } from "react";

function Helper() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (question.trim() === "") {
    setAnswer("Please enter a frontend question.");
    return;
  }

  const userQuestion = question.toLowerCase();

  if (userQuestion.includes("html")) {
    setAnswer(
      "HTML is used to create the structure of a webpage. Think of it as the skeleton of your website."
    );
  } else if (userQuestion.includes("css")) {
    setAnswer(
      "CSS is used to style your webpage. You can use it to control colors, spacing, fonts, layouts, and more."
    );
  } else if (userQuestion.includes("javascript") || userQuestion.includes("js")) {
    setAnswer(
      "JavaScript adds functionality and interactivity to your webpage, such as buttons, forms, and dynamic content."
    );
  } else if (userQuestion.includes("react")) {
    setAnswer(
      "React is a JavaScript library for building user interfaces using reusable components."
    );
  } else if (userQuestion.includes("bootstrap")) {
    setAnswer(
      "Bootstrap is a CSS framework that provides ready-made classes for responsive layouts, buttons, cards, forms, and more."
    );
  } else {
    setAnswer(
      "Try asking me about HTML, CSS, JavaScript, React, or Bootstrap. I can give you a simple frontend development explanation."
    );
  }
  }

  return (
    <section id="helper" className="helper-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            
            <div className="card shadow p-4 helper-card">
              <h2 className="text-center mb-3">
                Ask the AI Frontend Helper
              </h2>

              <p className="text-center text-muted">
                Ask a question about frontend development.
              </p>

              <form onSubmit={handleSubmit}>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="e.g. How do I center a div?"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                ></textarea>

                <div className="d-flex gap-2 mt-3">
                <button
                  type="submit"
                  className="btn btn-primary flex-grow-1"
                >
                  Ask AI
                </button>
                <button
                 type="button"
                  className="btn btn-outline-secondary"
                 onClick={() => {
                  setQuestion("");
                  setAnswer("");
                }}
               >
               Clear
              </button>
              </div>
              </form>

              {answer && (
                <div className="alert alert-primary mt-4 ai-response">
                  <h5 className="fw-bold mb-2">
                     AI Response
                  </h5>
                  
                  <p className="mb-0 ">{answer}</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Helper;