import React from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const Services = () => {
  const servicesList = [
    {
      icon: <FaCocktail />,
      title: "Free Cocktails",
      info:
        "Lorem ipsum dolor sit amet consecteur adispicing elit. Mangi, corporis!"
    },
    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      info:
        "Lorem ipsum dolor sit amet consecteur adispicing elit. Mangi, corporis!"
    },
    {
      icon: <FaShuttleVan />,
      title: "Free Shuttle",
      info:
        "Lorem ipsum dolor sit amet consecteur adispicing elit. Mangi, corporis!"
    },
    {
      icon: <FaBeer />,
      title: "Strongest Beer",
      info:
        "Lorem ipsum dolor sit amet consecteur adispicing elit. Mangi, corporis!"
    }
  ];
  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {servicesList.map((item, i) => {
          return (
            <article key={i} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
