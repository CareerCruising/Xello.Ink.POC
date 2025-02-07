import { Career } from '../types/career.types';
import { LocationData } from '../types/location.types';
import { PayStatement } from '../types/pay-statement.types';

export const attachSalaryToCareer = (
  career: Career | null,
  salaries: LocationData['careerIncome'] | null
) => {
  if (career && salaries) {
    let salary = salaries?.find((salary) => salary.careerId == career.careerId);
    return {
      ...career,
      grossSalary: [salary?.grossSalary ?? 0],
      monthlyGrossSalary: [Math.round((salary?.grossSalary ?? 0) / 12)],
    };
  }
  return career;
};

export const getTotalEarningsFromPayStatement = (
  payStatement: PayStatement | null
) => {
  const regularPay = payStatement?.grossPay || 0;
  const overtime = payStatement?.overtime || 0;
  return regularPay + overtime;
};

export const getTotalDeductionsFromPayStatement = (
  payStatement: PayStatement | null
) => {
  if (!payStatement) {
    return 0;
  }
  let total = payStatement?.federalTax ?? 0;

  for (const deduction of payStatement?.deductions) {
    total += deduction.amount;
  }

  total += payStatement?.stateProvTax ?? 0;
  return total;
};
