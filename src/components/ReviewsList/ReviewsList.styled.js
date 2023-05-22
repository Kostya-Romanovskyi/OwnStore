import styled from "@emotion/styled";

export const List = styled.ul``;

export const Item = styled.li`
  margin-bottom: 30px;

  font-size: 12px;
  line-height: 1.17;

  color: #c0c0c0;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Avatar = styled.img`
  width: 80px;

  border-radius: 10px;

  margin-bottom: 15px;
`;

export const Nickname = styled.p`
  font-size: 1.3rem;

  margin-bottom: 10px;
`;

export const Date = styled.p`
  font-size: 0.6rem;

  margin-bottom: 10px;
`;

export const Content = styled.p`
  font-size: 0.9rem;

  @media screen and (max-width: 767px) {
    height: 200px;
  }

  padding: 5px;

  background: #1e1b33;
  border: 1px solid rgba(231, 235, 238, 0.4);
  border-radius: 12px;

  overflow-y: auto;
  overflow-x: hidden;

  @media screen and (min-width: 768px) {
    width: 77%;
  }
`;

export const EmptyReviews = styled.p`
  text-align: center;

  font-weight: 700;
  font-size: 4rem;
  line-height: 0.83;

  letter-spacing: -0.014em;

  background: linear-gradient(89.62deg, #06045b 7.09%, #e01e5a 92.23%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;
