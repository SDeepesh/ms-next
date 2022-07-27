import { ReactComponent as FullBlueTick } from '../../public/images/infograph-stage-4.svg';
import { ReactComponent as WhiteTick } from '../../public/images/infograph-stage-5.svg';

const Representation = () => {
  return (
    <div className="representation-process__container">
      <h2>No obligation consultations</h2>
      <p>We have developed innovative techniques for helping our clients obtain fair outcomes</p>
      <div className="representation-process__flow">
        <div className="representation-process__card">
          <a href="/contact-us" className="representation-process__card__image representation-process__card__image--contact" />
          <p>Tell us about your case</p>
        </div>
        <div className="representation-process__single-arrow" />
        <div className="representation-process__card">
          <div className="representation-process__card__image representation-process__card__image--one-hour" />

          <p>We’ll be in touch within 1 working hour</p>
        </div>
        <div className="representation-process__single-arrow" />
        <div className="representation-process__card">
          <div className="representation-process__card__image representation-process__card__image--blue-tick" />
          <p>We aim to offer No Win No Fee if possible</p>
        </div>
        <div className="representation-process__double-arrow" />
        <div className="representation-fee">
          <div className="representation-fee__card">
            <FullBlueTick />
            <p>
              If No Win No Fee is possible, your lawyer will explain your journey
            </p>
          </div>
          <div className="representation-fee__card">
            <WhiteTick />
            <p>Otherwise, we will provide you with a competitive quote</p>
          </div>
        </div>
      </div>
      <p>
        We will review and sign any settlement agreement at{' '}
        <strong>
          no <br />
          cost to you.{' '}
        </strong>
        Your employer will cover this fee
      </p>
    </div>
  );
};

export default Representation;
