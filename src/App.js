import styled from "styled-components";
import { useWindowSize } from "./utils/useWindowSize";
import { Subscribe } from "./components/Subscribe";

export default function App() {
  const width = useWindowSize();

  return (
    <Layout width={width}>
      <Subscribe />
    </Layout>
  );
}

const Layout = styled.div`
  height: 100vh;
  width: ${({ width }) => width}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.charcoal_grey};
`;
