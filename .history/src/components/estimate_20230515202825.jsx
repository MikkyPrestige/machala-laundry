// Estimate component
import React from "react";
import Layout from "../layout/nav";
import Footer from "../layout/footer";

const Estimate = () => {
  return (
    <section className="wrapper">
      <Layout />
      <section className="estimate">
        <div className="estimate--head">
          <header className="estimate--head__header">
            <h1 className="estimate--head__header__title">Estimate</h1>
          </header>
        </div>
        <div className="estimate--content">
          <p className="estimate--content__text">
            We are a full service Laundry provider headquartered in Asaba, Delta
            State. Machala Laundry is the place for your Washing, Ironing and
            Folding of laundries. We render Modern, fast and friendly services.
            At Machala Laundry we take pride in having the knowledge, skills,
            expert resources and the products required to make your Laundry
            operations excellent.
          </p>
        </div>
      </section>
      <Footer />
    </section>
  );
}

export default Estimate;