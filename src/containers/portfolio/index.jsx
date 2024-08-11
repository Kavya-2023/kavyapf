import React from 'react'
import {FaProjectDiagram} from 'react-icons/fa';
import PageHeader from '../../components/pageheader';
import { Link } from 'react-router-dom';
import './index.scss';
import Image1 from '../../Images/eazycart.jpg';
import Image2 from '../../Images/emoji_game.jpg';
import Image3 from '../../Images/localtreausres.jpg';
import Image4 from '../../Images/nanoquest.jpg';
import Image5 from '../../Images/qrcode.jpg';
import Image6 from '../../Images/stackoverfloe.jpg';
import Image7 from '../../Images/todolist.jpeg';
import Image8 from '../../Images/resume.jpeg';
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Emoji Game",
    image: Image2,
    link: "https://kavya-2023.github.io/emoji_game/",
  },
  {
    id: 2,
    name: "QR Code Generator",
    image: Image5,

    link: " https://kavya-2023.github.io/QrCodeGenerater/",
  },
  {
    id: 3,
    name: "Nanoquest",
    image: Image4,
    link: "https://www.nanoquesttech.in/",
  },
  {
    id: 2,
    name: "Eazy Cart",
    image: Image1,
    link: "https://github.com/Kavya-2023/Eazy_cart.git",
  },
  {
    id: 2,
    name: "Todo List",
    image: Image7,
    link: "https://kavya-2023.github.io/todo_list/",
  },
  {
    id: 2,
    name: "My Resume",
    image: Image8,
    link: "https://kavya-2023.github.io/my_resume/",
  },
  
  {
    id: 3,
    name: "Stack Over Flow Clone",
    link: "https://stellular-shortbread-fdde50.netlify.app/",
    image: Image6,
  },
  {
    id: 2,
    name: "Emoji Game",
    image: Image2,
    link: "https://kavya-2023.github.io/emoji_game/",
  },
  {
    id: 2,
    name: "QR Code Generator",
    image: Image5,

    link: " https://kavya-2023.github.io/QrCodeGenerater/",
  },
  {
    id: 3,
    name: "Nanoquest",
    image: Image4,
    link: "https://www.nanoquesttech.in/",
  },
  {
    id: 3,
    name: "Local Tresures",
    image: Image3,
    link: "https://66b847d5059d03e7e468f508--localtrasures.netlify.app/",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Frontend",
  },
  {
    filterId: 3,
    label: "MERN",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeader
        headerText="My Projects"
        icon={<FaProjectDiagram size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                   <Link to={item.link}>
                   <button>Visit</button>
                   </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
