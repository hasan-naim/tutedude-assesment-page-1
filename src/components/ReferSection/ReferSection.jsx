import React from "react";
import ReferCard from "../ReferCard/ReferCard";
import "./ReferSection.css";
const data = [
  {
    id: 1,
    title: "Refferal Earning",
    price: "₹ 2,500",
  },
  {
    id: 2,
    title: "Total Referrals",
    price: "7",
  },
  {
    id: 3,
    title: "Wallet Balance",
    price: "₹ 500",
  },
];
function ReferSection() {
  return (
    <section className="refer">
      <div className="container">
        <div className="grid">
          <div className="refer-card-container">
            {data.map((obj) => (
              <ReferCard key={obj.id} data={obj} />
            ))}
            <button>Withdraw Balance</button>
          </div>
          <div className="referral-code">
            <h1>Your Referral Code</h1>
            <div className="gradient-div">
              <span>E</span>
              <span>D</span>
              <span>C</span>
              <span>H</span>
              <span>5</span>
              <span>4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReferSection;
