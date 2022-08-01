import getMenu from '../api/queries/menus/getMenu';
import createApolloClient from '../api';

import PageLayout from '../components/PageLayout';
import TeamSlider from '../components/TeamSlider';
import FeesSlider from '../components/FeesSlider';
import Reviews from '../components/Reviews';
import Representation from '../components/Representation';

import { ReactComponent as Play } from '../public/images/play-circle-desktop.svg';

import feesNotes from '../utils/data/feesNotes';
import Prices from '../components/Prices';

const client = createApolloClient();

const Homepage = ({ desktopHeaderData }) => {
  return (
    <PageLayout menuData={desktopHeaderData} title="Homepage">
      <div className="homepage">
        <section className="homepage__lawyers-banner">
          <div className="homepage__lawyers-banner__container">
            <h1>
              Simple & Accessible <br /> Employment Law
            </h1>
            <p>Clear terms. Transparent prices. Outstanding service</p>
            <div className="homepage__lawyers-banner__cta">
              <a className="button" href="/contact-us">
                Get started
              </a>
            </div>
          </div>
        </section>

        <section className="homepage__reviews">
          <Reviews>
            <h3>Rated 4.8 Stars in Over 700 Reviews</h3>
            <p>
              You can rest assured that, because we represent individuals only, there is no{' '}
              <span>conflict of interest</span>
            </p>
          </Reviews>
        </section>

        <section className="homepage__fees">
          <Prices
            feesNotes={feesNotes}
            title="We won't be beaten on price"
            subTitle="We guarantee to match any quote you receive from other firms"
          >
            <p>
              We will review and sign any settlement agreement at{' '}
              <strong>
                no <br />
                cost to you. {''}
              </strong>
              Your employer will cover this fee
            </p>
          </Prices>
        </section>

        <section className="homepage__representation-process">
          <Representation />
        </section>

        <section className="homepage__tools">
          <div className="homepage__tools__container">
            <h2>Not ready to get a lawyer just yet</h2>
            <p>Try our award winning Virtual Lawyer tool to write a legal letter to your <span>employer in order to negotiate a fair settlement agreement</span></p>
            <div className="homepage__tools__img" data-bg="/images/vl-award-blue.png"/>
            <p className="homepage__tools__virtual-link">
              Try{' '}
              <a href="https://virtuallawyer.monacosolicitors.co.uk" target="_blank">
                <span>Virtual Lawyer</span>
              </a>{' '}
              free{' '}
              <a href="https://virtuallawyer.monacosolicitors.co.uk" target="_blank">
                <img
                  className="homepage__tools__next-icon"
                  data-src="/images/next.png"
                  alt="Arrow Icon"
                  width="16"
                  height="16"
                />
              </a>
            </p>
            <div className="homepage__tools__vl">
              <p>
                Craft the foundations of a legally accurate letter in just a few minutes.
                <span><b>
                  No need to sign up – it’s totally free and anonymous
                </b></span>
              </p>
            </div>
          </div>
        </section>

        <section className="homepage__clients">
          <div className="homepage__clients__container">
            <div className="homepage__clients__about-us">
              <h2>
                Our clients are from a wide
                <br /> variety of backgrounds
              </h2>

              <p>
                including manual workers, junior staff, managers and executives,
                <br /> professionals, directors and partners
              </p>
            </div>
            <div className="homepage__clients__image" data-bg="/images/workers.png" />

            <div className="homepage__clients__contact-us">
              <a href="/contact-us" className="button">
                ENQUIRE NOW
              </a>
              <p>
                Monaco Solicitors is the biggest employment law specialist firm
                <br /> in the UK representing
                <strong> individuals only</strong> – never the employer
              </p>
            </div>
          </div>
        </section>

        <section className="homepage__team">
          <div className="homepage__team__container">
            <h2>Meet the team</h2>
            <p>
              All our solicitors have specialist
              <br /> experience in employment law
            </p>
            <div className="homepage__team__slider">
              <TeamSlider />
            </div>
          </div>
        </section>

        <section className="homepage__pre-footer"></section>
      </div>
    </PageLayout>
  );
};

export default Homepage;

export async function getStaticProps() {
  const desktopHeaderData = await client.query(getMenu('dGVybToyNQ=='));

  return { props: { desktopHeaderData }, revalidate: 10 };
}
