import React from 'react';
import styled from 'styled-components';
import aboutUs1 from '../assests/about_us_images/aboutUs1.jpg';
import aboutUs2 from '../assests/about_us_images/aboutUs2.jpg';
import aboutUs3 from '../assests/about_us_images/aboutUs3.jpg';

const About = () => (
  <>
    <Wrapper>
      <h2>About Us</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <div className="vision flex">
        <div className="left">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, dignissimos sunt est fugit dolor in sequi, doloribus
            illo omnis molestias impedit incidunt inventore quos dolores officia
            ea recusandae possimus repudiandae laudantium. Sed culpa porro earum
          </p>
          <p>
            beatae magni reprehenderit at quia, aliquid earum amet. Rem quas
            officiis fugiat et possimus illo sed suscipit aperiam ipsum officia
            praesentium quibusdam accusantium, blanditiis nam repellendus
          </p>
          <p>
            beatae magni reprehenderit at quia, aliquid earum amet. Rem quas
            praesentium quibusdam accusantium, blanditiis nam repellendus sint
            doloremque.
          </p>
        </div>
        <div className="image">
          <img src={aboutUs1} alt="aboutus_1" />
        </div>
      </div>

      <div className="approach flex">
        <div className="image">
          <img src={aboutUs2} alt="aboutus_1" />
        </div>
        <div className="right">
          <h1>Our Approach</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, dignissimos sunt est fugit dolor in sequi, doloribus
          </p>
          <p>
            beatae magni reprehenderit at quia, aliquid earum amet. Rem quas
            officiis fugiat et possimus illo sed suscipit aperiam ipsum officia
            officiis fugiat et possimus illo sed suscipit aperiam ipsum officia
            sint doloremque.
          </p>
          <p>
            beatae magni reprehenderit at quia, aliquid earum amet. Rem quas
            delectus omnis, asperiores nulla tempora? Dolor sit perspiciatis
            sint doloremque.
          </p>
        </div>
      </div>

      <div className="vision flex">
        <div className="left">
          <h1>Our Process</h1>
          <p>
            olestias impedit incidunt inventore quos dolores officia ea
            recusandae possimus repudiandae laudantium. Sed culpa porro earum
            consequuntur nesciunt, sapiente ipsam sequi id mollitia veritatis
          </p>
          <p>
            beatae magni reprehenderit at quia, aliquid earum amet. Rem quas
            officiis fugiat et possimus illo sed suscipit aperiam ipsum officia
            sint doloremque.
          </p>
          <p>
            beatae magni reprehenderit at quia, aliquid earum amet. Rem quas
            officiis fugiat et possimus illo sed suscipit aperiam ipsum officia
            delectus omnis, asperiores nulla tempora? Dolor sit perspiciatis
            sint doloremque.
          </p>
        </div>
        <div className="image">
          <img src={aboutUs3} alt="aboutus_3" />
        </div>
      </div>
    </Wrapper>
  </>
);

const Wrapper = styled.main`
  text-align: center;
  padding: 30px 10px;
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    color: #222;
    font-size: 3em;
  }

  P {
    font-size: 1em;
    margin-bottom: 50px;
  }

  .vision {
    margin-bottom: 100px;
    align-items: flex-start;

    .left {
      text-align: start;
      align-self: center;
      margin-right: 10px;
      /* padding: 0 150px 0 0; */
      h1 {
        font-size: 2.5em;
        margin-bottom: 20px;
        color: #222;
      }
      p {
        margin-bottom: 20px;
        line-height: 1.4;
        color: #444;
      }
    }

    .image {
      width: auto;
      height: 400px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .approach {
    margin-bottom: 100px;
    align-items: flex-start;

    .image {
      width: auto;
      height: 400px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .right {
      text-align: start;
      align-self: center;
      margin-left: 10px;
      /* padding: 0 0px 0 150px; */
      h1 {
        font-size: 2.5em;
        margin-bottom: 20px;
        color: #222;
      }
      p {
        margin-bottom: 20px;
        line-height: 1.4;
        color: #444;
      }
    }
  }

  @media screen and (max-width: 660px) {
    padding: 10px 00px;

    h2 {
      color: #222;
      font-size: 1.8em;
    }

    P {
      font-size: 0.9em;
      margin-bottom: 40px;
    }

    .vision,
    .approach {
      flex-direction: column;
      .left,
      .right {
        text-align: center;

        h1 {
          font-size: 1.8em;
          margin-bottom: 10px;
        }

        p {
          margin-bottom: 18px;
          line-height: 1.2;
        }
      }

      .image {
        /* display: none; */
        padding: 0 10px;
      }
      border-bottom: 1px dashed var(--little-light-color);
      padding-bottom: 10px;
      margin-bottom: 15px;
    }

    .approach {
      .right {
        margin-top: 15px;
      }
    }
  }
`;

export default About;
