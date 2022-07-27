import { noticePeriod, situation, lengthOfService, age, numberOfEmployees } from './multipliers';

const saCalculation = (values) => {
  const salary = values.salary;
  const monthlySalary = salary / 12;

  const hasDiscriminationOrWistelblow =
    values.multi.includes('discrimination') || values.multi.includes('whistleblowing');

  const noticePeriodMultiplier = noticePeriod[values['notice-period']];
  const ageMultiplier = age[values['age']];
  const numberOfEmployeesMultiplier = numberOfEmployees[values['employees']];
  const lengthOfServiceMultiplier = lengthOfService[values['years-worked']];

  let situationMultiplier = 0;

  values.multi.forEach((element) => {
    situationMultiplier += situation[element];
  });

  const totalMultiplier =
    situationMultiplier +
    noticePeriodMultiplier +
    ageMultiplier +
    numberOfEmployeesMultiplier +
    lengthOfServiceMultiplier +
    4;

  const multiplier =
    values['years-worked'] == 'less-than-two' && !hasDiscriminationOrWistelblow
      ? 2
      : totalMultiplier;

  const result = monthlySalary * multiplier;
  const sanitizedResult = Math.floor(result);
  const resultWithCommas = sanitizedResult.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return resultWithCommas;
};

export default saCalculation;
