import React from "react";
import BioPic from "./images/bio-image.jpg"

function AboutMe() {
  return (
    <nav className="header">
      <h1 class="name">Dhruvi Vaghani</h1>
      <br></br>

      <div className="row justify-content-center">
        <div className="col-10" id="about-section">
          <img
            class="mb-5"
            id="image"
            src={BioPic}
            alt="Dhruvi Vaghani"
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
  )
};

export default AboutMe;

// import React, { Component } from "react";

// function AboutMe() {
//   return (
//     <div id="about">
//       <div className="row">
//         <div className="three columns">
//           <img
//             className="profile-pic"
//             src="./assets/images/bio-image.jpg"
//             alt="Profile Pic"
//           />
//         </div>
//         <div className="nine columns main-col">
//           <h2>About Me</h2>
//           <p>
//             My name is Dhruvi Vaghani. I was born in Belleville, New Jersey and
//             lived most of my life in Edison, New Jersey. My family is a
//             joint-family consisting of my grandparents, father, uncle, aunt, and
//             my siblings. I graduated from Rutgers University in 2016 with a
//             bachelor's degree in Pyschology and Human Resource Management.
//             Currently, I am working as a lab assistant at a cosmetics company.
//           </p>
//           <div className="row">
//             <div className="cloumns contact-details">
//               <h2>Contact Details</h2>
//               <p className="address">
//                 <span>Dhruvi Vaghani</span>
//                 <br />
//                 <span>Street</span>
//                 <br />
//                 <span>City, State Zip</span>
//                 <br />
//                 <span>Phone Number</span>
//                 <br />
//                 <span>dhruvi.vaghani@yahoo.com</span>
//                 <br />
//               </p>
//             </div>
//             <div className="columns download">
//               <p>
//                 <iframe src="https://drive.google.com/file/d/1kWhdt8eeZWOjcAzEYwrCZbLfWHKZAt_S/preview" />
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AboutMe;
