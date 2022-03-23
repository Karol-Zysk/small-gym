import React from "react";
import styled from "styled-components";
import PriceCard from "./PriceCard";

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;



const Prices = () => {

  const priceData = [
    {
      price: 45,
      period: "month",
      plan: "Basic",
      package : ["Ussaly adressed for new customers", "Without free personal trainings", "medium price"]
    },
    {
      price: 360,
      period: "year",
      plan: "Advanced",
      package : ["Recomended plan for regular users", "Low price: 30$ monthly", "One free personal training per month"]
    },
    {
      price: 200,
      period: "month",
      plan: "VIP",
      package : ["Recomended for demanding users", "4 free personal trainings per month", "sticker with the word VIP"]
    },
  ];

  return <Container>
  {priceData.map((info) => {
    return <PriceCard price={info.price} period={info.period} plan={info.plan} pack={info.package}/>
  })}


  </Container>;
};

export default Prices;
