import getPageBySlug from '../api/queries/pages/getPageBySlug';
import PageLayout from '../components/PageLayout';
import CDF from '../components/Sections/CDF';

import createApolloClient from '../api/index';
import getMenu from '../api/queries/menus/getMenu';

const client = createApolloClient();

const Guides = ({ pageBy, desktopHeaderData }) => {
  return (
    <PageLayout menuData={desktopHeaderData} title="Guides">
      <div className="guides">
        <h1>Guides</h1>
        <h2>Main Cases</h2>
        {pageBy.caseTypes?.mainCasesLinks.map((mainCase) => {
          return (
            <div className="guides__main-cases">
              <a href={mainCase.mainCasesUrl.url}>{mainCase.mainCasesLink}</a>
            </div>
          );
        })}
        <h2>Specific cases</h2>
        {pageBy.caseTypes?.specificCasesLinks.map((specificCase) => {
          return (
            <div className="guides__specific-cases">
              <a href={specificCase.specificCasesUrl.url}>{specificCase.specificCasesLink}</a>
            </div>
          );
        })}
        <div>
          <h2>Next Steps</h2>
          <p>
            To see whether we could offer you a free or paid consultation, just get in touch below…
          </p>

          <CDF />
        </div>
      </div>
    </PageLayout>
  );
};

export default Guides;

export async function getStaticProps() {
  const { data } = await client.query(getPageBySlug('/case-types/'));
  const { pageBy } = data;
  const desktopHeaderData = await client.query(getMenu('dGVybToyNQ=='));

  return { props: { pageBy, desktopHeaderData }, revalidate: 10 };
}
