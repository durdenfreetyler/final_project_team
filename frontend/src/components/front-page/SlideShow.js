import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';

export default function Slideshow() {
  return (
    <AwesomeSlider
    animation="foldOutAnimation"
    cssModule={[CoreStyles, AnimationStyles]}
  >
    <div data-src="https://www.stjude.org/content/sites/www/en_US/home/about-st-jude/visit/locations/jcr:content/par-2/cnt_row_1788835022/par-1/cnt_column/par-1/cnt_image.img.1000.high.jpg/1575903774676.jpg" />
    <div data-src="https://www.stjude.org/content/sites/www/en_US/home/about-st-jude/visit/locations/jcr:content/par-2/cnt_row_1788835022/par-1/cnt_column/par-1/cnt_image.img.1000.high.jpg/1575903774676.jpg" />
    <div data-src="https://www.stjude.org/content/sites/www/en_US/home/about-st-jude/visit/locations/jcr:content/par-2/cnt_row_1788835022/par-1/cnt_column/par-1/cnt_image.img.1000.high.jpg/1575903774676.jpg" />
  </AwesomeSlider>
  );
}