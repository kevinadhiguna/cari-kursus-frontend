import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Axios from "axios";
import { Link } from "react-router-dom";
import queryString from "query-string";

import Button from "elements/Button";
import Section from "elements/Section";
import Card from "elements/Card";
import Header from "parts/Header";
import Footer from "parts/Footer";

export default class Hasilpencarian extends Component {
  constructor() {
    super();
    this.state = {
      kursus: [],
    };
  }

  componentDidMount() {
    let path = this.props.location.search;
    let params = queryString.parse(path);
    const url = `http://localhost:9000/api/course/?platform=${params.platform}&name=${params.name}&category=${params.category}`;
    Axios.get(url).then((data) => {
      this.setState({
        kursus: data.data,
      });
    });
  }
  render() {
    let path = this.props.location.search;
    let params = queryString.parse(path);
    return (
      <div className="body-wrap">
        <Header></Header>
        <main className="site-content">
          <Section className="hero illustration-section-01" isCenteredContent>
            <div className="container-sm">
              <div className="hero-inner section-inner">
                <div className="hero-content">
                  <Fade bottom delay={500}>
                    <h1 className="mt-0 mb-16">Hasil Pencarian</h1>
                  </Fade>
                  <div className="container-xs">
                    <Fade bottom delay={500}>
                      <p className="mt-0 mb-32">
                        Menampilkan hasil pencarian kelas
                        <br></br>
                        <b>Judul: </b>
                        {params.name}
                        <br></br>
                        <b>Platform: </b>
                        {params.platform}
                        <br></br>
                        <b>Kategori: </b>
                        {params.category}
                      </p>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section className="pricing">
            <div className="container">
              <div className="pricing-inner section-inner has-top-divider">
                <div className="tiles-wrap">
                  {this.state.kursus.map((list, index) => (
                    <Card hasShadow>
                      <div className="pricing-item-content">
                        <div className="pricing-item-header pb-24 mb-24">
                          <div className="pricing-item-price mb-4">
                            <span
                              className="pricing-item-price-amount h1 pricing-switchable"
                              data-pricing-monthly="34"
                              data-pricing-yearly="27"
                            >
                              {list.name}
                            </span>
                          </div>
                          <div className="text-xs text-color-low">
                            {list.desc}
                          </div>
                        </div>

                        <div className="pricing-item-features mb-40">
                          <div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
                            Platform: {list.platform}
                            <br></br>
                            Kategori: {list.category}
                            <br></br>
                            <br></br>
                            {list.feature
                              ? list.feature.map((feature, index) => {
                                  return <div key={index}> {feature} </div>;
                                })
                              : ""}
                          </div>
                        </div>
                      </div>
                      <div className="pricing-item-cta mb-8">
                        <Link to={`/kelas/${list.id}`}>
                          <Button isPrimary isBlock>
                            Lihat Kelas
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  ))}
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
