export const getLoanTerm = (
  startingPrincipal: number,
  loanAmount: number,
  interestRate: number,
) => {
  let monthlyInterestPercent = interestRate / 12;
  let monthlyPayment = loanAmount || 50;

  //check if payoff is possible
  let monthlyInterest =
    startingPrincipal * (1 + monthlyInterestPercent) - startingPrincipal;
  if (monthlyInterest > monthlyPayment) {
    return 0;
  }

  let runningLoanOwed = startingPrincipal;
  let months = 0;
  while (runningLoanOwed > 0) {
    //loan ammortization
    runningLoanOwed = runningLoanOwed * (1 + monthlyInterestPercent);
    //monthly payment
    runningLoanOwed = runningLoanOwed - monthlyPayment;
    months++;
  }
  return Math.ceil(months / 12);
};

export const getTotalInterestPrincipal = (
  principal: number,
  loanAmount: number | null | undefined,
  interestRate: number,
) => {
  let total = 0;
  let totalInterest = 0;
  const monthlyPayment = loanAmount ?? 50;
  let monthlyInterestPercent = interestRate / 12;
  const numberOfPayments = 10 * 12;
  let month = 1;
  let remainingBalance = principal;

  while (month <= numberOfPayments && remainingBalance >= 0) {
    const monthInterestAmount = monthlyInterestPercent * remainingBalance;
    const monthPrincipal = monthlyPayment - monthInterestAmount;
    remainingBalance -= monthPrincipal;
    totalInterest += monthInterestAmount;
    month++;
  }

  total = totalInterest + principal;

  return {
    total: total,
    interest: totalInterest,
    principal: principal,
  };
};
