'use client';

import React, { FC, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';

import Heading from './Heading';
import Profile from './Profile';
import ArrowIcon from '@/icons/ArrowIcon';

import { Testimonial } from '@/types/types';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { stringToKey } from '@/utils/utils';

import styles from './styled.module.scss';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: FC<TestimonialsProps> = ({ testimonials }) => {
  const [index, setIndex] = useState<number>(0);
  const lastIndex = testimonials.length - 1;
  const ref = useRef<HTMLElement | null>(null);
  const isIntersecting = useIntersectionObserver(ref);
  const { t } = useTranslation('testimonials');

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
    <section ref={ref} className={styles.testimonial}>
      {isIntersecting && (
        <>
          <Heading />
          <div className={styles.testimonial__wrapper}>
            <div style={{ marginLeft: `${-index * 100}%` }} className={styles.slides}>
              {testimonials.map(({ profile, message }) => {
                return (
                  <div key={profile.fullName} className={styles.slide}>
                    <h4>{t(stringToKey(message))}</h4>
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
        </>
      )}
    </section>
  );
};

export default Testimonials;
