import React, { useState } from 'react';
import axios from 'axios';
import styles from './ContactSection.module.scss';
import Button from '../Button/Button';

const ContactSectionForm = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  return (
    <form className={styles.contactForm}>
      <div className="row">
      <div className="col-12 col-lg-6">
        <input className={`${styles.input} ${styles.emailInput}`} type="email" required placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="col-12 col-lg-6">
        <input className={`${styles.input} ${styles.subjectInput}`} type="text" required placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
      </div>
      <div className="col-12">
        <textarea className={`${styles.input} ${styles.bodyInput}`} required rows={10} placeholder="Message"  value={body} onChange={(e) => setBody(e.target.value)} />
      </div>
      <div className="col-12">
        <Button enabled type="submit">Submit</Button>
      </div>
      </div>
    </form>
  )
}

export default ContactSectionForm;