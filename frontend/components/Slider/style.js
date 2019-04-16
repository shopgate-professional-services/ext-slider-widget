import { css } from 'glamor';
import { isIOSTheme } from '@shopgate-ps/pwa-extension-kit/env/helpers';

const isIOS = isIOSTheme();

const item = css({
  width: '100%',
  heigth: 'auto',
  minWidth: 1,
}).toString();

const sliderWrapper = css({
  display: 'flex',
  alignItems: 'center',
}).toString();

const headlineContainer = css({
  display: 'flex',
  padding: '8px 0',
  overflow: 'hidden',
});

/**
 * Headline css
 * @returns {string}
 */
const headline = css({
  fontSize: isIOS ? 22 : 18,
  width: '100%',
  margin: isIOS ? '8px 16px' : '8px 8px 8px 12px',
  textAlign: isIOS ? 'left' : 'center',
  padding: 0,
}).toString();

export default {
  item,
  sliderWrapper,
  headlineContainer,
  headline,
};
