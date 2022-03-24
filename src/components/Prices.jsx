import React from "react";
import styled from "styled-components";
import PriceCard from "./PriceCard";

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const Prices = () => {
  const priceData = [
    {
      price: 45,
      period: "Month",
      plan: "Basic",
      package: [
        "Adressed for new customers",
        "Without free personal trainings",
        "Medium price",
      ],
    },
    {
      price: 360,
      period: "Year",
      plan: "Advanced",
      package: [
        "Recomended for regular users",
        "Low price: 30$ monthly",
        "One Free personal training",
      ],
    },
    {
      price: 200,
      period: "month",
      plan: "VIP",
      package: [
        "Recomended for demanding users",
        "4 free personal trainings per month",
        'Sticker with the word "VIP"',
      ],
    },
  ];

  return (
    <Container>
      {priceData.map((info) => {
        return (
          <PriceCard
            price={info.price}
            period={info.period}
            plan={info.plan}
            pack={info.package}
          />
        );
      })}
    </Container>
  );
};

export default Prices;
