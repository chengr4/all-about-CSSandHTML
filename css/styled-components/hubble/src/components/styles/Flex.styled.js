import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;

  & > div,
  & > ui {
    flex: 1;
  }
`