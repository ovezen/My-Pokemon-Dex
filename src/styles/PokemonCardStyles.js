import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  width: 150px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    background-color: skyblue;
  }
`;

export const PokemonImage = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 10px;
`;

export const PokemonName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const PokemonId = styled.p`
  font-size: 14px;
  color: #555;
  margin: 5px 0;
`;

export const AddButton = styled.button`
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: darkgreen;
  }
`;
