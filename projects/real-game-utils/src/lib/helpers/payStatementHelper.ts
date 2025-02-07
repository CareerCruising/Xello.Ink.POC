import {
  PayStatement,
  RowEarningDeduction,
} from '../types/pay-statement.types';
import { formatDate } from '@angular/common';
import { formatCurrency } from './formatCurrency';

export const getPayPeriod = (
  payStatement: PayStatement | null,
  locale: string
) => {
  if (!payStatement) {
    return '';
  }
  let payStatementDate = new Date(payStatement.payMonth);

  // Add/subtract timezone offset to get utc date
  const utcOffsetMillis = payStatementDate.getTimezoneOffset() * 60 * 1000;
  const utcDate = new Date(payStatementDate.getTime() + utcOffsetMillis);

  // Get first day of pay statement month
  utcDate.setDate(1);
  const firstDayCurrentMonth = new Date(utcDate.getTime());

  // Get last day of pay statement month
  utcDate.setMonth(utcDate.getMonth() + 1);
  utcDate.setDate(0);
  const lastDayCurrentMonth = new Date(utcDate.getTime());
  let firstDayCurrentMonthFormatted: string = '';
  let lastDayCurrentMonthFormatted: string = '';

  switch (locale) {
    case 'en-GB':
      firstDayCurrentMonthFormatted = formatDate(
        firstDayCurrentMonth,
        'MMM d',
        locale
      );

      lastDayCurrentMonthFormatted = formatDate(
        lastDayCurrentMonth,
        'MMM d',
        locale
      );
      return `${firstDayCurrentMonthFormatted} - ${lastDayCurrentMonthFormatted}, ${utcDate.getFullYear()}`;
    case 'es-US':
      firstDayCurrentMonthFormatted = formatDate(
        firstDayCurrentMonth,
        'dd/MM/YYYY',
        locale
      );

      lastDayCurrentMonthFormatted = formatDate(
        lastDayCurrentMonth,
        'dd/MM/YYYY',
        locale
      );
      return `${firstDayCurrentMonthFormatted} - ${lastDayCurrentMonthFormatted}`;
    case 'fr-CA':
      firstDayCurrentMonthFormatted = formatDate(
        firstDayCurrentMonth,
        'd MMM',
        locale
      );

      lastDayCurrentMonthFormatted = formatDate(
        lastDayCurrentMonth,
        'd MMM',
        locale
      );
      return `${firstDayCurrentMonthFormatted} - ${lastDayCurrentMonthFormatted}, ${utcDate.getFullYear()}`;
    default:
      firstDayCurrentMonthFormatted = formatDate(
        firstDayCurrentMonth,
        'MMM d',
        locale
      );

      lastDayCurrentMonthFormatted = formatDate(
        lastDayCurrentMonth,
        'MMM d',
        locale
      );
      return `${firstDayCurrentMonthFormatted} - ${lastDayCurrentMonthFormatted}, ${utcDate.getFullYear()}`;
  }
};

export const formatPayStatementDate = (
  payStatement: PayStatement | null,
  locale: string
) => {
  if (payStatement) {
    const formattedDate = formatDate(
      payStatement?.payMonth,
      'MMMM YYYY',
      locale
    );
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }
  return '';
};

export const getPaySatementSummaryRow = (
  locale: string,
  totalEarnings: number,
  totalDeductions: number
) => {
  let rows: RowEarningDeduction[] = [
    {
      leftText: 'PAY_STATEMENT.SUMMARY.EARNINGS',
      rightText: formatCurrency(locale, totalEarnings),
    },
    {
      leftText: 'PAY_STATEMENT.SUMMARY.DEDUCTIONS',
      rightText: formatCurrency(locale, 0 - totalDeductions),
    },
    {
      leftText: 'PAY_STATEMENT.SUMMARY.TOTAL',
      rightText: formatCurrency(locale, totalEarnings - totalDeductions),
      highlighted: true,
    },
  ];
  return rows;
};

export const getPaySatementDeducationRows = (
  locale: string,
  payStatement: PayStatement | null
) => {
  if (!payStatement) {
    return [];
  }
  let deductionRows: RowEarningDeduction[] = [
    {
      leftText: 'PAY_STATEMENT.DEDUCTIONS.FEDERAL',
      rightText: formatCurrency(locale, payStatement.federalTax),
      tooltip: 'PAY_STATEMENT.DEDUCTIONS.TOOLTIPS.INCOME_TAX'
    },
  ];
  let total = payStatement.federalTax;

  for (const deduction of payStatement.deductions) {
    deductionRows.push({
      ...getDeductionById(deduction.deductionTypeId),
      rightText: formatCurrency(locale, deduction.amount),
    });
    total += deduction.amount;
  }

  if (payStatement.stateProvTax > 0) {
    deductionRows.push({
      leftText: 'PAY_STATEMENT.DEDUCTIONS.STATE',
      rightText: formatCurrency(locale, payStatement.stateProvTax),
      tooltip: 'PAY_STATEMENT.DEDUCTIONS.TOOLTIPS.STATE_TAX'
    });
    total += payStatement.stateProvTax;  
  }

  deductionRows.push({
    leftText: 'PAY_STATEMENT.DEDUCTIONS.TOTAL',
    rightText: formatCurrency(locale, total),
    highlighted: true,
  });
  return deductionRows;
};

const getDeductionById = (id: number) => {
  switch (id) {
    case 1:
      return {
        leftText: 'PAY_STATEMENT.DEDUCTIONS.SOCIAL',
        tooltip: 'PAY_STATEMENT.DEDUCTIONS.TOOLTIPS.SOCIAL_SECURITY'
      };
    case 2:
      return {
        leftText: 'PAY_STATEMENT.DEDUCTIONS.MEDICARE',
        tooltip: 'PAY_STATEMENT.DEDUCTIONS.TOOLTIPS.MEDICARE'
      };
    default:
      return {
        leftText: ''
      };
  }
};

export const getPaySatementEarningsRows = (
  locale: string,
  payStatement: PayStatement | null
) => {
  if (!payStatement) {
    return [];
  }
  const regularPay = payStatement?.grossPay || 0;
  const overtime = payStatement?.overtime || 0;
  const earnings: RowEarningDeduction[] = [
    {
      leftText: 'PAY_STATEMENT.EARNINGS.REGULAR',
      rightText: formatCurrency(locale, regularPay),
    },
    {
      leftText: 'PAY_STATEMENT.EARNINGS.OVERTIME',
      rightText: formatCurrency(locale, overtime),
    },
    {
      leftText: 'PAY_STATEMENT.EARNINGS.TOTAL',
      rightText: formatCurrency(locale, regularPay + overtime),
      tooltip: 'PAY_STATEMENT.EARNINGS.TOOLTIPS.GROSS_EARNINGS',
      highlighted: true,
    },
  ];
  return earnings;
};
