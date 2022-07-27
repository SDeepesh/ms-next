import getAllLawyers from '../../api/queries/lawyers/getAllLawyers';
import createApolloClient from '../../api/index';
import getMenu from '../../api/queries/menus/getMenu';

import { ReactComponent as TiltedArrow } from '../../public/images/blue-down-arrow.svg';
import Reviews from '../../components/Reviews';

import PageLayout from '../../components/PageLayout';

const client = createApolloClient();

const Team = ({ data, desktopHeaderData }) => {
  return (
    <PageLayout menuData={desktopHeaderData} title="Team" classNames="team">
      <h1>Meet Our Team</h1>

      <img className="team__lawyer__banner" data-src="images/lawyers-banner-no-split.png" />

      <div className="team__lawyers">
        {data.lawyers.nodes.map((lawyer) => {
          const quoteSection = lawyer.sections.sections.find(
            (section) => section.fieldGroupName === 'Team_Sections_Sections_Quote',
          );

          const imageSection = lawyer.sections.sections.find(
            (section) => section.fieldGroupName === 'Team_Sections_Sections_Image',
          );

          const imageUrl = imageSection?.image?.mediaItemUrl.replace(
            'http://127.0.0.1',
            'https://monacosolicitors.co.uk',
          );

          return (
            <div className="team__lawyer">
              <div>
                <div
                  className="team__lawyer__portrait"
                  style={{ backgroundImage: `url(${imageUrl}` }}
                />
                <h6>{lawyer.title}</h6>
                <p>
                  <small>{lawyer.lawyers.jobTitle}</small>
                </p>
              </div>
              {quoteSection && <p>"{quoteSection.quote}"</p>}
              <div className="team__lawyer__link">
                <TiltedArrow />
                <a href={`team/${lawyer.slug}`}>View Profile</a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="team__video">
        <div className="team__video__container">
          <h3>We are proud to say</h3>
          <h4>Ellie Reeves MP</h4>
          <div>
            <p>
              One of our very own lawyers here at Monaco Solicitors from April 2016 to June 2017, is
              now MP for Lewisham West and Penge.
            </p>
            <p>
              After seeing her in action on our employment law cases, we’re excited to see that she
              has now been appointed the Shadow Solicitor General.
            </p>
          </div>
        </div>
      </div>
      <div className="team__review">
        <Reviews>
          <div>
            <h6>
              Enquire about first
              <br /> class representation
            </h6>
            <a href="/contact-us" className="button">
              ENQUIRE NOW
            </a>
          </div>
        </Reviews>
      </div>
    </PageLayout>
  );
};

export default Team;

export async function getStaticProps() {
  const { data } = await client.query(getAllLawyers());
  const desktopHeaderData = await client.query(getMenu('dGVybToyNQ=='));

  return { props: { data, desktopHeaderData }, revalidate: 10 };
}
