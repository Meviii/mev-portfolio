import React, { useState, useRef } from 'react';
import '../styles/contact.css';
import { config } from '../data/config';
import ReCAPTCHA from "react-google-recaptcha";
import { key_config } from '../process/key_config';

type ContactFormState = {
    name: string;
    email: string;
    message: string;
};

function Contact() {
    const [formState, setFormState] = useState<ContactFormState>({
        name: '',
        email: '',
        message: '',
    });

    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [isRecaptchaValid, setIsRecaptchaValid] = React.useState(false);
    const [showError, setShowError] = React.useState(false);


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (isRecaptchaValid) {
            //FIXME submit form
        } else {
            setShowError(true);
        }
    };

    const handleRecaptchaChange = (response: string | null) => {
        setIsRecaptchaValid(!!response);
    }

    return (
        <div id="contact" className="contact">
            <h2>Contact</h2>
            <div className='contact-container'>
                <form onSubmit={handleFormSubmit}>
                    <div className='form-input'>
                        <input placeholder='Name*' type="text" name="name" value={formState.name} onChange={handleInputChange} />

                        <input placeholder='Email*' type="email" name="email" value={formState.email} onChange={handleInputChange} />

                        <textarea placeholder='Message*' name="message" value={formState.message} onChange={handleMessageChange} />

                        <ReCAPTCHA sitekey={key_config.env.recaptcha_site_key} onChange={handleRecaptchaChange} />
                        {showError && <p>Please complete the Recaptcha form before submitting the form.</p>}

                        <button type="submit">Submit</button>
                    </div>
                </form>
                <div className='contact-image'>
                    <img width="400" src={config.contact.image} alt='contact' />
                </div>
            </div>
        </div>
    );
}

export default Contact;