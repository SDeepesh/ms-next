import { useState } from 'react';
import { useRouter } from 'next/router';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

import getTrackingParams from '../../../utils/getTrackingParams';

const validationSchema = Yup.object({
  'call-taken-by': Yup.string(),
  name: Yup.string().required('Required'),
  'job-title': Yup.string(),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.number(),
  'years-employed': Yup.string().required('Required'),
  'still-employed': Yup.string().required('Required'),
  salary: Yup.string().required('Required'),
  'settlement-agreement': Yup.string(),
  description: Yup.string().required('Required'),
});

const CDF = () => {
  const router = useRouter();
  const isUserLoggedIn = router.query.loggedIn === 'true';
  const [formSubmittedSuccessfully, setFormSubmittedSuccessfully] = useState(null);

  const handleGAEventOnSubmit = () => {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      event: 'form',
      form: {
        action: 'submit',
        id: 'cdf-react',
        name: 'CDF',
        type: 'Contact detailed form',
        category: 'Contact forms',
        success: true,
      },
    });
  };

  const handleFormSubmit = async (values) => {
    if (!isUserLoggedIn) {
      values.tracking = getTrackingParams();
    }

    const res = await axios.post(process.env.NEXT_PUBLIC_MS_PIPEDRIVE_LAMBDA_EP, values);

    if (res.status === 200) {
      setFormSubmittedSuccessfully(true);
      handleGAEventOnSubmit();
      window.location.href = `https://apps.monacosolicitors.co.uk/interview?i=docassemble.interviews%3Adata%2Fquestions%2FCDF2.yml&email=${values.email}`;
    } else {
      setFormSubmittedSuccessfully(false);
    }
  };

  return (
    <div className="cdf">
      <Formik
        initialValues={{
          'call-taken-by': '',
          name: '',
          job: '',
          email: '',
          phone: '',
          'years-employed': '',
          'still-employed': '',
          salary: '',
          'settlement-agreement': '',
          description: '',
        }}
        onSubmit={handleFormSubmit}
        validationSchema={validationSchema}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {({ errors, touched, isValid, isSubmitting }) => (
          <Form className="cdf__form">
            {isUserLoggedIn && (
              <div className="cdf__form__call-taken-by">
                <p>Call taken by:</p>
                <Field as="select" name="call-taken-by">
                  <option selected="selected">-Select -</option>
                  <option value="Kurtis">Kurtis</option>
                  <option value="Sana">Sana</option>
                  <option value="Angelo">Angelo</option>
                  <option value="Terenia">Terenia</option>
                  <option value="Amy">Amy</option>
                </Field>
              </div>
            )}
            <div className="cdf__form__first-step">
              <h3>Contact Details</h3>
              <div className="cdf__first-step__fields">
                <div className="cdf__field__wrapper">
                  <p>
                    <span>*</span> Name
                  </p>
                  <Field type="text" name="name" />
                </div>

                <div className="cdf__field__wrapper">
                  <p>Latest job title</p>
                  <Field type="text" name="job" />
                </div>

                <div className="cdf__field__wrapper">
                  <p>
                    <span>*</span> Email
                  </p>
                  <Field type="email" name="email" />
                  {errors.email && touched.email ? (
                    <i className="cdf__field__error">{errors.email}</i>
                  ) : null}
                </div>

                <div className="cdf__field__wrapper">
                  <p>Phone</p>
                  <Field type="phone" name="phone" />
                </div>
              </div>
            </div>
            <div className="cdf__form__second-step">
              <h3>Your Situation</h3>
              <div className="cdf__second-step__fields">
                <div className="cdf__second-step__select">
                  <div className="cdf__select-field__wrapper">
                    <p>
                      <span>*</span> Years employed
                    </p>
                    <Field as="select" name="years-employed">
                      <option selected="selected">- Select -</option>
                      <option value="Less than 2 years">Less than 2 years</option>
                      <option value="More than 2 years">More than 2 years</option>
                    </Field>
                    {errors['years-employed'] && touched['years-employed'] ? (
                      <i className="cdf__field__error">{errors['years-employed']}</i>
                    ) : null}
                  </div>
                  <div className="cdf__select-field__wrapper">
                    <p>
                      <span>*</span> Still employed
                    </p>
                    <Field as="select" name="still-employed">
                      <option selected="selected">- Select -</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </Field>
                    {errors['still-employed'] && touched['still-employed'] ? (
                      <i className="cdf__field__error">{errors['still-employed']}</i>
                    ) : null}
                  </div>

                  <div className="cdf__select-field__wrapper">
                    <p>
                      <span>*</span> Annual income
                    </p>
                    <Field as="select" name="salary">
                      <option selected="selected">- Select -</option>
                      <option value="£0 - £30,000">£0 - £30,000</option>
                      <option value="£30,000 - £50,000">£30,000 - £50,000</option>
                      <option value="£50,000 - £100,000">£50,000 - £100,000</option>
                      <option value="£100,000 +">£100,000 +</option>
                    </Field>
                    {errors.salary && touched.salary ? (
                      <i className="cdf__field__error">{errors.salary}</i>
                    ) : null}
                  </div>

                  <div className="cdf__select-field__wrapper">
                    <p>
                      Do you have a<br /> settlement agreement?
                    </p>
                    <Field as="select" name="settlement-agreement">
                      <option selected="selected">- Select -</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </Field>
                  </div>
                </div>
                <div className="cdf__form__third-step">
                  <p>
                    <span>*</span> Brief description of case
                  </p>

                  <Field rows={12} name="description" component="textarea" />
                  {errors.description && touched.description ? (
                    <i className="cdf__field__error">{errors.description}</i>
                  ) : null}
                </div>
              </div>
            </div>
            <button disabled={!isValid || isSubmitting} className="button" type="submit">
              {isSubmitting ? 'SUBMITTING' : 'SUBMIT'}
            </button>
            <small>Completely confidential</small>
            {formSubmittedSuccessfully === false && (
              <p>
                <strong>There was an error when submitting your form</strong> , is on us not on you.
                Please try again later or reach us directly at enquiries@monacosolicitors.co.uk
              </p>
            )}{' '}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CDF;
