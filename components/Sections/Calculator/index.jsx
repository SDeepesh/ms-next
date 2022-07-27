import { useState } from 'react';
import { Formik, Form, Field } from 'formik';

import saCalculation from './saCalculation';

const Calculator = ({ classNames = '' }) => {
  const [details, setDetails] = useState({});
  const [hasCalculated, setHasCalculated] = useState(false);
  const [result, setResult] = useState(0);

  const handleCalculatorOnSubmit = (values) => {
    const calculationResult = saCalculation(values);
    setHasCalculated(true);
    setResult(calculationResult);

    setDetails(values);
  };

  return (
    <div className={`calculator ${classNames}`}>
      {!hasCalculated ? (
        <Formik
          initialValues={{
            salary: '',
            age: '',
            'years-worked': '',
            'notice-period': '',
            employees: '',
            redundancy: '',
            multi: [],
          }}
          onSubmit={(values) => {
            handleCalculatorOnSubmit(values);
          }}
        >
          {({ values }) => (
            <Form>
              <h3>Settlement Calculator</h3>
              <div className="calculator__first-step">
                <div className="calculator__first-step__field">
                  <p>Salary (£)</p>
                  <Field type="number" name="salary" />
                </div>

                <div className="calculator__first-step__field">
                  <p>Age</p>
                  <Field as="select" name="age">
                    <option selected="selected">- Select -</option>
                    <option value="under-50">Under 50</option>
                    <option value="50-54">50 to 54</option>
                    <option value="55-59">55 to 59</option>
                    <option value="60-64">60 to 64</option>
                    <option value="65-69">65 to 69</option>
                    <option value="more-than-70">70 +</option>
                  </Field>
                </div>

                <div className="calculator__first-step__field">
                  <p>Years Worked</p>
                  <Field as="select" name="years-worked">
                    <option selected="selected">- Select -</option>
                    <option value="less-than-two">Less than 2 years</option>
                    <option value="two-to-four-years">2 to 4 Years</option>
                    <option value="five-to-nine-years">5 to 9 Years</option>
                    <option value="more-than-ten-years">10+ Years</option>
                  </Field>
                </div>

                <div className="calculator__first-step__field">
                  <p>Notice Period</p>
                  <Field as="select" name="notice-period">
                    <option selected="selected">- Select -</option>
                    <option value="one-month">1 Month</option>
                    <option value="two-months">2 Months</option>
                    <option value="three-months">3 Months</option>
                    <option value="four-months">4 Months</option>
                    <option value="five-months">5 Months</option>
                    <option value="more-than-six-months">6+ Months</option>
                  </Field>
                </div>

                <div className="calculator__first-step__field">
                  <p>Employees</p>
                  <Field as="select" name="employees">
                    <option selected="selected">- Select -</option>
                    <option value="1-to-10">1 to 10</option>
                    <option value="11-to-50">11 to 50</option>
                    <option value="51-to-500">51 to 500</option>
                    <option value="more-than-500">500+</option>
                  </Field>
                </div>

                <div className="calculator__first-step__field">
                  <p>Redundancy</p>
                  <Field as="select" name="redundancy">
                    <option selected="selected">- Select -</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </Field>
                </div>
              </div>
              <div className="calculator__second-step">
                <div className="calculator__second-step__field">
                  <Field type="checkbox" name="multi" value="grievances" />
                  <p>Grievances</p>
                </div>

                <div className="calculator__second-step__field">
                  <Field type="checkbox" name="multi" value="already-left" />
                  <p>Already Left</p>
                </div>

                <div className="calculator__second-step__field">
                  <Field type="checkbox" name="multi" value="disabled" />
                  <p>Disabled</p>
                </div>

                <div className="calculator__second-step__field">
                  <Field type="checkbox" name="multi" value="disciplinary" />
                  <p>Disciplinary</p>
                </div>

                <div className="calculator__second-step__field">
                  <Field type="checkbox" name="multi" value="performance-review" />
                  <p>Performance review</p>
                </div>

                <div className="calculator__second-step__field">
                  <Field type="checkbox" name="multi" value="discrimination" />
                  <p>Discrimination</p>
                </div>

                <div className="calculator__second-step__field">
                  <Field type="checkbox" name="multi" value="tribunal-claim" />
                  <p>Tribunal Claim</p>
                </div>

                <div className="calculator__second-step__field">
                  <Field type="checkbox" name="multi" value="whistleblowing" />
                  <p>Whistleblowing</p>
                </div>

                <div className="calculator__second-step__field">
                  <Field type="checkbox" name="multi" value="new-job" />
                  <p>New job</p>
                </div>
              </div>
              <div className="calculator__third-step">
                <button className="button" type="submit">
                  CALCULATE
                </button>
              </div>
            </Form>
          )}
        </Formik>
      ) : (
        <div className="calculator__result__wrapper">
          <h3>Your Settlement Estimate</h3>
          <div className="calculator__result__number">
            <span>£ {result}</span>

            <button
              className="button"
              onClick={() => {
                setHasCalculated(false);
              }}
            >
              Recalculate
            </button>
          </div>
          <p>
            <strong>
              We can invariably negotiate higher settlements than employees acting on their own. We
              can also review & sign your settlement agreement, which your employer will pay for
            </strong>
          </p>
          <p>
            To discuss your situation, and whether you deserve a better deal, simply enquire now to
            request a free consultation
          </p>
          <a className="button" href="/contact-us">
            Enquire now
          </a>
        </div>
      )}
    </div>
  );
};

export default Calculator;
