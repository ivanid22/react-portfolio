import React, { useState } from 'react';
import axios from 'axios';
import styles from './ContactSection.module.scss';
import Button from '../Button/Button';

const ContactSectionForm = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [formState, setFormState] = useState('idle');

  const resetFields = () => {
    setEmail('');
    setSubject('');
    setBody('');
  }
  

  const submitMessage = (event) => {
    const {REACT_APP_BASE_MAIL_URL, REACT_APP_MAIL_API_DOMAIN, REACT_APP_MAIL_API_KEY, REACT_APP_MAIL_RECIPIENT } = process.env;
    const requestUrl = `${REACT_APP_BASE_MAIL_URL}/${REACT_APP_MAIL_API_DOMAIN}/messages`;
    event.preventDefault();
    setFormState('sendingMessage');
    /*axios({
      url: requestUrl,
      method: 'POST',
      auth: {
        username: 'api',
        password: REACT_APP_MAIL_API_KEY,
      },
      params: {
        from: email,
        to: REACT_APP_MAIL_RECIPIENT,
        subject: subject,
        text: body,
      },
    }).then((response) => {
      console.log(response)
      setFormState('messageSent');
    }).catch((error) => {
      console.log(error)
      setFormState('error');
    });*/
    setTimeout(() => {
      resetFields();
      setFormState('error');
    }, 2000)
  }

  const renderConfirmation = () => (
    <div className="col-12 d-flex justify-content-center">
        <p className={styles.confirmationMessage}>Thank you for contacting me! I'll get back to you soon</p>
    </div>
  );

  const appIdle = () => ((formState === 'idle') || (formState === 'messageSent') || (formState === 'error'))
  
  const renderError = () => (
    <div className="col-12 d-flex justify-content-center">
      <p className={styles.errorMessage}> There was an error sending the message, please try again later. </p>
    </div>
  )
  
  const renderForm = () => {
    return (
      <form className={styles.contactForm} onSubmit={submitMessage}>
        <div className="row">
          <div className="col-12 col-lg-6">
            <input disabled={!appIdle()} className={`${styles.input} ${styles.emailInput}`} type="email" required placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="col-12 col-lg-6">
            <input disabled={!appIdle()} className={`${styles.input} ${styles.subjectInput}`} type="text" required placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
          </div>
          <div className="col-12">
            <textarea disabled={!appIdle()} className={`${styles.input} ${styles.bodyInput}`} required rows={10} placeholder="Message"  value={body} onChange={(e) => setBody(e.target.value)} />
          </div>
          { formState === 'messageSent' ? renderConfirmation() : undefined }
          { formState === 'error' ? renderError() : undefined }
          <div className="col-12 d-flex justify-content-center">
            <Button enabled={appIdle()} type="submit">Submit message</Button>
          </div>
        </div>
      </form>
    )
  }
  
  return (
    <div>
      { renderForm() }
    </div>
  )
}

export default ContactSectionForm;