import React, { useState } from "react";
import Numeral from "react-numeral";
import "../styles/packages.css";
function Packages() {
  const [balance, setBalance] = useState(0);
  const packages = [
    {
      price: 9.99,
      tracks: 50,
    },
    {
      price: 29.99,
      tracks: 200,
    },
    {
      price: 49.99,
      tracks: 500,
    },
    {
      price: 79.99,
      tracks: 1000,
    },
    {
      price: 109.99,
      tracks: 3000,
    },
    {
      price: 159.99,
      tracks: 5000,
    },
    {
      price: 199.99,
      tracks: 10000,
    },
  ];
  return (
    <div className="packages__main">
      <div className="packages_top_info">
        <h1>Make a Payment</h1>
        <h2>
          Balance:{" "}
          {balance ? <Numeral value={balance} format={"$0,0.00"} /> : "$0"}
        </h2>
        <div className="policycheck">
          <input type="checkbox" name="policy" id="policy" />
          <label htmlFor="policy">
            Accept
            <a href="https://getmoretracks.com/html/Refund_policy.txt">
              Refund policy
            </a>
          </label>
        </div>
        <div className="add__balance">
          <input type="number" />
          <button>Top up the balance</button>
        </div>
        <ul>
          <h3>Note</h3>
          <li>
            We don't keep your payment data. All payments secured by PayPal and
            Stripe. We don't accept Amex cards.
          </li>
          <li>After you made a payment you will have an access for 1 month</li>
          <li>
            If you used your package of tracks you can buy a new one and a get 1
            month to use it
          </li>
          <li>
            You can pay by PayPal. But if you don't have it, you can send a
            payment to Payoneer as well. Write here to get details
          </li>
        </ul>
        <img src="/imgs/stripe.png"></img>
      </div>
      <div className="all_packages">
        {packages.map((pack, index) => (
          <div className="package_card">
            <h1>
              <Numeral value={pack.price} format={"$0,0.00"} />
              <span>/month</span>
            </h1>
            <h3>1 month access</h3>
            <h3>{pack.tracks} tracks</h3>
            <div className="buttons">
              <button>
                <img src="/imgs/paypal.png" />
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                  />
                </svg>
                Credit or debit card
              </button>
              <button>PAY FROM BALANCE</button>
            </div>
            <div className="policycheck">
              <input type="checkbox" name="policy" id="policy" />
              <label htmlFor="policy">
                Accept
                <a href="https://getmoretracks.com/html/Refund_policy.txt">
                  Refund policy
                </a>
              </label>
            </div>
          </div>
        ))}
        <div className="package__request">
          <h3>
            <a>
              Need a bigger plan? <br /> Please contact us
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Packages;
