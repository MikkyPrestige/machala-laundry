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
            <h1 className="estimate--head__header__title">Machala Laundry Service price list</h1>
          </header>
        </div>
        <table className="estimate--table">

        </table>
      </section>
      <Footer />
    </section>
  );
}

export default Estimate;