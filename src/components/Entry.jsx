import PropTypes from 'prop-types';
import markerImage from '../assets/marker.png'

export default function Entry({ img, title, country, googleMapsLink, dates, text }) {
  return (
    <article className='journal-entry'>
      <div className='main-image-container'>
        <img className='main-image' src={img.src} alt={img.alt}/>
      </div>
      <div className='info-container'>
        <img className='marker' src={markerImage} alt="map marker icon"/>
        <span className='country'>{country}</span>
        <a href={googleMapsLink}>View on Google Maps</a>
        <h2 className='entry-title'>{title}</h2>
        <p className='trip-dates'>{dates}</p>
        <p className='entry-text'>{text}</p>
      </div>
    </article>
  )
}

Entry.propTypes = {
  img: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  googleMapsLink: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};