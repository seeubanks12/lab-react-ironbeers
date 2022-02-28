import { useParams } from "react-router-dom";
import { Row, Col, Space } from "antd";
import NavBar from "../components/NavBar";
import React from "react";
import axios from "axios";

const BeerDetails = (props) => {
  //console.log(props)
  const [beers, setBeers] = React.useState([]);

  // get the beerId from the useParams()
  const { beerId } = useParams();
  //console.log('beerId -->', beerId);

  React.useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/" + beerId)
      .then((response) => {
        //console.log("response.data", response.data);
        setBeers(response.data);
      });
  }, [beerId]);

  return (
    <div>
      <NavBar />
      <h3>Details of the Beer</h3>
      
      <Row style={{ margin: 24 }}>
        <Row>
          <img
            src={beers.image_url}
            alt="flag"
            style={{
              height: 200,
              padding: 12,
              marginLeft: "30%",
            }}
          />
        </Row>
        <h2 style={{ color: "black", padding: 50 }}>{beers.name}</h2>
        <h6 style={{ fontWeight: 700, color: "grey", fontSize: 24 }}>
          {beers.tagline}
        </h6>
        
        <p style={{ color: "black" }}>
          Attenuation Level: <b>{beers.attenuation_level}</b>
        </p>
        <p style={{ fontSize: "1.5rem" }}>{beers.description}</p>
        <p style={{ fontWeight: 700, color: "grey", fontSize: 10 }}>
          First Brewed: {beers.first_brewed}
        </p>
        <span>{beers.contributed_by}</span>
      </Row>
    </div>
  );
};

export default BeerDetails;
