import { useState } from 'react';
import clsx from 'clsx';
import PageLayout from '../components/PageLayout';
import CDF from '../components/Sections/CDF';

import createApolloClient from '../api';

import sanitizeHTML from '../utils/sanitiseHTML';
import getAllTactics from '../api/queries/tactics/getAllTactics';
import Reviews from '../components/Reviews';
import { ReactComponent as PlusIcon } from '../public/images/plus-icon.svg';
import { ReactComponent as MinusIcon } from '../public/images/minus-icon.svg';

const client = createApolloClient();

const Tactics = ({ tactics }) => {
  const [accordion_1, setaccordion_1] = useState('');
  const [accordion_2, setaccordion_2] = useState('');
  const handleToggle = (i) => () => {
    return accordion_1 === i ? setaccordion_1('') : setaccordion_1(i);
  };
  const handleToggle2 = (i) => () => {
    return accordion_2 === i ? setaccordion_2('') : setaccordion_2(i);
  };

  return (
    <PageLayout>
      <div className="tactics">
        <div className="tactics__top">
          <h1 className="tactics__top__heading">Do I have a case?</h1>
          <p>Here you will find answers to typical workplace problem scenarios.</p>
          <p>
            For questions relating to the use of functions on our website and how we conduct business see our <a href="/faqs">Q&As page</a>
          </p>
        </div>
        <div>
          {tactics.nodes.map((tactics, i) => {
            const classes = clsx({
              'templates__list__topic--open': accordion_1 === i,
            });
            return (
              <div key={tactics.title} id={tactics.title.toLowerCase()} className="tactics__accordion" >
                <div className={`tactics__accordion__title ${classes}`}>
                  {accordion_1 === i ?
                    <><MinusIcon onClick={handleToggle(i)}/></> : <><PlusIcon onClick={handleToggle(i)}/></>
                  }
                  <p className="tactics__accordion__title__text" onClick={handleToggle(i)}><b>{tactics.title}</b></p>
                </div>
                {accordion_1 === i && (
                  <div className="tactics__accordion__body">
                    {tactics.tactics.tacticsAnswers.map((tacticsAnswers, i) => {
                      const classes = clsx({
                        'templates__list__topic--open': accordion_2 === i,
                      });
                      return (
                      <div>
                        <div className={`tactics__accordion__body__title ${classes}`}>
                          {accordion_2 === i ?
                            <><MinusIcon onClick={handleToggle2(i)}/></> : <><PlusIcon onClick={handleToggle2(i)}/></>
                          }
                          <p onClick={handleToggle2(i)}><b>{tacticsAnswers.tacticsAnswerTitle}</b></p>
                        </div>
                        {accordion_2 === i && (
                          <div className="tactics__accordion__body__content">
                            <p dangerouslySetInnerHTML={{ __html: sanitizeHTML(tacticsAnswers.tacticsAnswerDescription) }} />
                          </div>
                        )}
                      </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="tactics__cdf">
          <div className="tactics__cdf__intro">
              <h2>Request a callback</h2>
              <p>Just get in touch using the form below. We aim to be in touch within around an hour if we can help</p>
          </div>
          <CDF />
        </div>
        <div className="tactics__reviews">
          <p className="tactics__reviews__text">See our hundreds of reviews <a href="/testimonials">here</a> and see our prices <a href="/fees">here</a></p>
          <div className="tactics_reviews__body">
            <h2>Award winning excellence</h2>
            <p>You can rest assured you’re in good hands – <b>we won the 2021 Law Society Award for Excellence</b></p>
            <img data-src="images/aword.png" alt="award"/>
            <Reviews />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Tactics;

export async function getStaticProps() {
  const { data: allTacticsData } = await client.query(getAllTactics());
  const { tactics } = allTacticsData;

  return { props: { tactics }, revalidate: 10 };
}
