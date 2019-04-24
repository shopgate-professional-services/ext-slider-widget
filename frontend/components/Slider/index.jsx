import React from 'react';
import PropTypes from 'prop-types';
import Link from '@shopgate/pwa-common/components/Link';
import Slider from '@shopgate/pwa-common/components/Slider';
import styles from './style';

/**
* Creates an Item for a Slide.
* @param {Object} slideItem The Slide Item data.
* @param {number} index The Slide Item data.
* @return {JSX} The Slide Item.
*/
const createSlideItem = (slideItem, index) => {
  if (typeof slideItem.img !== 'string') {
    return (
      <img className={styles.item} key={`${slideItem}-${index}`} alt="" src={slideItem} />
    );
  }
  if (typeof slideItem.link !== 'string' || slideItem.link.length === 0) {
    return (
      <img className={styles.item} key={`${slideItem.img}-${index}`} alt="" src={slideItem.img} />
    );
  }

  return (
    <Link
      href={slideItem.link}
      key={slideItem.link + index}
    >
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
  <Slider.Item key={index}>
    <div className={styles.sliderWrapper}>
      {slide.map((
        (slideItem, slideItemIndex) => createSlideItem(slideItem, slideItemIndex)
      ))}
    </div>
  </Slider.Item>
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

  const mergedSettings = {
    slides: null,
    autoplay: true,
    loop: true,
    ...props.settings,
  };

  const slides = mergedSettings.slides.map((
    (slide, slideIndex) => createSlide(slide, slideIndex)
  ));

  if (!mergedSettings.headline || mergedSettings.headline === '') {
    return (
      <div>
        <Slider
          autoPlay={mergedSettings.autoplay}
          loop={mergedSettings.loop}
        >
          {slides}
        </Slider>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.headlineContainer}>
        <h3 className={styles.headline}>{mergedSettings.headline}</h3>
      </div>
      <Slider
        autoPlay={mergedSettings.autoplay}
        loop={mergedSettings.loop}
      >
        {slides}
      </Slider>
    </div>
  );
};

SliderWidget.propTypes = {
  settings: PropTypes.shape({
    slides: PropTypes.array.isRequired,
    headline: PropTypes.string,
    autoplay: PropTypes.bool,
    loop: PropTypes.bool,
  }),
};

SliderWidget.defaultProps = {
  settings: {
    slides: null,
    autoplay: true,
    loop: true,
  },
};

export default SliderWidget;
