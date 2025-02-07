export const formatCurrency = (locale: string, num: number): string => {
  let options = {
    style: 'currency',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };
  switch (locale) {
    case 'en-GB':
      return Intl.NumberFormat('en-GB', {
        ...options,
        currency: 'GBP',
      }).format(num);
    case 'es-US':
      return Intl.NumberFormat('es-AR', {
        ...options,
        currency: 'USD',
        currencyDisplay: 'narrowSymbol',
      }).format(num);
    case 'fr-CA':
      return Intl.NumberFormat('fr', {
        ...options,
        currency: 'CAD',
        currencyDisplay: 'narrowSymbol',
      }).format(num);
    default:
      let number = Intl.NumberFormat('en-US', {
        ...options,
        currency: 'USD',
      }).format(num);
      return number;
  }
};
