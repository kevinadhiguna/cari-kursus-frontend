import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Axios from "axios";
import { Link } from "react-router-dom";
import queryString from "query-string";

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

const listCourse = [
  {
    name: "Android Development with Kotlin",
    description:
      "Belajar android development dengan bahasa pemrograman Kotlin selama 12 hari.",
    platform: "Codepolitan",
    features: [
      { isChecked: true, content: "Vidio Selamanya" },
      { isChecked: true, content: "Mendapat Source Code" },
      { isChecked: true, content: "Mendapat Sertifikat" },
      { isChecked: false, content: "Dapat Didownload" },
      { isChecked: false, content: "Gratis Konsultasi" },
    ],
  },
  {
    name: "Android Development with Kotlin",
    description:
      "Belajar android development dengan bahasa pemrograman Kotlin selama 12 hari.",
    platform: "Codepolitan",
    features: [
      { isChecked: true, content: "Vidio Selamanya" },
      { isChecked: true, content: "Mendapat Source Code" },
      { isChecked: true, content: "Mendapat Sertifikat" },
      { isChecked: false, content: "Dapat Didownload" },
      { isChecked: false, content: "Gratis Konsultasi" },
    ],
  },
  {
    name: "Android Development with Kotlin",
    description:
      "Belajar android development dengan bahasa pemrograman Kotlin selama 12 hari.",
    platform: "Codepolitan",
    features: [
      { isChecked: true, content: "Vidio Selamanya" },
      { isChecked: true, content: "Mendapat Source Code" },
      { isChecked: true, content: "Mendapat Sertifikat" },
      { isChecked: false, content: "Dapat Didownload" },
      { isChecked: false, content: "Gratis Konsultasi" },
    ],
  },
  {
    name: "Android Development with Kotlin",
    description:
      "Belajar android development dengan bahasa pemrograman Kotlin selama 12 hari.",
    platform: "Codepolitan",
    features: [
      { isChecked: true, content: "Vidio Selamanya" },
      { isChecked: true, content: "Mendapat Source Code" },
      { isChecked: true, content: "Mendapat Sertifikat" },
      { isChecked: false, content: "Dapat Didownload" },
      { isChecked: false, content: "Gratis Konsultasi" },
    ],
  },
  {
    name: "Android Development with Kotlin",
    description:
      "Belajar android development dengan bahasa pemrograman Kotlin selama 12 hari.",
    platform: "Codepolitan",
    features: [
      { isChecked: true, content: "Vidio Selamanya" },
      { isChecked: true, content: "Mendapat Source Code" },
      { isChecked: true, content: "Mendapat Sertifikat" },
      { isChecked: false, content: "Dapat Didownload" },
      { isChecked: false, content: "Gratis Konsultasi" },
    ],
  },
  {
    name: "Android Development with Java",
    description:
      "Belajar android development dengan bahasa pemrograman Kotlin selama 12 hari.",
    platform: "Dicoding",
    features: [
      { isChecked: true, content: "Vidio Selamanya" },
      { isChecked: true, content: "Mendapat Source Code" },
      { isChecked: true, content: "Mendapat Sertifikat" },
      { isChecked: false, content: "Dapat Didownload" },
      { isChecked: false, content: "Gratis Konsultasi" },
    ],
  },
  {
    name: "Android Development Ticket Nonton",
    description:
      "Belajar android development dengan bahasa pemrograman Kotlin selama 12 hari.",
    platform: "Pixel Ninja",
    features: [
      { isChecked: true, content: "Vidio Selamanya" },
      { isChecked: true, content: "Mendapat Source Code" },
      { isChecked: true, content: "Mendapat Sertifikat" },
      { isChecked: true, content: "Dapat Didownload" },
      { isChecked: true, content: "Gratis Konsultasi" },
    ],
  },
];

export default class Hasilpencarian extends Component {
  constructor() {
    super();
    this.state = {
      kursus: [],
    };
  }

  componentWillMount() {
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
                      <div class="pricing-item-content">
                        <div class="pricing-item-header pb-24 mb-24">
                          <div class="pricing-item-price mb-4">
                            <span
                              class="pricing-item-price-amount h1 pricing-switchable"
                              data-pricing-monthly="34"
                              data-pricing-yearly="27"
                            >
                              {list.name}
                            </span>
                          </div>
                          <div class="text-xs text-color-low">{list.desc}</div>
                        </div>

                        <div class="pricing-item-features mb-40">
                          <div class="pricing-item-features-title h6 text-xs text-color-high mb-24">
                            Platform: {list.platform}
                            <br></br>
                            Kategori: {list.category}
                            <br></br>
                            <br></br>
                            {
                              list.feature ? list.feature.map((feature, index) => {
                                return <div key={index}> {feature} </div>;
                              }) : ""
                            }
                          </div>
                        </div>
                      </div>
                      <div class="pricing-item-cta mb-8">
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
