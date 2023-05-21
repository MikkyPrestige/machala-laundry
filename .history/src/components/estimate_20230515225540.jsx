import React from "react";
import Avatar from "./avatar";
import HandShake from "../assets/images/handshake.png";
import { TbCurrencyNaira } from "react-icons/tb";

const Estimate = ({ onClose }) => {
  return (
    <section className="estimate">
      <header className="estimate--head">
        <h1 className="estimate--head__title">
          Machala Laundry Service price list
        </h1>
        <div className="estimate--head__note">
          <mark className="estimate--head__note--mark">
            Note: Prices are subject to change without prior notice
          </mark>
          <p className="estimate--head__note--text">
            For more information, please contact us on{" "}
            <a
              href="tel:+2347061516180"
              className="estimate--head__note--text__link"
            >
              +2347061516180
            </a>
          </p>
        </div>
      </header>
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
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />
              <span>300</span>
            </td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>200</span>
            </td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">T-Shirt</td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>300</span>
            </td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>150</span>
            </td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">P-Trousers</td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>300</span>
            </td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>200</span>
            </td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Chinos</td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>300</span>
            </td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>150</span>
            </td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Suit</td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>1000</span>
            </td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>600</span>
            </td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Complete Suit</td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>1500</span>
            </td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>700</span>
            </td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Jacket</td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>700</span>
            </td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>300</span>
            </td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Buba & Wrapper</td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>500</span>
            </td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>400</span>
            </td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Skirt & Blouse</td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>500</span>
            </td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>400</span>
            </td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">
              Blouse & Wrapper
            </td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>500</span>
            </td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>400</span>
            </td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Scarf</td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>200</span>
            </td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>100</span>
            </td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Head Gear</td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>400</span>
            </td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>200</span>
            </td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Gown (English)</td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>500</span>
            </td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>200</span>
            </td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Gown (Native)</td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>500</span>
            </td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>300</span>
            </td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Bed Sheet</td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>600</span>
            </td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>300</span>
            </td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Pillow Cover</td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>100</span>
            </td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>100</span>
            </td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Duvet</td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>2000</span>
            </td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>500</span>
            </td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Towel (Big)</td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>700</span>
            </td>
            <td className="estimate--table__body--row__item">
              {/* <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "} */}
              <span>{""}</span>
            </td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Towel (Small)</td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>500</span>
            </td>
            <td className="estimate--table__body--row__item">
              {/* <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "} */}
              <span>{""}</span>
            </td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Curtain</td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>1000</span>
            </td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>400</span>
            </td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Boxers</td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>300</span>
            </td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>100</span>
            </td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Singlet</td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>200</span>
            </td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>100</span>
            </td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Over Coat</td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>600</span>
            </td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>300</span>
            </td>
          </tr>
          <tr className="estimate--table__body--row">
            <td className="estimate--table__body--row__item">Waist Coat</td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>400</span>
            </td>
            <td className="estimate--table__body--row__item">
              <TbCurrencyNaira className="estimate--table__body--row__item--icon" />{" "}
              <span>200</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="estimate--note">
        <div className="estimate--note__avatar">
          <p className="estimate--note__avatar--text">
            Thanks for your patronage
          </p>
          <Avatar
            image={HandShake}
            alt="Hand Shake"
            style={{ width: "15%", height: "15%" }}
          />
        </div>
        <p className="estimate--note__text">We make you feel brand new!!!</p>
      </div>
      <p className="estimate--sign">
        <em>Signed Management.</em>
      </p>
      <button onClick={onClose} className="estimate--btn">
        Close
      </button>
    </section>
  );
};

export default Estimate;
