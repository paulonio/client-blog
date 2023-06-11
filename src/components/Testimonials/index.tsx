'use client';

import React, { FC, useState } from 'react';
import { Testimonial } from '@/types/types';
import Heading from './Heading';
import ArrowIcon from '@/icons/ArrowIcon';

import styles from './styled.module.scss';
import Profile from './Profile';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: FC<TestimonialsProps> = ({ testimonials }) => {
  const [index, setIndex] = useState<number>(0);
  const lastIndex = testimonials.length - 1;

  const handleIncrement = () => {
    if (index !== lastIndex) {
      setIndex((idx) => idx + 1);
    }
  };

  const handleDecrement = () => {
    if (index !== 0) {
      setIndex((idx) => idx - 1);
    }
  };

  return (
    <section className={styles.testimonial}>
      <Heading />
      <div className={styles.testimonial__wrapper}>
        <div style={{ marginLeft: `${-index * 100}%` }} className={styles.slides}>
          {testimonials.map(({ profile, message }, i) => {
            return (
              <div key={i} className={styles.slide}>
                <h4>{message}</h4>
                <div className={styles.testimonial__footer}>
                  <Profile profile={profile} />
                  <div className={styles.buttons}>
                    <button
                      type="button"
                      disabled={index === 0}
                      className={styles.prev}
                      onClick={handleDecrement}
                    >
                      <ArrowIcon className={styles.prev__icon} />
                    </button>
                    <button
                      type="button"
                      disabled={index === lastIndex}
                      className={styles.next}
                      onClick={handleIncrement}
                    >
                      <ArrowIcon className={styles.next__icon} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
