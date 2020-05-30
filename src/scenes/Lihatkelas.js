import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Axios from "axios";
import { Link } from "react-router-dom";

import Button from "elements/Button";
import Section from "elements/Section";
import Card from "elements/Card";
import Lists from "elements/Lists";
import Header from "parts/Header";
import Clients from "parts/Clients";
import Feature from "parts/Feature";
import Footer from "parts/Footer";

import FeatureTile01 from "assets/images/feature-tile-icon-01.svg";
import FeatureTile02 from "assets/images/feature-tile-icon-02.svg";
import FeatureTile03 from "assets/images/feature-tile-icon-03.svg";

export default class Lihatkelas extends Component {
  constructor() {
    super();
    this.state = {
      kursus: [],
    };
  }

  componentWillMount() {
    let kelasId = this.props.match.params.kelasId;
    const url = `http://localhost:9000/api/course/${kelasId}`;
    Axios.get(url).then((data) => {
      this.setState({
        kursus: data.data,
      });
    });
  }

  render() {
    return (
      <div className="body-wrap">
        <Header></Header>
        <main className="site-content">
          <Section className="hero illustration-section-01" isCenteredContent>
            <div className="container-sm">
              <div className="hero-inner section-inner">
                <div className="hero-content">
                  <Fade bottom delay={500}>
                    <h1 className="mt-0 mb-16"> {this.state.kursus.name}</h1>
                  </Fade>
                  <div className="container-xs">
                    <Fade bottom delay={500}>
                      <p className="mt-0 mb-32">{this.state.kursus.desc}</p>
                      <p className="mt-0 mb-32">
                        Platform: {this.state.kursus.platform}
                        <br></br>
                        Kategori: {this.state.kursus.category}
                        <br></br>
                      </p>
                      <a target="_blank" href={`${this.state.kursus.link}`}>
                        <Button isPrimary>Lihat Kelas</Button>
                      </a>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}
