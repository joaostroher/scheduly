import styled from 'styled-components';

export const CustomerStyles = styled.div`
  margin: auto;
  margin-top: 20px;
  width: 100%;
  max-width: 280px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    strong {
      font-size: 20px;
      color: #fff;
      margin-bottom: 20px;
    }

    .input-container {
      width: 100%;
      margin-top: 4px;
      margin-bottom: 4px;
      margin-left: 0px;

      * {
        width: 100%;
        text-align: center;
        color: #fff;
        font-size: 14px;
      }

      label {
        font-weight: bold;
        position: relative;
        top: 0px;
      }

      span {
        top: 0px;
      }

      input {
        margin-top: 4px;
        height: 26px;
        border: 0;
        border-bottom: 1px solid #eee;
        border-radius: 4px;
        background: rgba(0, 0, 0, 0.1);
        padding: 0 15px;

        &::placeholder {
          color: #fff;
        }
      }

      input:focus ~ span {
        color: #111;
      }
    }

    button[type='submit'] {
      width: 100%;
      height: 30px;
      border: 0;
      margin-top: 10px;
      margin-bottom: 10px;
      background: #00c4c4;
      border-radius: 2px;
      font-size: 20px;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
      transition: background 0.5s;

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

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
