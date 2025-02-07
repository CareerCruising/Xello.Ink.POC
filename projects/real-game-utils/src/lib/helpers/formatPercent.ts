export const formatPercent = (locale: string, number: number | string = '') => {
  switch (locale) {
    case 'es-US':
      return `${number} %`;
    case 'fr-CA':
      return `${number} %`;
    default:
      return `${number}%`;
  }
};
