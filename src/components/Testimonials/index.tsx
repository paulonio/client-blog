import React, { FC } from 'react';
import { Testimonial } from '@/types/types';
import Heading from './Heading';
import PrevIcon from '@/icons/PrevIcon';
import NextIcon from '@/icons/NextIcon';

import styles from './styled.module.scss';

interface TestimonialsProps {
  testimonial: Testimonial;
}

const Testimonials: FC<TestimonialsProps> = ({ testimonial }) => {
  const { fullName, country, city, urlToAvatar, message } = testimonial;

  return (
    <section className={styles.testimonial}>
      <Heading />
      <div className={styles.testimonial__wrapper}>
        <h4>{message}</h4>
        <div className={styles.testimonial__footer}>
          <div className={styles.profile}>
            <div className={styles.avatar}>
              <img src={urlToAvatar} alt={fullName} />
            </div>
            <div>
              <h4>{fullName}</h4>
              <p className="body-s">
                {city}, {country}
              </p>
            </div>
          </div>
          <div className={styles.buttons}>
            <button type="button" className={styles.prev}>
              <PrevIcon className={styles.prev__icon} />
            </button>
            <button type="button" className={styles.next}>
              <NextIcon className={styles.next__icon} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
