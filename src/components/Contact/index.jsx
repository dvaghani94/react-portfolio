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