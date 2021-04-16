import React from "react";
import ResumePic from "./images/4F06942C-92FA-474B-A3E1-21706618A6B6.jpeg";


function Resume() {
  return (
    <section class="mb-5">
      <h3 className="resume">Resume</h3>
      <br></br>

      <div class="row justify-content-center" id="resume">
        <div class="mt-5 pl-5 pr-5">
          <div class="mt-5">
          <img
            class="mb-5"
            src={ResumePic}
            alt={Image}
          />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;

function Image() {
  return <iframe src="https://drive.google.com/file/d/1kWhdt8eeZWOjcAzEYwrCZbLfWHKZAt_S/preview" width="640" height="480"></iframe>
}


