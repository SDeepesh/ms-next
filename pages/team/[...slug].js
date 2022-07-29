import getAllLawyers from '../../api/queries/lawyers/getAllLawyers';
import getLawyerBySlug from '../../api/queries/lawyers/getLawyerBySlug';
import createApolloClient from '../../api/index';
import getMenu from '../../api/queries/menus/getMenu';

import PageLayout from '../../components/PageLayout';
import DynamicSection from '../../components/DynamicSections';

const client = createApolloClient();

const LawyerSingle = ({ data, desktopHeaderData }) => {
  const lawyerName = data.teamBy.title;
  const lawyerData = data.teamBy.lawyers;
  const reviews = data.teamBy.lawyers.reviews.review;
  const sections = data.teamBy.sections.sections;

  return (
    <PageLayout menuData={desktopHeaderData} title={`Lawyer - ${lawyerName}`} classNames="lawyer">
      <h2>{lawyerName}</h2>
      <p>{lawyerData.jobTitle}</p>
      <div>
        <DynamicSection sections={data.teamBy.sections.sections} />
      </div>
      <div className="lawyer__reviews">
        <div className="lawyer__reviews__header">
          <img data-src="../images/small-blue-stars.png" width="250" alt="blue-stars" />
          <h3>What our clients say</h3>
        </div>
        {reviews.map((review) => (
          <div className="lawyer__reviews__single">
            <p className="lawyer__reviews__single__header">
              <strong><i>{review.name}</i></strong>
              <small><i>"{review.mainQuote}"</i></small>
            </p>
            <p className="lawyer__reviews__single__body"><i>"{review.text}"</i></p>
            <div className="lawyer__reviews__single__footer">
              <img data-src="../images/small-blue-stars.png" alt="small-blue-stars" width="120" />
              <a href={review.platformLink} target="_blank">
                {
                  review.platform === "google" ?
                  <img data-src="../images/google-review.png" alt="google-review" className="lawyer__reviews__single__footer__review-icon" /> :
                  review.platform === "reviewsio" ?
                  <img data-src="../images/reviewsio-icon.png" alt="reviewsio-icon" className="lawyer__reviews__single__footer__review-icon"/> :
                  review.platform === "yell" ?
                  <img data-src="../images/yell.png" alt="yell-icon" className="lawyer__reviews__single__footer__review-icon"/> :
                  review.platform
                }
              </a>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default LawyerSingle;

export const getStaticPaths = async () => {
  const { data } = await client.query(getAllLawyers());

  const paths = data.lawyers.nodes.map(({ slug }) => ({
    params: { slug: [slug] },
  }));

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const { slug } = params;

  const { data } = await client.query(getLawyerBySlug(slug[0]));
  const desktopHeaderData = await client.query(getMenu('dGVybToyNQ=='));

  return { props: { data, desktopHeaderData }, revalidate: 10 };
}
