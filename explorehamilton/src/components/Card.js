import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, link }) => {
  return (
    <div tabIndex={0}>
      <div className="card">
        <Link to={link}>
          <div className="box">
            <div className="content">
              <h2>{title}</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Card;
