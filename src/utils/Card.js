import styled from "styled-components";

export default styled.article`
  position: relative;
  margin: 3rem auto;
  width: 85vw;
  max-width: 1200px;
  min-width: 320px;
  min-height: 80vh;
  border-radius: 5px;
  background-color: rgba(27, 31, 34, 0.85);
  padding: 4.5rem 2.5rem 1.5rem;

  h1 {
    width: max-content;
    font-size: 2rem;
    font-weight: 300;
    line-height: 1.4;
    letter-spacing: 0.7rem;
    border-bottom: 1px solid #fff;
  }

  p {
    margin: 0 0 2rem;
  }
`;
