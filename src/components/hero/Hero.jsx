import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="slider-show">
        <div className="slider__button">
          <div className="button__prev"></div>
          <div className="button__next"></div>
          <div className="slider">
            <ul>
              <li>
                <img src={require('../../assets/img/image 9.png').default } alt=""></img>
              </li>
              <li>
                <img src="" alt=""></img>
                <li>
                  <img src="" alt=""></img>
                </li>
                <li>
                  <img src="" alt=""></img>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
