'use client';

import React from 'react';
import emailjs from '@emailjs/browser';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'next-i18next';

import Button from '@/components/Button';
import SelectArrowIcon from '@/icons/SelectArrowIcon';

import { CATEGORIES } from '@/constants/constants';
import { NAME_REGEXP, EMAIL_REGEXP } from '@/constants/contact';

import { inter } from '@/styles/fonts';

import styles from './styles.module.scss';
import { stringToKey } from '@/utils/utils';

interface FormType {
  fullName: string;
  email: string;
  topic: string;
  message: string;
}

const schema = yup.object({
  fullName: yup
    .string()
    .trim()
    .min(5)
    .matches(NAME_REGEXP, 'name should contain only latin letters and at least 2 words')
    .required(),
  email: yup.string().trim().email().matches(EMAIL_REGEXP, 'email must be a valid').required(),
  topic: yup.string().oneOf(CATEGORIES).required(),
  message: yup.string().trim().min(5).max(100).required(),
});

const ContactForm = () => {
  const { t } = useTranslation(['contact', 'common']);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormType>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<FormType> = (data) => {
    emailjs
      .send('service_zijuo46', 'template_b5ggbe9', { ...data }, 'WYxkO50AUT5PWYUGB')
      .then(() => reset());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input
        className={`${styles.input} ${inter.className}`}
        type="text"
        placeholder={t('form.name')}
        {...register('fullName')}
        data-testid="name"
      />
      <p className={styles.form__error}>{errors.fullName?.message}</p>
      <input
        className={`${styles.input} ${inter.className}`}
        type="text"
        placeholder="Email"
        {...register('email')}
        data-testid="email"
      />
      <p className={styles.form__error}>{errors.email?.message}</p>
      <div className={styles.select__wrapper}>
        <select
          className={`${styles.select} ${inter.className}`}
          defaultValue="topic"
          {...register('topic')}
        >
          <option disabled value="topic">
            {t('form.topic')}
          </option>
          {CATEGORIES.map((category) => (
            <option key={category} className={inter.className} value={category}>
              {t(stringToKey(category), { ns: 'common' })}
            </option>
          ))}
        </select>
        <SelectArrowIcon className={styles.arrow} />
      </div>
      <p className={styles.form__error}>{errors.topic?.message}</p>
      <textarea
        className={`${styles.textarea} ${inter.className}`}
        placeholder={t('form.message')}
        {...register('message')}
        data-testid="message"
      />
      <p className={styles.form__error}>{errors.message?.message}</p>
      <Button type="submit">{t('form.send')}</Button>
    </form>
  );
};

export default ContactForm;
