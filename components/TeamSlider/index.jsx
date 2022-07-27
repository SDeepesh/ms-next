import getAllLawyers from '../../api/queries/lawyers/getAllLawyers';
import createApolloClient from '../../api';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

import { ReactComponent as TiltedArrow } from '../../public/images/blue-down-arrow.svg';

const client = createApolloClient();

const TeamSlider = () => {
  const [lawyersData, setLawyersData] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await client.query(getAllLawyers());
      const { lawyers } = data;

      setLawyersData(lawyers);
    })();
  }, []);

  return (
    <div className="team-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 4000,
        }}
      >
        {lawyersData?.nodes?.map((lawyer, index) => {
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
            <SwiperSlide key={index}>
              <div className="team-slider__lawyer">
                <div className="team-slider__lawyer__card">
                  <div
                    className="team-slider__lawyer__portrait"
                    data-bg={imageUrl}
                  />
                  <div className="team-slider__lawyer__info">
                    <h2>{lawyer.title}</h2>
                    <small>{lawyer.lawyers.jobTitle}</small>
                  </div>
                  {quoteSection && <p>"{quoteSection.quote}"</p>}
                </div>

                <div className="team-slider__lawyer__link">
                  <TiltedArrow />
                  <a href={`team/${lawyer.slug}`}>View Profile</a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TeamSlider;
