import React from "react";
import ResumePic from "./images/4F06942C-92FA-474B-A3E1-21706618A6B6.jpeg";

function Resume() {
  return (
    <section class="mb-5">
      <h3 className="resume">Resume</h3>
      <br></br>

      <div class="row justify-content-center" id="resume">
        <div class="mt-5 pl-5 pr-5">
          <h3>Dhruvi Vaghani</h3>
          <div class="mt-5">
          <img
            class="mb-5"
            src={ResumePic}
            alt="Resume"
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

