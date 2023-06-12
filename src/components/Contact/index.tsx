import React from 'react';

import ContactForm from './ContactForm';

import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';

const Contact = () => {
  return (
    <section>
      <div className={styles.contact__wrapper}>
        <div className={styles.heading__wrapper}>
          <h5>CONTACT US</h5>
          <h1 className={sen.className}>Let’s Start a Conversation</h1>
          <p className="body-s">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
          </p>
        </div>
        <div className={styles.info__wrapper}>
          <div>
            <p className={`${styles.info__heading}  body-l`}>Working hours</p>
            <h4 className={sen.className}>Monday To Friday</h4>
            <h4 className={sen.className}>9:00 AM to 8:00 PM</h4>
            <p className="body-s">Our Support Team is available 24/7</p>
          </div>
          <div>
            <p className={`${styles.info__heading} body-l`}>Contact Us</p>
            <h4 className={sen.className}>020 7993 2905</h4>
            <p className="body-s">hello@finsweet.com</p>
          </div>
        </div>
        <ContactForm />
      </div>
      <div className={styles.map__wrapper}>
        <iframe
          title="map"
          src="https://www.google.com/maps/d/u/0/embed?mid=1UndmFwsUO1yidEWv7GjURvLv5E9UOrM&ehbc=2E312F"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default Contact;
