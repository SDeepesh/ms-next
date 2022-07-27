import PageLayout from '../components/PageLayout';
import Reviews from '../components/Reviews';

import getMenu from '../api/queries/menus/getMenu';
import createApolloClient from '../api';

const client = createApolloClient();

const Custom404 = ({ desktopHeaderData }) => {
  return (
    <PageLayout menuData={desktopHeaderData} title="404">
      <div className="custom404-error">
        <h3>Sorry, page under reconstruction, please try another page for now.</h3>
        <Reviews />
      </div>
    </PageLayout>
  );
};

export default Custom404;

export async function getStaticProps() {
  const desktopHeaderData = await client.query(getMenu('dGVybToyNQ=='));

  return { props: { desktopHeaderData }, revalidate: 10 };
}
