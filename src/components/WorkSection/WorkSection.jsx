import React from "react";
import "./WorkSection.css";
import groupPeople from "../../assets/icons/group-people.svg";
import bookmark from "../../assets/icons/bookmark.svg";
import moneySign from "../../assets/icons/moneySign.svg";
import andPercent from "../../assets/icons/andpercent.svg";
import wallet from "../../assets/icons/wallet.svg";
import Card from "../Card/Card";

const data = [
  {
    id: 1,
    title: "Invite your Friends",
    desc: "Share the link tutedude.com with your friends",
    icon: groupPeople,
  },
  {
    id: 2,
    title: "Friend purcheases any course",
    desc: "Using your Referral code in the payments page",
    icon: bookmark,
  },
  {
    id: 3,
    title: "You get ₹ 200 as referal money",
    desc: "On total purchase the friend makes, into your wallet",
    icon: moneySign,
  },
  {
    id: 4,
    title: "Your friend gets ₹ 200 off",
    desc: "On his overall fee on successful purchase using your referal code",
    icon: andPercent,
  },
  {
    id: 5,
    title: "Transfer money from wallet",
    desc: "When the wallet balance reaches ₹ 200 or more, you can withdraw it",
    icon: wallet,
  },
];

function WorkSection() {
  return (
    <section className="work">
      <div className="container">
        <h1>How does it work ?</h1>
        <div className="cards-container">
          {data.map((obj) => (
            <Card key={obj.id} data={obj} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
