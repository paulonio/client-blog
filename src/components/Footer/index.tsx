'use client';

import React from 'react';
import emailjs from '@emailjs/browser';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Button from '@/components/Button';
import Navigation from '@/components/Navigation';

import { FOOTER_ROUTES } from '@/constants/routes';

import { inter } from '@/styles/fonts';

import styles from './styled.module.scss';
import Socials from '../Socials';
import { EMAIL_REGEXP } from '@/constants/contact';

interface FooterFormProps {
  email: string;
}

const schema = yup.object({
  email: yup.string().trim().email().matches(EMAIL_REGEXP).required(),
});

const Footer = () => {
  const { register, handleSubmit, reset } = useForm<FooterFormProps>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FooterFormProps> = (data) => {
    emailjs
      .send('service_zijuo46', 'template_beov2fl', { ...data }, 'WYxkO50AUT5PWYUGB')
      .then(() => reset());
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__header}>
          <h3 className={styles.title}>Modsen Client Blog</h3>
          <Navigation links={FOOTER_ROUTES} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <h2 className={styles.form__title}>
            Subscribe to our news letter to get latest updates and news
          </h2>
          <div className={styles.form__fields}>
            <input
              className={`${styles.form__input} ${inter.className}`}
              type="email"
              placeholder="Enter Your Email"
              {...register('email')}
            />
            <Button type="submit">Subscribe</Button>
          </div>
        </form>
        <div className={styles.contact}>
          <div>
            <p className={styles.contact__info}>Finstreet 118 2561 Fintown</p>
            <p className={styles.contact__info}>Hello@finsweet.com 020 7993 2905</p>
          </div>
          <Socials theme="light" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
