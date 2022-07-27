const AboutMenu = () => {
  return (
    <div className="about-menu">
      <div className="about-menu__container">
        <div className="about-menu__topic-container">
          <a href="/about-us">About us</a>
          <a href="/team">Our Team</a>
          <a href="/fees">Prices</a>
        </div>
        <div className="about-menu__topic-container">
          <a href="/media-coverage">Media</a>
          <a href="/careers">Careers</a>
          <a href="/contact-us">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default AboutMenu;
