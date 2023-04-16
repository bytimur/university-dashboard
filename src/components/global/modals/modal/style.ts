import styled from "styled-components";

const ModalStyle = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
`;

export default ModalStyle;
