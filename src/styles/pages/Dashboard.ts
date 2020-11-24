import styled from 'styled-components';

interface ListCardsProps {
  isEmpty: boolean;
}

const Container = styled.div`
  align-items: flex-start;
  display: flex;
  height: 100vh;
  justify-content: flex-start;
  width: 100vw;
`;

const ListCards = styled.div<ListCardsProps>`
  align-self: center;
  align-items: ${props => (props.isEmpty ? 'center' : 'flex-start')};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 80vh;
  justify-content: ${props => (props.isEmpty ? 'center' : 'flex-start')};
  margin-top: 15vh;
  margin-left: 2vw;
  margin-right: 2vw;
  width: 100vw;
`;

const EmptyList = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: flex-start;
  width: 80vw;

  svg {
    max-width: 40vw;
  }
`;

export { Container, EmptyList, ListCards };
