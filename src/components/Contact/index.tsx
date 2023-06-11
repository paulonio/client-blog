'use client';

import React, { useMemo } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';

import ContactForm from './ContactForm';
import Map from './Map';

import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';

const Contact = () => {
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  return (
    <section className={styles.contact__wrapper}>
      <div className={styles.heading__wrapper}>
        <h5>CONTACT US</h5>
        <h1 className={sen.className}>Let’s Start a Conversation</h1>
        <p className="body-s">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim.
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
      <Wrapper apiKey="YOUR_API_KEY">
        <Map center={center} zoom={4} />
      </Wrapper>
    </section>
  );
};

export default Contact;
