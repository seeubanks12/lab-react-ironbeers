import React from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Col, Row } from "antd";

const Beers = () => {
  const [beers, setBeers] = React.useState([]);

  React.useEffect(() => {
    // <== ADD THE EFFECT
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      console.log("response.data", response.data);
      setBeers(response.data);
    });
  }, []); // <- [] means: Run the effect only once, after initial render

  return (
    <div>
      <NavBar />

      <h3>List of Beers</h3>

      {beers.map((beer) => (
        <div className="beers-list">
        <Link
                to={`/beers/${beer._id}`}
                style={{ textDecoration: "none" }}
              >
                <Row style={{ padding: 24 }}>
                  <Col span={8}>
                    <h2 style={{ color: "black" }}>{beer.name}</h2>
                    <img
                      src={beer.image_url}
                      alt="flag"
                      style={{ height: 120, paddingTop: 8 }}
                    />
                  </Col>
                  <Col span={8} style={{ lineHeight: 2, paddingTop: 24 }}>
                    <span
                      style={{ fontWeight: 700, color: "grey", fontSize: 24 }}
                    >
                      {beer.tagline}
                    </span>
                    <br />
                    <span style={{ fontSize: 20, color: "black" }}>
                      <b>Created by:</b>
                      {beer.contributed_by}
                    </span>
                    <hr />
                  </Col>
                </Row>
              </Link>
            </div>
      ))}
    </div>
  );
};

export default Beers;
