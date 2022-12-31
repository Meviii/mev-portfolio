import React, { useState, useRef } from 'react';
import '../styles/contact.css';
import { config } from '../data/config';
import ReCAPTCHA from "react-google-recaptcha";
import { key_config } from '../process/key_config';
import { send } from 'emailjs-com';

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

    const [isRecaptchaValid, setIsRecaptchaValid] = React.useState(false);
    const [showRecapError, setShowRecapError] = React.useState(false);
    const [showEmailSendSuccess, setEmailSendSuccess] = React.useState(false);
    const [showEmailSendError, setEmailSendError] = React.useState(false);
    const [submitIsLoading, setSubmitIsLoading] = useState(false);

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
            setSubmitIsLoading(true);
            _sendEmail();
        } else {
            setShowRecapError(true);
        }
    };

    const _sendEmail = () => {

        send(key_config.email_js.service_id,
            key_config.email_js.template_id,
            formState,
            key_config.email_js.public_key
        )
            .then((response) => {
                console.log('Sent', response.status, response.text);
                setEmailSendSuccess(true);
                setSubmitIsLoading(false)
            })
            .catch((err) => {
                console.log('FAILED...', err);
                setEmailSendError(true);
                setSubmitIsLoading(false)
            });
    }

    const handleRecaptchaChange = (response: string | null) => {
        setIsRecaptchaValid(!!response);
    }

    return (
        <div id="contact" className="contact">
            <h2>Contact</h2>
            <p>{config.contact.description}</p>
            <div className='contact-container'>
                <div className='contact-form'>
                    <form onSubmit={handleFormSubmit}>
                        <div className='form-input'>
                            <input placeholder='Name*' type="text" name="name" value={formState.name} onChange={handleInputChange} />

                            <input placeholder='Email*' type="email" name="email" value={formState.email} onChange={handleInputChange} />

                            <textarea placeholder='Message*' name="message" value={formState.message} onChange={handleMessageChange} />

                            <ReCAPTCHA sitekey={key_config.env.recaptcha_site_key} onChange={handleRecaptchaChange} />

                            <div className='button-response-container'>
                                <div className='button-container'>
                                    <button type="submit" disabled={submitIsLoading} >
                                        {submitIsLoading ? <img width="25" src={config.contact.loading} alt='loading' /> : 'Submit'}
                                    </button>
                                </div>

                                <div className='response-container'>
                                    {showRecapError && <p>Please complete the form.</p>}
                                    {showEmailSendSuccess && <p>Thank you for your message. I will get back to you as soon as possible.</p>}
                                    {showEmailSendError && <p>There was an error sending your message. Please try again later.</p>}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='contact-image'>
                    <img width="400" src={config.contact.image} alt='contact' />
                </div>
            </div>
        </div>
    );
}

export default Contact;