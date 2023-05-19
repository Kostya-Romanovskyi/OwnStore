import styled from "@emotion/styled";

export const UpcomingMovies = styled.h2`
  font-family: "Outfit", sans-serif;
  font-weight: 400;
  font-size: 1.2rem;

  letter-spacing: -0.014em;
  margin-bottom: 10px;

  color: rgba(231, 231, 231, 0.24);
`;

export const ListWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr;

  margin-bottom: 35px;
`;

export const Item = styled.li`
  display: flex;

  width: 100%;
  height: auto;

  padding: 10px 15px;

  background-color: #1e1b33;
  border-radius: 8px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Poster = styled.img`
  width: 95px;
  height: auto;

  border-radius: 8px;
`;

export const InfoWrapp = styled.div`
  width: 100%;

  margin-left: 10px;
`;
export const Title = styled.h3`
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.17;

  color: #ffffff;
`;
export const Date = styled.p`
  font-size: 0.7rem;
  line-height: 0.75;

  color: #c0c0c0;
`;
export const Vote = styled.p`
  font-size: 0.7rem;
  line-height: 0.75;

  color: #c0c0c0;
`;

export const LikeButton = styled.p`
  font-size: 0.7rem;
  line-height: 0.75;

  color: #c0c0c0;
`;

export const TitleWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
export const StatWrapp = styled.div`
  display: flex;
  justify-content: space-between;
`;
