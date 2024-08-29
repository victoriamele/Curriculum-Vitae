import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <p>&copy; 2024 {t('yourName')}. {t('allRightsReserved')}</p>
    </footer>
  );
}

export default Footer;