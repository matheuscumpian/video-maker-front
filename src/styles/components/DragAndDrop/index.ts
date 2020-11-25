import styled from 'styled-components';

interface ContainerProps {
  dragging?: boolean;
}

const CloseButton = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.54);
  border-radius: 1000px;
  cursor: pointer;
  display: flex;
  height: 32px;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 32px;
  z-index: 9998;
`;

const Container = styled.div<ContainerProps>`
  align-items: center;
  background-color: ${props => props.theme.colors.mediumBlack};
  border: 4px ${props => (props.dragging ? props.theme.colors.secondary : props.theme.colors.lightBlack)} dashed;
  border-radius: 4px;
  color: #555555;
  display: flex;
  flex-flow: column nowrap;
  font-size: 24px;
  height: 500px;
  justify-content: center;
  margin-left: 64px;
  padding: 50px;
  position: relative;
  width: 800px;

  img {
    height: 500px;
    object-fit: cover;
    width: 800px;
  }

  .placeholder {
    align-items: center;
    color: #fff;
    display: flex;
    flex-flow: column;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    text-align: center;
    top: 0;
    width: 100%;
    z-index: 9998;

    svg {
      height: auto;
      margin-bottom: 32px;
      width: 180px;
    }
  }
`;

export { CloseButton, Container };
