import React from "react";
import Fade from "react-reveal/Fade";

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
export default function Daftarkelas() {
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

  return (
    <div className="body-wrap">
      <Header></Header>
      <main className="site-content">
        <Section className="hero illustration-section-01" isCenteredContent>
          <div className="container-sm">
            <div className="hero-inner section-inner">
              <div className="hero-content">
                <Fade bottom delay={500}>
                  <h1 className="mt-0 mb-16">Daftar Kelas Informatika</h1>
                </Fade>
                <div className="container-xs">
                  <Fade bottom delay={500}>
                    <p className="mt-0 mb-32">
                      Di bawah ini kami menampilkan seluruh kelas yang berhasil
                      kami himpun.
                    </p>
                    <form>
                      <input
                        className="form-input"
                        placeholder="Cari Kursus yang Diinginkan"
                        type="text"
                      />
                      <select
                        className="form-input"
                        id="platform"
                        name="platform"
                      >
                        <option value="">Pilih Penyedia Kursus</option>
                        <option value="Codepolitan">Codepolitan</option>
                        <option value="Dicoding">Dicoding</option>
                        <option value="Sekolah Koding">Sekolah Koding</option>
                        <option value="Pixel Ninja">Pixel Ninja</option>
                        <option value="Build With Angga">
                          Build With Angga
                        </option>
                      </select>
                      <select
                        className="form-input"
                        id="platform"
                        name="platform"
                      >
                        <option value="">Pilih Kategori</option>
                        <option value="Codepolitan">Codepolitan</option>
                        <option value="Dicoding">Dicoding</option>
                        <option value="Sekolah Koding">Sekolah Koding</option>
                        <option value="Pixel Ninja">Pixel Ninja</option>
                        <option value="Build With Angga">
                          Build With Angga
                        </option>
                      </select>
                      <br></br>
                      <input
                        type="submit"
                        className="button button-primary button-sm"
                        value="Cari"
                      />
                    </form>
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
                {listCourse.map((list, index) => (
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
                        <div class="text-xs text-color-low">
                          {list.description}
                        </div>
                      </div>

                      <div class="pricing-item-features mb-40">
                        <div class="pricing-item-features-title h6 text-xs text-color-high mb-24">
                          Platform: {list.platform}
                        </div>
                        <Lists
                          data={list.features}
                          isSmall
                          className="pricing-item-features-list mb-32"
                        ></Lists>
                      </div>
                    </div>
                    <div class="pricing-item-cta mb-8">
                      <Button isBlock>Lihat Kelas</Button>
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
