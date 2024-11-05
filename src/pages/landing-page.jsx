import chefImage from '../assets/icons/chef.jpeg'

export const Home = () => {
  return (
    <div id='home-container'>
      <div className='hero-section'>
        <div className='hero-text'>
          <h1>
            Your everyday <span className='highlight'>cooking</span> inspiration
          </h1>
          <p>
            From the simple to elaborate recipes, you can find them all here
          </p>
          <div className='hero-buttons'>
            <button className='get-started'>Get Started</button>
            <a href='#' className='learn-more'>
              Learn More
            </a>
          </div>
          <div className='metrics'>
            <div>
              <strong>300k+</strong>
              <span> Recipe</span>
            </div>
            <div>
              <strong>20k+</strong>
              <span> User</span>
            </div>
            <div>
              <strong>50+</strong>
              <span> Features</span>
            </div>
          </div>
        </div>
        <div className='hero-image'>
          <img src={chefImage} alt='Chef holding a lobster' />
        </div>
      </div>{' '}
    </div>
  )
}

export default Home