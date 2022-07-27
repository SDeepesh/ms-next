import PageLayout from '../components/PageLayout';
import Representation from '../components/Representation';
import Reviews from '../components/Reviews';
import CDF from '../components/Sections/CDF';
import sanitizeHTML from '../utils/sanitiseHTML';
import createApolloClient from '../api';
import getMenu from '../api/queries/menus/getMenu';
import getFeesPage from '../api/queries/feesPage/getFeesPage';

const client = createApolloClient();

const Fees = ({ feesPage, desktopHeaderData }) => {
  const { bannerImage } = feesPage;
  const { sourceUrl : banner_image = "" } = bannerImage;
  return (
    <PageLayout menuData={desktopHeaderData} title="Fees">
      <div className="fees">
        <div className="fees__top-banner">
          <h1>{feesPage.bannerHeading}</h1>
          <p>{feesPage.bannerDescription}</p>
          <div className="fees__top-banner__image" style={{ backgroundImage: `url(${banner_image})` }}/>
        </div>
        <Reviews>
          <h3>Rated 4.8 Stars in Over 700 Reviews</h3>
          <p>
            You can rest assured that, because we represent individuals only, there is no{' '}
            <span>conflict of interest</span>
          </p>
        </Reviews>
        <div className="fees__container">
          <h2>{feesPage.worksSection.heading}</h2>
          <p>{feesPage.worksSection.topDescription}</p>
          <div className="fees-cards">
            {feesPage.worksSection.feesCards && feesPage.worksSection.feesCards.map(({ image, heading, description }) => (
              <div className="fee-card">
                <div className="fee-card__image" data-bg={image.sourceUrl ? image.sourceUrl : ""} />
                <h3>{heading}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
          <p>{feesPage.worksSection.bottomDescription}</p>
        </div>
        <Representation />
        <div className="fees__our-prices">
          <h2>{feesPage.communicateSection.heading}</h2>
          <div className="fees__communicate__wrapper">
            {feesPage.communicateSection.process && feesPage.communicateSection.process.map(({ image, heading, description }) => (
              <div className="fees__communicate__child">
                <div className="fees__communicate__child__inner-left">
                    <img
                      className="fees__communicate__child__inner_img"
                      data-src={image && image.sourceUrl ? image.sourceUrl : ""}
                      alt="consultations-image"
                    />
                </div>
                <div className="fees__communicate__child__inner-right">
                  <h3>{heading}</h3>
                  <p dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }} />
                </div>
              </div>
            ))}
            <p dangerouslySetInnerHTML={{ __html: sanitizeHTML(feesPage.communicateSection.bottomDescription) }} />
          </div>
        </div>
        <div className="fees__cdf">
          <div className="fees__cdf__intro">
            <h2>Award winning excellence</h2>
            <p>You can rest assured you’re in good hands – <b>we won the 2021 Law Society Award for Excellence</b></p>
            <div className="fees__cdf__award" />
          </div>

          <CDF />
        </div>
      </div>
    </PageLayout>
  );
};

export default Fees;

export async function getStaticProps() {
  const { data } = await client.query(getFeesPage());
  const { acfOptionsFeesPage } = data;
  const { feesPage } = acfOptionsFeesPage
  const desktopHeaderData = await client.query(getMenu('dGVybToyNQ=='));

  return { props: { feesPage, desktopHeaderData }, revalidate: 10 };
}
