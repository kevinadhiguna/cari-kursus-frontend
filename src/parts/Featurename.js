import React from "react";
import Fade from "react-reveal/Fade";
import propTypes from "prop-types";

export default function Featurename(props) {
  return (
    <div className="tiles-item">
      <Fade bottom delay={props.delayInMS}>
        <div className="tiles-item-inner">
          <div className="features-tiles-item-content">
            <h4 className="mt-0 mb-8">{props.data.title}</h4>
            <p className="m-0 text-sm">{props.data.job}</p>
            <p className="m-0 text-sm">{props.data.npm}</p>
          </div>
        </div>
      </Fade>
    </div>
  );
}

Featurename.propTypes = {
  delayInMS: propTypes.number,
  data: propTypes.object,
};
