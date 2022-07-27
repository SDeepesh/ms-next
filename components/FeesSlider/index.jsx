import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

import feesNotes from '../../utils/data/feesNotes';

const FeesSlider = () => {
  return (
    <div className="fees-slider__container">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination
        slidesPerView={1}
        autoplay={{
          delay: 4000,
        }}
      >
        {feesNotes.map((note) => (
          <SwiperSlide>
            <div className="fees-slider__card">
              <div
                className="fees-slider__card__image"
                style={{ backgroundImage: `url(${note.image})` }}
              />
              <h3>{note.heading}</h3>
              <p>{note.paragraph}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeesSlider;
