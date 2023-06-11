import React from 'react';

import Button from '@/components/Button';
import SelectArrowIcon from '@/icons/SelectArrowIcon';

import { inter } from '@/styles/fonts';

import styles from './styles.module.scss';

const ContactForm = () => {
  return (
    <form className={styles.form}>
      <input className={`${styles.input} ${inter.className}`} type="text" placeholder="Full Name" />
      <input
        className={`${styles.input} ${inter.className}`}
        type="text"
        placeholder="Your Email"
      />
      <div className={styles.select__wrapper}>
        <select className={`${styles.select} ${inter.className}`} name="topic" defaultValue="topic">
          <option disabled value="topic">
            Topic
          </option>
          <option className={`${styles.option} ${inter.className}`} value="business">
            Business
          </option>
          <option className={`${styles.option} ${inter.className}`} value="economy">
            Economy
          </option>
          <option className={`${styles.option} ${inter.className}`} value="startup">
            Startup
          </option>
          <option className={inter.className} value="technology">
            Technology
          </option>
        </select>
        <SelectArrowIcon className={styles.arrow} />
      </div>
      <textarea className={`${styles.textarea} ${inter.className}`} placeholder="Message" />
      <Button>Send Message</Button>
    </form>
  );
};

export default ContactForm;
