import { useEffect, useState } from 'react';

import { delayResult } from '@/utils/utils';

export const useDelay = (isIntersecting: boolean) => {
  const [isShowing, setShowing] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (isIntersecting) {
      setLoading(true);
      delayResult(setShowing, setLoading);
    }
  }, [isIntersecting]);

  return { isShowing, isLoading };
};
