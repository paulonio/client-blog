import { MutableRefObject, useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (ref: MutableRefObject<HTMLElement | null>) => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const cleanObserver = () => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
  };

  useEffect(() => {
    if (!ref.current) {
      return undefined;
    }

    cleanObserver();

    const observer = (observerRef.current = new IntersectionObserver(([entry]) => {
      const isElementIntersecting = entry.isIntersecting;
      if (!isIntersecting && isElementIntersecting) {
        setIntersecting(isElementIntersecting);
        cleanObserver();
      }
    }));

    observer.observe(ref.current);

    return () => cleanObserver();
  }, [ref.current]);

  return isIntersecting;
};
