import styled from 'styled-components';

export const SingScheduleDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  background: rgba(255, 255, 255);
  border-radius: 7px;
  padding: 4px;
  margin: 80px auto 0;

  strong {
    color: rgba(0, 0, 0);
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 25px;
    margin: 15px;
  }

  * {

    label {
      color: rgba(0, 0, 0);
      margin: 0 auto;
      text-align: right;
      font-size: 18px;
    }

    input {
      margin: 0 auto;
      color: rgba(0, 0, 0);
      height: 30px;
      padding: 0 8px;
      text-align: center;
      font-size: 16px;
    }

    select {
      margin: 0 auto;
      width: 200px;
      height: 28px;
      padding: 0 8px;
      font-size: 18px;
    }
  }

  .divSingOptions,
  .divProvider,
  .divService,
  .divClient {
    margin: 4px auto;
    display: flex;
    align-items: center;

    label:first-child {
      width: 60px;
    }
  }

  .divSingOptions {
    width: 90%;
    max-width: 100%;
    margin: 16px auto;
    border-radius: 5px;

    .btnSave {
      background: rgb(164,124,63);
      margin: 0 10px;
      &:hover {
        background: rgb(124,84,23);
      }
    }

    .btnCancel {
      background: rgba(230,76,60);
      margin: 0 10px;
      &:hover {
        background: rgba(190,36,20);
      }
    }

    button[type='submit'] {
      border-radius: 2px;
      font-size: 16px;
      width: 200px;
      height: 38px;
      font-weight: bold;
      transition: background 0.3s;
      color: #ffffff;
    }
  }

  .divDateTime {
    display: flex;
    flex-direction: column;
    align-items: center;

    .divDate,
    .divTime {
      margin 0 auto;
      display: block;
      align-items: center;
    }

    .divDate {
      input {

        width: 300px;
        margin: 0px 10px;
        background: rgba(255,255,255);
        border: 1px solid rgba(0,0,0);
      }

      .calenday {
        visibility: visible;
      }
    }

    .divTime {
      input {
        width: 300px;
        margin: 10px 10px;
        background: rgba(255,255,255);
        border: 1px solid rgba(0,0,0);
      }
    }
  }

  .divProvider,
  .divClient {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      width: 300px;
      margin: 0px 10px;
      background: rgba(255,255,255);
      border: 1px solid rgba(0,0,0);
    }

    svg {
      position: absolute;
      left: 254px;
      width: 20px;
      height: 20px;
      border-radius: 50%;

      &:hover {
        background: rgba(255,255,255);
        color: #fff;
        
      }
    }
  }





`;
