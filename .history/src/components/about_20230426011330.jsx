import React from "react";
import {FiPlayCircle} from "react-icons/fi";

const About = () => {
  return (
    <section className="about">
      <div className="about--header">
        <h1 className="about--header__title">About Machala Laundry Service</h1>
      </div>
      <div className="about--content">
        <p className="about--content__text">
          A full service Laundry provider headquartered in Asaba, Delta State.
          Machala Laundry is the place for your Washing, Ironing and Folding of
          laundries. We render Modern, fast and friendly services. At Machala
          Laundry we take pride in having the knowledge, skills, expert
          resources and the products required to make your Laundry operations
          excellent.
        </p>
        {/* // embed video */}
        <div className="about--content__video">
          <a
            className="about--content__video--link"
            href="https://clipchamp.com/watch/oEE4UvILtLH?utm_source=embed&utm_medium=embed&utm_campaign=watch"
          >
            <img
              src="https://clipchamp.com/e.svg"
              alt="Machala laundry building"
              className="about--content__video--img"
            />
            <span className="about--content__video--icon">
              <FiPlayCircle />
            </span>
            Play Video
          </a>
          <iframe
            allow="autoplay;"
            allowfullscreen
            src="https://clipchamp.com/watch/oEE4UvILtLH/embed"
            width="640"
            height="360"
            title="Akpu Junction Branch"
            frameborder="0"
            className="about--content__video--iframe"
          ></iframe>
        </div>
        <div className="about--content__video">
            <a className="about--content__video--link" href="https://clipchamp.com/watch/ZFkJ6e8KEQk?utm_source=embed&utm_medium=embed&utm_campaign=watch">
                <img className="about--content__video--img"src="https://clipchamp.com/e.svg" alt="Machala laundry building" />
                <span className="about--content__video--icon">
              <FiPlayCircle />
            </span>
            Play Video
            </a>
            <iframe allow="autoplay;" allowfullscreen src="https://clipchamp.com/watch/ZFkJ6e8KEQk/embed" width="640" height="360"
             title="First Empire Branch"
             frameborder="0"
             className="about--content__video--iframe"></iframe>
        </div>
      </div>
    </section>
  );
};

export default About;
