import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.5); /* opacity: 0.9*/
  width: 100%;
  height: 60px;
  display: flex;
  text-align: center;
  top: 0;
  left: 0;

  .link {
    display: block;
    margin: 20px;
    padding: 0 4px;
    //background: #fff;
    color: rgba(255,255,255);
    //color: #111;
    font-size: 18px;
    font-weight: bold;
    font-family: arial, sans-serif;
    transition: color 0.3s;
    text-align: center;
    cursor: pointer;

    &:hover {
      color: rgba(150,150,150);
    }
  }
  
`;
