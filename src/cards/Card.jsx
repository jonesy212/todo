import React from "react";
const data = {
  image:
    "https://i.pinimg.com/originals/57/7e/41/577e41cc9210ed46a578fce923a5f51c.jpg",
  cardTitle: "Harry Mack",
  cardDescription:
    "Multi-talented artist and rapper Harry Mack is best known for his unique, jaw-dropping visual freestyle rapping. He first came to fame when his Venice Beach Freestyle went viral, which propelled him to opportunities alongside the likes of Kendrick Lamar, Joey Bada$$, Ellen DeGeneres, Complex Music and RedBull Music.",
  button: {
    url: "https://www.harrymackofficial.com/",
    label: "Visit Website",
  },
};
class Card extends React.Component {
  render() {
    return (
      <div className="container">
        <div
          style={{
            width: "18rem",
            border: "1px solid rgba(0,0,0,0.125)",
            margin: "1rem",
            padding: "1rem",
          }}
          className="card-container"
        >
          <div className="card-contents">
            <img
              alt="card"
              style={{ width: "100%", display: "block" }}
              src={data.image}
            />

            <div className="card-title">{data.cardTitle}</div>
            <div className="description">{data.cardDescription}</div>
          </div>
          <div className="button-container">
            <button
              style={{ background: " transparent", border: " none" }}
              label={data.button.label}
            >
              <a className="website-link" href={data.button.url}>
                {data.button.label}
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
