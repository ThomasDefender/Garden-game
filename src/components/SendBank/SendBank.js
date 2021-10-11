import React, { memo } from "react";
import SendBackItem from "./SendBankItem";
import styled from "styled-components";

export default memo(function SendBank({
  coinBankVal,
  plants,
  choosePlant,
  setChoosePlant,
  tool,
}) {
  //
  return (
    <Con>
      <Dflex>
        {plants.map((plant) => (
          <SendBackItem
            coinBankVal={coinBankVal}
            key={plant.key}
            plant={plant}
            choosePlant={choosePlant}
            setChoosePlant={() => setChoosePlant(plant)}
            tool={tool}
          />
        ))}
      </Dflex>
    </Con>
  );
});
//
const Con = styled.div`
  position: absolute;
  padding: 12px;
  left: 50px;
  top: -10px;
  width: 80%;
`;

const Dflex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
