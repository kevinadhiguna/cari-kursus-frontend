import React from "react";
import Fade from "react-reveal/Fade";

import Section from "elements/Section";
import Header from "parts/Header";
import Clients from "parts/Clients";
import Footer from "parts/Footer";

import FeatureTile01 from "assets/images/feature-tile-icon-01.svg";
import FeatureTile02 from "assets/images/feature-tile-icon-02.svg";
import FeatureTile03 from "assets/images/feature-tile-icon-03.svg";

export default function Penyediakursus() {
  const features = [
    {
      imgSrc: FeatureTile01,
      imgAlt: "Feature tile icon 01",
      title: "Pencarian ",
      description:
        "Pencarian  lebih mudah ketimbang harus mencari secara manual di mesin pencari.",
    },
    {
      imgSrc: FeatureTile02,
      imgAlt: "Feature tile icon 02",
      title: "Lengkap",
      description:
        "Tidak usah khawatir, kami telah menghimpun kursus selengkap mungkin.",
    },
    {
      imgSrc: FeatureTile03,
      imgAlt: "Feature tile icon 03",
      title: "Tertarget",
      description: "Hasil yang didapat tertarget, sesuai yang kamu butuhkan.",
    },
  ];

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
                  <h1 className="mt-0 mb-16">Platform Penyedia Kursus</h1>
                </Fade>
                <div className="container-xs">
                  <Fade bottom delay={500}>
                    <p className="mt-0 mb-32">
                      Di bawah ini beberapa platform penyedia kursus yang telah
                      berhasil kami himpun.
                    </p>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Clients></Clients>
      </main>
      <Footer></Footer>
    </div>
  );
}
