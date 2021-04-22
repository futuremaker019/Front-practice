import React from "react"
import styled from "styled-components"
import palette from "../../styles/palette"

const Container = styled.div`
  width: 568px;
  height: 614px;
  background-color: white;
  z-index: 11;
  
  .modal-close-x-icon {
    cursor:pointer;
    display:block;
    margin:0 0 40px auto;
  }

  .input-wrapper {
    position: relative;
    margin-bottom: 16px;
    input {
      position: relative;
      width: 100%;
      height: 46px;
      padding: 0 44px 0 11px;
      border: 1px solid ${palette.gray_eb};
      border-radius: 4px;
      font-size: 16px;
      outline: none;
      ::placeholder {
        color: ${palette.gray_76};
      }
    }
    svg {
      position: absolute;
      right: 11px;
      top: 16px;
    }
  }
`;

const SignUpModal: React.FC = () => {
  return (
    <Container>
      <CloseXIcon />
    </Container>
  )
};

export default SignUpModal;