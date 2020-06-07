import styled from 'styled-components';

export const Container = styled.div`

.divBtnsOptions {
    display: flex;
    flex-direction: column;

    button[type='submit'] {
      border-radius: 2px;
      font-size: 16px;
      width: 250px;
      height: 38px;
      font-weight: bold;
      transition: background 0.5s;
      background: rgb(164,124,63);
      color: #ffffff;
      margin: 50px auto;

      
      &:hover {
        background: rgb(104,64,3);
      }
    }
  }



`;
