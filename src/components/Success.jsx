import styled from "styled-components";
import { DefaultPage } from "./DefaultPage";
import check from "assets/images/icon-list.svg";

export const Success = () => {
  return (
    <DefaultPage>
      <Layout>
        <img src={check} />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <strong>ash@loremcompany.com</strong>. Please open it and click the
          button inside to confirm your subscription.
        </p>
        <Button>Dimiss message</Button>
      </Layout>
    </DefaultPage>
  );
};

const Layout = styled.div`
  height: 25rem;
  max-width: 23rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  padding: 3rem;
  color: ${({ theme: { colors } }) => colors.dark_slate_grey};
  border-radius: 40px;
  background-color: ${({ theme: { colors } }) => colors.white};
  img {
    height: 50px;
  }
  h1 {
    font-size: 56px;
    font-family: Roboto_Bold;
    font-weight: 700;
  }
  p {
    line-height: 1.5rem;
  }
  strong {
    font-weight: 700;
  }
`;
const Button = styled.button`
  height: 3.5rem;
  width: 100%;
  padding: 0.5rem;
  color: ${({ theme: { colors } }) => colors.white};
  border: none;
  border-radius: 10px;
  background-color: ${({ theme: { colors } }) => colors.dark_slate_grey};
  &:hover {
    background: linear-gradient(to right, hsl(4, 100%, 67%) 50%, hsl(25, 100%, 50%));
    box-shadow: 0 5px 20px hsl(4, 100%, 67%);
    cursor: pointer;
  }
`;
