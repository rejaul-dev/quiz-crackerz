import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ topic }) => {
  const { id, name, logo, total } = topic;

  return (
    <section>
      <div className="max-w-xs rounded-lg  shadow-md bg-secondary">
        <img
          src={logo}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-70 bg-primary"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
            <p className="dark:text-gray-100">Total Quiz:{total}</p>
          </div>
          <Link to={`/cards/${id}`}>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-success"
            >
              Start Practice
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cards;
