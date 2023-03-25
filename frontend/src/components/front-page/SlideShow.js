import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import "../../scss/slidshow.scss"


const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function Slideshow() {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={5000}
    >
      
      <div data-src="https://i0.wp.com/theatlantavoice.com/wp-content/uploads/2020/03/stjude-1.jpg?w=780&ssl=1" />
      <div data-src="https://i0.wp.com/theatlantavoice.com/wp-content/uploads/2020/03/stjude-1.jpg?w=780&ssl=1" />
      <div data-src="/https://i0.wp.com/theatlantavoice.com/wp-content/uploads/2020/03/stjude-1.jpg?w=780&ssl=1" />
      <div data-src="/path/to/image-4.png" />
      <div data-src="/path/to/image-5.png" />
    </AutoplaySlider>
  );
}
