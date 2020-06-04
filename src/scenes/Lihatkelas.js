import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Axios from "axios";

import Button from "elements/Button";
import Section from "elements/Section";
import Header from "parts/Header";

import Footer from "parts/Footer";

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
