import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 300px;
  text-align: center;
  background: rgba(80, 80, 80, 0.9); /* = background: #505050ff opacity: 0.9*/
  padding: 20px;
  margin: auto;
  position: relative;
  margin-top: 40px;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    * {
      opacity: 1;
    }

    strong {
      font-size: 18px;
      color: #fff;
      margin-bottom: 10px;
    }

    .divInput {
      display: flex;
      align-items: center;
      width: 100%;
      margin: 4px;

      * {
        text-align: center;
        font-size: 14px;
      }

      label {
        font-weight: bold;
        text-align: right;
        position: relative;
        width: 80px;
      }

      input {
        width: 100%;
        height: 26px;
        padding: 0 15px;
        margin-left: 8px;
      }
    }

    button[type='submit'] {
      width: 100%;
      height: 30px;
      margin-top: 10px;
      margin-bottom: 10px;
      border-radius: 2px;
      font-size: 20px;
      font-weight: bold;
      transition: background 0.5s;
      background: #00c4c4;
      color: #fff;

      &:hover {
        background: #009191;
      }
    }

    a {
      font-size: 14px;
      color: #fff;
      cursor: pointer;
      text-decoration: underline;
      opacity: 1;
      display: flex;
      align-items: center;
      margin: 0 auto;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
