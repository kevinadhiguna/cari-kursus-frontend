import React from "react";

import Section from "elements/Section";
import Header from "parts/Header";
import Footer from "parts/Footer";

export default function Semantikweb() {
  return (
    <div className="body-wrap">
      <Header></Header>
      <main className="site-content">
        <Section className="hero illustration-section-01" isCenteredContent>
          <div className="container-sm">
            <div className="hero-inner section-inner">
              <div className="hero-content">
                <h1 className="mt-0 mb-16">Apa itu Semantik Web?</h1>

                <div className="container-xs">
                  <p className="mt-0 mb-32">
                    Web Semantik (Web Bermakna) merujuk kepada teknik yang
                    memungkinkan konten pada Web untuk dapat lebih dimengerti
                    oleh komputer. Istilah Web Semantik itu sendiri dicetuskan
                    oleh Tim Berners-Lee,penemu World Wide Web. Sekarang,
                    prinsip Web Semantik disebut-sebut akan muncul pada Web 3.0,
                    generasi ketiga dari World Wide Web. Bahkan, Web 3.0 itu
                    sendiri sering disamakan dengan Web Semantik. Teknologi Web
                    Semantik ini antara lain adalah RDF, OWL dan SPARQL.
                  </p>
                  <p>- Wikipedia.org</p>
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
