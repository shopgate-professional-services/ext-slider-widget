import React from 'react';
import PropTypes from 'prop-types';
import Link from '@shopgate/pwa-common/components/Link';
import Slider from '@shopgate/pwa-common/components/Slider';
import styles from './style';

/**
 * Renders the component.
 * @param {Object} props The component props.
 * @returns {JSX}
 */
const SliderWidget = (props) => {
  /**
  * Creates an Item for a Slide.
  * @param {Object} slideItem The Slide Item data.
  * @return {JSX} The Slide Item.
  */
  const createSliderItem = (slideItem) => {
    if (slideItem.img === '' || slideItem.img === undefined) {
      return (
        <img key="" className={styles.item} alt="" src={slideItem} />
      );
    }

    if (slideItem.link === '' || slideItem.link === undefined) {
      return (
        <img key="" className={styles.item} alt="" src={slideItem.img} />
      );
    }

    return (
      <Link
        href={slideItem.link}
        key=""
      >
        <img key="" className={styles.item} alt="" src={slideItem.img} />
      </Link>
    );
  };

  /**
  * Creates an Slide with Items.
  * @param {Object} slide The Slide data.
  * @return {JSX} The rendered Slide.
  */
  const createSlide = slide => (
    <div key="">
      <Slider.Item>
        <div className={styles.sliderWrapper}>
          {slide.map((
            slideItem => createSliderItem(slideItem)
          ))}
        </div>
      </Slider.Item>
    </div>
  );

  const slides = props.settings.slides.map((
    slide => createSlide(slide)
  ));

  return (
    <div>
      <div className={styles.headlineContainer}>
        <h3 className={styles.headline}>{props.settings.headline ? props.settings.headline : ''}</h3>
      </div>
      <Slider
        autoPlay
        loop
      >
        {slides}
      </Slider>
    </div>
  );
};

SliderWidget.propTypes = {
  settings: PropTypes.shape({
    slides: PropTypes.array,
    headline: PropTypes.string,
  }),
};

SliderWidget.defaultProps = {
  settings: null,
};

export default SliderWidget;
