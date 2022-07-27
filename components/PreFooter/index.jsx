import { ReactComponent as Star } from '../../public/images/review-star.svg';

const PreFooter = () => {
  return (
    <div className="pre-footer">
      <div className="pre-footer-container">
        <div className="pre-footer__regulation">
          <div className="SRA-main-div">
            <div className="SRA-sub-div">
              <iframe
                title="SRA registration"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                src="https://cdn.yoshki.com/iframe/55847r.html"
                className="SRA-iframe"
              />
            </div>
          </div>
          <div>
            <p>
              <strong>Regulated by The Solicitors Regulation Authority</strong>
            </p>
            <p>
              Monaco Solicitors is regulated by{' '}
              <a href="https://www.sra.org.uk/consumers/register/organisation/?sraNumber=621671">
                The Solicitors Regulation Authority
              </a>
              . Click the link to get information on the protections that this provides.
            </p>
          </div>
        </div>

        <div className="pre-footer__rating">
          <Star />
          <div className="pre-footer__rating__reviews">
            <p>
              <strong>Rated 4.8 Stars in Over 700 Reviews</strong>
            </p>
            <p>
              We have almost 1,000 Outstanding Reviews on{' '}
              <a
                href={`https://www.google.com/search?rlz=1C5CHFA_enGB778GB778&ei=2qkpXoeYOc-8gQb1gbi4Bw&q=monaco+solicitors+shard&oq=monaco+solicitors+shard&gs_l=psy-ab.3..0i22i30.7534.8321..8673...0.2..0.55.305.6......0....1..gws-wiz.......0i71j0j0i67.vJFFt_yaoOg&ved=0ahUKEwiH7aPg85nnAhVPXsAKHfUADncQ4dUDCAs&uact=5#lrd=0x487603a124a097db:0xcd5b59c759bce61e,1`}
              >
                Google
              </a>{' '}
              &{' '}
              <a href="https://www.reviews.co.uk/company-reviews/store/monacosolicitors-co-uk">
                Reviews.io
              </a>{' '}
              and over 94% of our reviews are 5 Stars!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
