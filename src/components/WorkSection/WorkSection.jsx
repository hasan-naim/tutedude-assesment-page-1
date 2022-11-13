import React from "react";
import "./WorkSection.css";
import groupPeople from "../../assets/icons/group-people.svg";

function WorkSection() {
  return (
    <section className="work">
      <div className="container">
        <h1>How does it work ?</h1>
        <div className="cards-container">
          <div className="card flex">
            <div className="card-img">
              <img src={groupPeople} alt="" />
            </div>
            <div className="card-desc">
              <h4>Invite your Friends</h4>
              <p>Share the link tutedude.com with your friends</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
