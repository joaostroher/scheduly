import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  background: rgba(164, 164, 164, 0.9); /* opacity: 0.9*/
  width: 100%;
  height: 34px;
  display: flex;
  text-align: center;
  top: 0;
  left: 0;

  .link {
    display: block;
    margin: 6px;
    padding: 0 4px;
    background: #fff;
    color: #111;
    text-align: center;
    cursor: pointer;
  }
`;
