import { forwardRef } from "react";
import styled from "styled-components";
import { useWindowSize } from "utils/useWindowSize";

export const DefaultPage = forwardRef(({ children }, ref) => {
  const width = useWindowSize();

  return <Layout width={width}>{children}</Layout>;
});

const Layout = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.charcoal_grey};
  @media ${({ theme: { device } }) => device.mobile} {
  }
`;
