import React from 'react';
import Privacy from '@/components/Privacy';
import { PRIVACY_POLICY } from '@/constants/privacy';

const PrivacyPage = () => {
  return <Privacy privacy={PRIVACY_POLICY} />;
};

export default PrivacyPage;
