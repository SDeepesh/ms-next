import clsx from 'clsx';
import { useState } from 'react';
import { useRouter } from "next/router";

import PageLayout from '../components/PageLayout';
import Reviews from '../components/Reviews';
import { ReactComponent as TiltedArrow } from '../public/images/blue-down-arrow.svg';

import createApolloClient from '../api';
import getAllTemplateTopics from '../api/queries/template/templateTopics/getAllTemplateTopics';
import getMenu from '../api/queries/menus/getMenu';

import sanitizeHTML from '../utils/sanitiseHTML';


const client = createApolloClient();

const Templates = ({ templateTopics, desktopHeaderData }) => {
  const [topicOpen, setTopicOpen] = useState('');
  const { query } = useRouter();
  const router = useRouter();
  let data = templateTopics.nodes;
  const type = query.type;

  if (type) {
    data = data.filter((o) => o.slug === type);
  }

  if (data.length === 0) {
    router.push({
      pathname: '/page-not-found',
    });
  }

  return (
    <PageLayout menuData={desktopHeaderData} title="Templates">
      <div className="templates">
        <div className="templates__introduction">
          <h1>Free Legal Letter Templates and Examples</h1>
          <p>
            The legal letter templates and example documents listed below should help you negotiate
            a decent settlement agreement (aka compromise agreement) with your employer. They will
            think that you've hired lawyers!
          </p>
        </div>
        <Reviews>
          <h3>Rated 4.8 Stars in Over 700 Reviews</h3>
          <p>
            You can rest assured that, because we represent individuals only, there is no{' '}
            <span>conflict of interest</span>
          </p>
        </Reviews>
        <div className="templates__list">
          {data.map((templateTopic, i) => {

            const classes = clsx({
              'templates__list__topic--open': topicOpen === i,
            });

            const handleChevronOnClick = (i) => () => {
              return topicOpen === i ? setTopicOpen('') : setTopicOpen(i);
            };

            return (
              <div className={`templates__list__topic ${classes}`}>
                <div className="templates__topic__title">
                  <h2>{templateTopic.name}</h2>
                  {data.length > 1 && (
                    <TiltedArrow onClick={handleChevronOnClick(i)} />
                  )}
                </div>

                <p>{templateTopic.description}</p>
                {data.length > 1 &&
                  topicOpen === i && (
                    <div className="templates__list__by-topic">
                      <ul>
                        {templateTopic.templates.nodes.map((template) => {
                          return (
                            <li className="templates__list__template">
                              <div className="templates__template__content">
                                <h3>{template.title}</h3>
                                <div
                                  dangerouslySetInnerHTML={{ __html: sanitizeHTML(template.content) }}
                                />
                                <a
                                  className="button"
                                  href={`/${templateTopic.slug}/templates/${template.slug}`}
                                >
                                  View Template
                                </a>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )
                }
                { data.length === 1 && (
                  <div className="templates__list__by-topic">
                    <ul>
                      {templateTopic.templates.nodes.map((template) => {
                        return (
                          <li className="templates__list__template">
                            <div className="templates__template__content">
                              <h3>{template.title}</h3>
                              <div
                                dangerouslySetInnerHTML={{ __html: sanitizeHTML(template.content) }}
                              />
                              <a
                                className="button"
                                href={`/${templateTopic.slug}/templates/${template.slug}`}
                              >
                                View Template
                              </a>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
};

export default Templates;

export async function getStaticProps() {
  const { data } = await client.query(getAllTemplateTopics());
  const { templateTopics } = data;
  const desktopHeaderData = await client.query(getMenu('dGVybToyNQ=='));

  return { props: { templateTopics, desktopHeaderData }, revalidate: 10 };
}
