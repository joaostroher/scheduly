import styled from 'styled-components';
import logoImage from '../../assets/logo.png';

export const ClientStyles = styled.div`


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
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 30px
  }
  
  .content form {
    display: flex;
    flex-direction: column;
  }
  
  
  .content form label span {
    font-weight: normal;
    font-size: 12px;
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
    margin-top: 30px;
  }
  
  .content button.btn:hover {
    background: rgb(150,110,50);
  }

  .service {
    position: relative;
    width: 100%;
    height: 90px;
    border-radius: 5px;
    background: rgb(242,242,242);
    border-color: black;
  }
  
  .date {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 20%;
    height: 100%;
    background: rgb(180,180,180);
    border-radius: 5px;
  }

  .date label {
    font-size: 18px;
    text-align: center;
    margin: 3.5px;
    font-weight: bold;
    color: white;
  }

  .status {
    position: absolute;
    width: 150px;
    height: 25px;
    right: 0px;
    bottom: 0px;
    background: green;
    padding: 3px;
    text-align: center;
    border-radius: 5px;
  }

  .status label{
    font-size: 12px;
    font-weight: bold;
    color: white;
  }

  .details{
    position: absolute;
    top: 0px;
    left: 20%;
    height: 100%;
    width: 170px;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 5px;
  }

  .details label {
    font-size: 14px;
    font-weight: bold;
    margin: auto 0 7px;
  }

  .job {
    position: absolute;
    top: 0px;
    right: 0;
    height: 65px;
    width: 150px;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 10px;
  }

  .job label {
    font-size: 14px;
    font-weight: bold;
    margin: auto 0 3px;
  }

`;