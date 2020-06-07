import React from "react";

import Section from "elements/Section";
import Header from "parts/Header";
import Clients from "parts/Clients";
import Footer from "parts/Footer";

export default function Penyediakursus() {
  return (
    <div className="body-wrap">
      <Header></Header>
      <main className="site-content">
        <Section className="hero illustration-section-01" isCenteredContent>
          <div className="container-sm">
            <div className="hero-inner section-inner">
              <div className="hero-content">
                <h1 className="mt-0 mb-16">Platform Penyedia Kursus</h1>

                <div className="container-xs">
                  <p className="mt-0 mb-32">
                    Di bawah ini beberapa platform penyedia kursus yang telah
                    berhasil kami himpun.
                  </p>
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
