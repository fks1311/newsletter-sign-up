import styled from "styled-components";
import { useWindowSize } from "../utils/useWindowSize";
import desktop from "assets/images/illustration-sign-up-desktop.svg";
import mobile from "assets/images/illustration-sign-up-mobile.svg";
import check from "assets/images/icon-list.svg";

export const Subscribe = () => {
  const windowSize = useWindowSize();

  return (
    <Layout>
      <Letter>
        <h1>Stay updated!</h1>
        <span>Join 60,000+ product managers receiving monthly updates on:</span>
        <List>
          <p>
            <img src={check} />
            Product discovery and building what matters
          </p>
          <p>
            <img src={check} />
            Measuring to ensure updates are a success
          </p>
          <p>
            <img src={check} />
            And much more!
          </p>
        </List>
      </Letter>
      {windowSize <= 375 ? <Img src={mobile} /> : <Img src={desktop} />}
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ theme: { colors } }) => colors.white};
`;

const Letter = styled.section`
  display: flex;
  flex-direction: column;
  padding: 50px;
  line-height: 4rem;
  h1 {
    font-size: 64px;
    font-weight: 700;
    font-family: Roboto_Bold;
  }
`;
const List = styled.div`
  line-height: 3rem;
  p {
    display: flex;
    gap: 1vw;
    align-items: center;
  }
`;
const Img = styled.img``;
