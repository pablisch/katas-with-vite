const calculateYears = (principal, interest, tax, desired) => {
  let years = 0;
  while (principal < desired) {
    const netInterest = (principal * interest) - ((principal * interest) * tax);
    principal += netInterest;
    years += 1;
  }
  return years;
}

export default calculateYears;