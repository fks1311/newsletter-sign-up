import styled from "styled-components";
import { useWindowSize } from "../utils/useWindowSize";
import desktop from "assets/images/illustration-sign-up-desktop.svg";
import mobile from "assets/images/illustration-sign-up-mobile.svg";
import check from "assets/images/icon-list.svg";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export const Subscribe = () => {
  const windowSize = useWindowSize();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState(false);

  useEffect(() => {}, [error]);

  const onValid = () => {
    setError(false);
  };
  const onInvalid = (data) => {
    data.email?.message && setError(true);
  };

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
        <FormContainer onSubmit={handleSubmit(onValid, onInvalid)}>
          <div>
            <span>Email address</span>
            <span className="error">{errors.email?.message}</span>
          </div>
          <Input
            {...register("email", {
              pattern: {
                value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
                message: "Valid email required",
              },
            })}
            $error={error}
            onKeyDown={onValid}
            placeholder="email@company.com"
          />
          <SumitBtn>Subscribe to monthly newsletter</SumitBtn>
        </FormContainer>
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
  max-width: 25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 50px;
  h1 {
    font-family: Roboto_Bold;
    font-size: 56px;
    font-weight: 700;
    color: ${({ theme: { colors } }) => colors.dark_slate_grey};
  }
  span {
    line-height: 1.3rem;
  }
`;
const List = styled.div`
  width: 100%;
  line-height: 3rem;
  p {
    display: flex;
    gap: 1vw;
    align-items: center;
  }
`;
const FormContainer = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  div {
    height: 40px;
    display: flex;
    align-items: flex-end;
    font-weight: 700;

    span {
      width: 100%;
    }

    .error {
      color: ${({ theme: { colors } }) => colors.tomato};
      text-align: right;
    }
  }
`;
const Input = styled.input`
  height: 35px;
  padding: 10px;
  margin-bottom: 1rem;
  outline: none;
  color: ${({ $error, theme: { colors } }) => ($error ? colors.tomato : `black`)};
  border: ${({ $error, theme: { colors } }) => `1px solid ${$error ? colors.tomato : colors.grey}`};
  border-radius: 5px;
  background-color: ${({ $error }) => $error && "#FFE7E6"};
  cursor: pointer;
`;
const SumitBtn = styled.button`
  height: 3.5rem;
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

const Img = styled.img``;
