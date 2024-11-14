import { forwardRef } from "react";
import styled from "styled-components";
import { useWindowSize } from "utils/useWindowSize";

export const DefaultPage = forwardRef(({ children }, ref) => {
  const width = useWindowSize();

  return <Layout width={width}>{children}</Layout>;
});

const Layout = styled.div`
  height: 100vh;
  width: ${({ width }) => width}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.charcoal_grey};
`;
