import PageLayout from '../components/PageLayout';

import getMenu from '../api/queries/menus/getMenu';
import createApolloClient from '../api';

const client = createApolloClient();

const Tools = ({ desktopHeaderData }) => {
  return (
    <PageLayout menuData={desktopHeaderData} title="Tools">
      <div className="tools">
        <h1>Tools</h1>
        <p>
          We provide a growing number of tools at no cost to help you understand your legal position
          and protect your employment rights
        </p>
        <div className="tools__list">
          <div className="tools__link">
            <p>Generate an advice letter & key letters in any employment case</p>
            <a href="https://virtuallawyer.monacosolicitors.co.uk/?_ga=2.181322095.934477428.1649608458-1137694487.1648306453">
              Letter Builder
            </a>
          </div>

          <div className="tools__link">
            <p>For unfair redundancies</p>
            <a href="https://apps.monacosolicitors.co.uk/interview?i=docassemble.interviews%3Adata%2Fquestions%2FRedundancy_v1.yml#page1">
              Redundancy letter builder
            </a>
          </div>

          <div className="tools__link">
            <p>Tips for all cases</p>
            <a href="/tactics/">Tactics</a>
          </div>

          <div className="tools__link">
            <p>Estimate the value of your claim</p>
            <a href="/free-settlement-agreement-calculator/">Settlement Agreement Calculator</a>
          </div>

          <div className="tools__link">
            <p>Example legal letters and templates</p>
            <a href="/templates/">Documents</a>
          </div>

          <div className="tools__link">
            <p>Specific questions on different types of employment case</p>
            <a href="/employment-law-advice/">Q&A</a>
          </div>

          <div className="tools__link">
            <p>our comprehensive employment law book rated 5 stars on Amazon</p>
            <a href="https://www.amazon.co.uk/dp/B07JZK8NNZ">Buy our book on Amazon</a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Tools;

export async function getStaticProps() {
  const desktopHeaderData = await client.query(getMenu('dGVybToyNQ=='));

  return { props: { desktopHeaderData }, revalidate: 10 };
}
