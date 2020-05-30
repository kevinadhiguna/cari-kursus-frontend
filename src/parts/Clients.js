import React from "react";
import Fade from "react-reveal/Fade";
import Section from "elements/Section";

import Course02 from "assets/images/course02.png";
import Course03 from "assets/images/course03.jpg";
import Course04 from "assets/images/course04.jpg";
import Course05 from "assets/images/course05.png";

export default function Clients() {
  return (
    <Section className="clients">
      <Fade bottom delay={500}>
        <div className="container">
          <div className="clients-inner section-inner has-top-divider has-bottom-divider">
            <ul className="list-reset">
              <li>
                <img src={Course02} alt="Coursera" width="150" />
              </li>
              <li>
                <img src={Course03} alt="Udemy" width="150" />
              </li>
              <li>
                <img src={Course04} alt="Edureka" width="150" />
              </li>
              <li>
                <img src={Course05} alt="Build With Angga" width="80" />
              </li>
            </ul>
          </div>
        </div>
      </Fade>
    </Section>
  );
}
