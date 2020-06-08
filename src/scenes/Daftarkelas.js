import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import Button from "elements/Button";
import Section from "elements/Section";
import Card from "elements/Card";
import Header from "parts/Header";

import Footer from "parts/Footer";

export default class Daftarkelas extends Component {
  constructor() {
    super();
    this.state = {
      kursus: [],
      name: "",
      platform: "",
      category: "",
    };
  }

  componentDidMount() {
    const url = "http://localhost:9000/api/course";
    Axios.get(url).then((data) => {
      this.setState({
        kursus: data.data,
      });
    });
  }

  inputHandler = (e) => {
    let updatedName = e.target.value;
    this.setState({ name: updatedName });
  };

  inputHandler2 = (e) => {
    let updatedCategory = e.target.value;
    this.setState({ category: updatedCategory });
  };

  inputHandler3 = (e) => {
    let updatedPlatform = e.target.value;
    this.setState({ platform: updatedPlatform });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({
      showName: true,
    });
    window.location.href =
      "hasil?platform=" +
      this.state.platform +
      "&name=" +
      this.state.name +
      "&category=" +
      this.state.category;
  };

  render() {
    return (
      <div className="body-wrap">
        <Header></Header>
        <main className="site-content">
          <Section className="hero" isCenteredContent>
            <div className="container-sm">
              <div className="hero-inner section-inner">
                <div className="hero-content">
                  <h1 className="mt-0 mb-16">Daftar Kelas Informatika</h1>

                  <div className="container-xs">
                    <p className="mt-0 mb-32">
                      Di bawah ini kami menampilkan seluruh kelas yang berhasil
                      kami himpun.
                    </p>
                    <form onSubmit={this.onSubmitHandler}>
                      <input
                        className="form-input"
                        placeholder="Cari Kursus yang Diinginkan"
                        type="text"
                        name="name"
                        onChange={this.inputHandler}
                        value={this.state.name}
                      />
                      <select
                        className="form-input"
                        id="platform"
                        name="platform"
                        onChange={this.inputHandler3}
                        value={this.state.platform}
                      >
                        <option value="">Pilih Penyedia Kursus</option>
                        <option value="build with angga">
                          Build With Angga
                        </option>
                        <option value="Udemy">Udemy</option>
                        <option value="Coursera">Coursera</option>
                        <option value="edureka">Edureka</option>
                      </select>
                      <select
                        className="form-input"
                        id="category"
                        name="category"
                        onChange={this.inputHandler2}
                        value={this.state.category}
                      >
                        <option value="">Pilih Kategori</option>
                        <option value="Mobile Apps">Mobile Apps</option>
                        <option value="Game Development">
                          Game Development
                        </option>
                        <option value="Cloud Platform">Cloud Platform</option>
                        <option value="Ethical Hacking">Ethical Hacking</option>
                        <option value="Full-Stack Web Development">
                          Full-Stack Web Development
                        </option>
                        <option value="Back-End Web Development">
                          Back-End Web Development
                        </option>
                        <option value="DevOps">DevOps</option>
                        <option value="Computer Network">
                          Computer Network
                        </option>
                        <option value="Front-End Web Development">
                          Front-End Web Development
                        </option>
                        <option value="Machine Learning">
                          Machine Learning
                        </option>
                      </select>
                      <br></br>
                      <button
                        type="submit"
                        className="button button-primary button-sm"
                        onClick={this.onSubmitHandler}
                      >
                        Cari
                      </button>
                    </form>
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
                    <Card key={index} hasShadow>
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
