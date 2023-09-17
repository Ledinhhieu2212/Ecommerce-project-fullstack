import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__slide">
          <div className="hero__content">
            <h1>
              Find the Best Products with <span>Reliability</span>{" "}
            </h1>
            <form action="">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search Here Shop or Product"
              />
              <input type="button" value="Search" className="hero__search" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
