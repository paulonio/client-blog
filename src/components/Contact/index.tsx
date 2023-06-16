import React from 'react';
import { useTranslation } from 'next-i18next';

import ContactForm from './ContactForm';

import { sen } from '@/styles/fonts';

import styles from './styled.module.scss';

const Contact = () => {
  const { t } = useTranslation('contact');

  return (
    <section>
      <div className={styles.contact__wrapper}>
        <div className={styles.heading__wrapper}>
          <h5>{t('heading.subtitle')}</h5>
          <h1 className={sen.className}>{t('heading.title')}</h1>
          <p className="body-s">{t('heading.body')}</p>
        </div>
        <div className={styles.info__wrapper}>
          <div>
            <p className={`${styles.info__heading}  body-l`}>{t('info.working')}</p>
            <h4 className={sen.className}>{t('info.days')}</h4>
            <h4 className={sen.className}>{t('info.hours')}</h4>
            <p className="body-s">{t('info.support')}</p>
          </div>
          <div>
            <p className={`${styles.info__heading} body-l`}>{t('info.contact')}</p>
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
