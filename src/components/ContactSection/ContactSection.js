import React from 'react';
import ContactSectionForm from '../ContactSectionForm/ContactSectionForm';
import styles from './ContactSection.module.scss';

const ContactSection = () => {
  return (
    <div className={`${styles.contactSectionContainer}`}>
      <h2 className={styles.contactSectionTitle}>Contact me</h2>
      <p className={styles.contactSectionDescription}>
        If you have an application you are interested in developing, a feature that you need built or a project that needs coding. I’d love to help with it
      </p>
      <ContactSectionForm />
    </div>
  )
}

export default ContactSection;