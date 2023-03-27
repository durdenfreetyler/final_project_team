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
      <div data-src="https://www.nationalreview.com/wp-content/uploads/2019/12/salvation-army-workers.jpg?w=789" />
      <div data-src="https://www.podiumrunner.com/wp-content/uploads/2014/12/HardisGreat.jpg?width=728" />
      <div data-src="https://www.podiumrunner.com/wp-content/uploads/2014/12/Masterpiece.jpg?width=728" />
      <div data-src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_501912142_152591.jpg" />
    </AutoplaySlider>
  );
}
