import React from "react";

function AboutMe() {
  return (
    <nav className="header">
      <h1 class="name">Dhruvi Vaghani</h1>
      <br></br>

      <div className="row justify-content-center">
        <div className="col-10" id="about-section">
          <img
            class="mb-5"
            id="bckground"
            src="./assets/images/bio-image.jpg"
          />

          <p>
            My name is Dhruvi Vaghani. I was born in Belleville, New Jersey and
            lived most of my life in Edison, New Jersey. My family is a
            joint-family consisting of my grandparents, father, uncle, aunt, and
            my siblings. I graduated from Rutgers University in 2016 with a
            bachelor's degree in Pyschology and Human Resource Management.
            Currently, I am working as a lab assistant at a cosmetics company.
          </p>
        </div>
      </div>
    </nav>
  );
}

export default AboutMe;
