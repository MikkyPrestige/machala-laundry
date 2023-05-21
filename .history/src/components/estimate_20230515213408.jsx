import React from "react";

const Estimate = ({ onClose }) => {
  return (
    <section className="estimate">
      <div className="estimate--head">
        <header className="estimate--head__header">
          <h1 className="estimate--head__header__title">
            Machala Laundry Service price list
          </h1>
        </header>
        <div className="estimate--head__note">
          <mark className="estimate--head__note--mark">
            Note: Prices are subject to change without prior notice
          </mark>
          <p className="estimate--head__note--link">
            For more information, please contact us on{" "}
            <a href="tel:+2347030000000">+2347030000000</a>
          </p>
        </div>
      </div>
      <table className="estimate--table">
        <thead className="estimate--table__head">
          <tr className="estimate--table__head--row">
            <th className="estimate--table__head--row__item">Item</th>
            <th className="estimate--table__head--row__item">Laundry</th>
            <th className="estimate--table__head--row__item">Ironing Only</th>
          </tr>
        </thead>
        <tbody className="estimate--table__body">
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Shirt</td>
            <td className="estimate--table__body--row__item">N300</td>
            <td className="estimate--table__body--row__item">N200</td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">T-Shirt</td>
            <td className="estimate--table__body--row__item">N300</td>
            <td className="estimate--table__body--row__item">150</td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">P-Trousers</td>
            <td className="estimate--table__body--row__item">N300</td>
            <td className="estimate--table__body--row__item">N200</td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Chinos</td>
            <td className="estimate--table__body--row__item">N300</td>
            <td className="estimate--table__body--row__item">N150</td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Suit</td>
            <td className="estimate--table__body--row__item">N1000</td>
            <td className="estimate--table__body--row__item">N600</td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Complete Suit</td>
            <td className="estimate--table__body--row__item">N1500</td>
            <td className="estimate--table__body--row__item">N700</td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Jacket</td>
            <td className="estimate--table__body--row__item">N700</td>
            <td className="estimate--table__body--row__item">N300</td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Buba & Wrapper</td>
            <td className="estimate--table__body--row__item">N500</td>
            <td className="estimate--table__body--row__item">N400</td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Skirt & Blouse</td>
            <td className="estimate--table__body--row__item">N500</td>
            <td className="estimate--table__body--row__item">N400</td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">
              Blouse & Wrapper
            </td>
            <td className="estimate--table__body--row__item">N500</td>
            <td className="estimate--table__body--row__item">N400</td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Scarf</td>
            <td className="estimate--table__body--row__item">N200</td>
            <td className="estimate--table__body--row__item">N100</td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Head Gear</td>
            <td className="estimate--table__body--row__item">N400</td>
            <td className="estimate--table__body--row__item">N200</td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Gown (English)</td>
            <td className="estimate--table__body--row__item">N500</td>
            <td className="estimate--table__body--row__item">N200</td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Gown (Native)</td>
            <td className="estimate--table__body--row__item">N500</td>
            <td className="estimate--table__body--row__item">N300</td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Bed Sheet</td>
            <td className="estimate--table__body--row__item">N600</td>
            <td className="estimate--table__body--row__item">N300</td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Pillow Cover</td>
            <td className="estimate--table__body--row__item">N100</td>
            <td className="estimate--table__body--row__item">N100</td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Duvet</td>
            <td className="estimate--table__body--row__item">N2000</td>
            <td className="estimate--table__body--row__item">N500</td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Towel (Big)</td>
            <td className="estimate--table__body--row__item">N700</td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Towel (Small)</td>
            <td className="estimate--table__body--row__item">N500</td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Curtain</td>
            <td className="estimate--table__body--row__item">N1000</td>
            <td className="estimate--table__body--row__item">N400</td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Boxers</td>
            <td className="estimate--table__body--row__item">N300</td>
            <td className="estimate--table__body--row__item">N100</td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Singlet</td>
            <td className="estimate--table__body--row__item">N200</td>
            <td className="estimate--table__body--row__item">N100</td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Over Coat</td>
            <td className="estimate--table__body--row__item">N600</td>
            <td className="estimate--table__body--row__item">N300</td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Waist Coat</td>
            <td className="estimate--table__body--row__item">N400</td>
            <td className="estimate--table__body--row__item">N200</td>
          </tr>
        </tbody>
      </table>
      <div className="estimate--note">
        <p className="estimate--note__text">Thanks for your patronage</p>
        <p className="estimate--note__text">We make you feel brand new</p>
      </div>
      <p className="estimate--sign">
        <em>
          Signed <span>Management</span>
        </em>
      </p>
      <button onClick={onClose} className="estimate--btn">
        Close
      </button>
    </section>
  );
};

export default Estimate;
