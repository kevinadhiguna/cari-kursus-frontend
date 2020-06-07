import React, { Component } from "react";
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

  componentDidMount() {
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
          <Section className="hero" isCenteredContent>
            <div className="container-sm">
              <div className="hero-inner section-inner">
                <div className="hero-content">
                  <h1 className="mt-0 mb-16"> {this.state.kursus.name}</h1>

                  <div className="container-xs">
                    <p className="mt-0 mb-32">{this.state.kursus.desc}</p>
                    <p className="mt-0 mb-32">
                      Platform: {this.state.kursus.platform}
                      <br></br>
                      Kategori: {this.state.kursus.category}
                      <br></br>
                    </p>
                    <a href={`${this.state.kursus.link}`}>
                      <Button isPrimary>Lihat Kelas</Button>
                    </a>
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
