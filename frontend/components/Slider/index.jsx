import React from 'react';
import PropTypes from 'prop-types';
import Link from '@shopgate/pwa-common/components/Link';
import { Swiper } from '@shopgate/engage/components';
import { isIos, isAndroid } from '@shopgate/pwa-common/selectors/client';
import styles from './style';

/**
* Creates an Item for a Slide.
* @param {Object} slideItem The Slide Item data.
* @param {number} index The Slide Item data.
* @return {JSX} The Slide Item.
*/
const createSlideItem = (slideItem, index) => {
  let oslink = '';

  if (isIos && slideItem.iOSLink) {
    oslink = slideItem.iOSLink;
  } else if (isAndroid && slideItem.androidLink) {
    oslink = slideItem.androidLink;
  }

  if (!slideItem.img) {
    return (
      <img className={styles.item} key={`${slideItem}-${index}`} alt="" src={slideItem} />
    );
  }

  const link = oslink || slideItem.link;

  if (!link) {
    return (
      <img className={styles.item} key={`${slideItem.img}-${index}`} alt="" src={slideItem.img} />
    );
  }

  return (
    <Link href={link} key={link + index}>
      <img className={styles.item} alt="" src={slideItem.img} />
    </Link>
  );
};

/**
* Creates an Slide with Items.
* @param {Object} slide The Slide data.
* @param {number} index The Slide Item data.
* @return {JSX} The rendered Slide.
*/
const createSlide = (slide, index) => (
  <Swiper.Item key={index}>
    <div className={styles.sliderWrapper}>
      {createSlideItem(slide, index)}
    </div>
  </Swiper.Item>
);

/**
 * Renders the component.
 * @param {Object} props The component props.
 * @returns {JSX}
 */
const SliderWidget = (props) => {
  if (!props.settings.slides) {
    return null;
  }

  const { settings } = props;

  const slides = settings.slides.map((
    (slide, slideIndex) => createSlide(slide, slideIndex)
  ));

  if (!settings.headline || settings.headline === '') {
    return (
      <div>
        <Swiper
          autoplay={settings.autoplay}
          loop={settings.loop}
          slidesPerView={settings.slidesPerView}
          indicators={settings.indicators}
        >
          {slides}
        </Swiper>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.headlineContainer}>
        <h3 className={styles.headline}>{settings.headline}</h3>
      </div>
      <Swiper
        autoPlay={settings.autoplay}
        loop={settings.loop}
        slidesPerView={settings.slidesPerView}
        indicators={settings.indicators}
      >
        {slides}
      </Swiper>
    </div>
  );
};

SliderWidget.propTypes = {
  settings: PropTypes.shape({
    slides: PropTypes.array.isRequired,
    headline: PropTypes.string,
    autoplay: PropTypes.bool,
    loop: PropTypes.bool,
    slidesPerView: PropTypes.number,
    indicators: PropTypes.bool,
  }),
};

SliderWidget.defaultProps = {
  settings: {
    slides: null,
    autoplay: true,
    loop: true,
    slidesPerView: 1,
    indicators: false,
  },
};

export default SliderWidget;
