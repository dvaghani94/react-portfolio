import React, { useState } from "react";

function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const { name, email, message } = formState;

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <section class="justify-content-center" id="contact-form">
            <h3 className="contact" data-testid="h2tag">Contact Form</h3>
            <br></br>
            <form class="justify-content-center" id="contact">
                <div class="mt-5">
                    <label htmlFor="name">Name: </label>
                    <input class="form-control" type="text" name="name" defaultValue={name} />
                </div>
                <div class="mt-5">
                    <label htmlFor="email">Email: </label>
                    <input class="form-control" type="email" name="email" defaultValue={email} />
                </div>
                <div class="mt-5">
                    <label htmlFor="name">Message: </label>
                    <input class="form-control" type="text" name="message" defaultValue={message} />
                </div>
                <div class="mt-5 mb-5">
                    <button class="btn btn-outline-dark mt-4" type="submit" data-testid="button" onSubmit={handleSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Contact;

// import React { Component } from "react";

// class Contact extends Component {
//     render() {
//             return (
//                 <section id="contact">
//                     <div className="row section-head">
//                         <div className="two columns header-col">
//                             <h1><span>Contact Form</span></h1>
//                         </div>
    
//                         <div className="rows">
//                             <div className="eight columns">
//                                 <form action="" method="post" id="contact-form" name="contact-form">
//                             <fieldset>
    
    
//                             <div >
//                                 <label htmlFor="name">Name: </label>
//                                 <input type="text" name="name" defaultValue="" size="35" id="contactName" onChange={this.handleChange}/>
//                              </div>
//                             <div>
//                                 <label htmlFor="email">Email: </label>
//                                 <input type="email" name="email" defaultValue="" size="35" id="contactEmail" onChange={this.handleChange} />
//                             </div>
//                             <div>
//                                 <label htmlFor="message">Message: </label>
//                                 <input id="contactMessage" cols="50" rows="15" name="message" />
//                             </div>
//                                 <div>
//                                     <button class="submit">
//                                      Submit
//                                     </button>
//                                         <span id="image-loader">
//                                          <img alt="" src="loader.gif" />
//                                         </span>
//                                 </div>
//                                 </fieldset>
//                                 </form>
//                         </div>
//                         <div id="message-alert">
//                             <i className="fa fa-check"></i>Message sent successfully!<br />
//                         </div>
//                     </div>
//                 </section>
//             );
//     };
//     };
    
//     export default Contact;