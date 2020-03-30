import styled from 'styled-components';
import logoImage from '../../assets/logo.png';

export const BarberStyles = styled.div`


  body, input, button{
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 14px;
  }

  .logo {
      background: black url(${logoImage}) no-repeat;
      background-size: cover;
      margin: 0 auto 20px;
      height: 140px;
      width: 100%;
      background-color: white;
  }

  .register {
      padding: 10px 0;
      height: 30px;
  }

  .register span {
    font-size: 14px;
    color: #444444;
    font-weight: bold; 
  }

  .register span:hover {
    color: rgb(150,110,50);
  }

  
  .container {
    margin: 80px auto 0;
    max-width: 450px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

.content {
    width: 100%;
    background: #ffffff;
    margin-top: 50px;
    border-radius: 4px;
    padding: 30px;
  }
  
  .content > p {
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 30px
  }
  
  .content form {
    display: flex;
    flex-direction: column;
  }
  
  .content form label {
    font-size: 14px;
    color: #444444;
    font-weight: bold;
    margin-bottom: 8px;
  }
  
  .content form label span {
    font-weight: normal;
    font-size: 12px;
  }
  
  .content form input {
    margin-bottom: 20px;
    border: 1px solid #dddddd;
    border-radius: 2px;
    height: 45px;
    padding: 0 15px;
    font-size: 16px;
  }
  
  .content button.btn {
    border: 0;
    border-radius: 2px;
    width: 100%;
    height: 42px;
    padding: 0 20px;
    font-size: 16px;
    font-weight: bold;
    background: rgb(164,124,63);
    color: #ffffff;
    cursor: pointer;
  }
  
  .content button.btn:hover {
    background: rgb(150,110,50);
  }


`;