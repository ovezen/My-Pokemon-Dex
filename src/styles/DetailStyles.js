import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const BackButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const PokemonImage = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 20px;
`;

export const PokemonName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const PokemonTypes = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
`;

export const TypeBadge = styled.span`
  background-color: #e2e2e2;
  color: #333;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
`;

export const PokemonDescription = styled.p`
  font-size: 16px;
  text-align: center;
  max-width: 500px;
  color: #555;
`;
