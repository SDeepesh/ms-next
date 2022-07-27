const noticePeriod = {
  '': 0,
  'one-month': 1,
  'two-months': 2,
  'three-months': 3,
  'four-months': 4,
  'five-months': 5,
};

const situation = {
  grievances: 0.5,
  'already-left': 0,
  disabled: 0.5,
  disciplinary: -2,
  discrimination: 0.5,
  'tribunal-claim': 1,
  whistleblowing: 0.5,
  'performance-review:': 0,
  'new-job': -2,
};

const lengthOfService = {
  '': 0,
  'less-than-two': 0,
  'two-to-four-years': 0,
  'five-to-nine-years': 0.5,
  'more-than-ten-years': 1,
};

const age = {
  '': 0,
  'under-50': 0,
  '50-54': 0.5,
  '55-59': 0.5,
  '60-64': 1,
  '65-69': 1,
  'more-than-70': -1,
};

const numberOfEmployees = {
  '': 0,
  '1-to-10': -0.5,
  '11-to-50': 0.5,
  '51-to-500': 1,
  'more-than-500': 0.5,
};

export { noticePeriod, situation, lengthOfService, age, numberOfEmployees };
