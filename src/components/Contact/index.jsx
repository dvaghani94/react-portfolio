import React from "react";

function Contact() {
        return (
            <section id="contact">
                <div className="row section-head">
                    <div className="two columns header-col">
                        <h1><span>Contact Form</span></h1>
                    </div>

                    <div className="rows">
                        <div className="eight columns">
                            <form action="" method="post" id="contact-form" name="contact-form">
                        <fieldset>


                        <div >
                            <label htmlFor="name">Name: </label>
                            <input type="text" name="name" defaultValue="" size="35" id="contactName" onChange={this.handleChange}/>
                         </div>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input type="email" name="email" defaultValue="" size="35" id="contactEmail" onChange={this.handleChange} />
                        </div>
                        <div>
                            <label htmlFor="message">Message: </label>
                            <input id="contactMessage" cols="50" rows="15" name="message" />
                        </div>
                            <div>
                                <button class="submit">
                                 Submit
                                </button>
                                    <span id="image-loader">
                                     <img alt="" src="loader.gif" />
                                    </span>
                            </div>
                            </fieldset>
                            </form>
                    </div>
                    <div id="message-alert">
                        <i className="fa fa-check"></i>Message sent successfully!<br />
                    </div>
                </div>
            </section>
        );
};


export default Contact;