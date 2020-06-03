import styled from 'styled-components';

export const SingScheduleDiv = styled.div`
  width: 100%;
  max-width: 400px;
  background: rgba(80, 80, 80, 0.9);
  padding: 4px;
  margin-left: 30px;
  margin-top: 30px;

  strong {
    color: #fff;
    font-size: 16px;
    margin: 8px;
  }

  * {
    font-size: 14px;

    label {
      color: #fff;
      margin: 0 8px;
      text-align: right;
    }

    input {
      color: #333;
      height: 22px;
      padding: 0 8px;
      text-align: left;
    }

    select {
      max-width: 200px;
      height: 22px;
      padding: 0 2px;
    }
  }

  .divSingOptions,
  .divProvider,
  .divService,
  .divClient {
    margin: 4px;
    display: flex;
    align-items: center;

    label:first-child {
      width: 60px;
    }
  }

  .divSingOptions {
    width: 100%;
    max-width: 400px;
    margin: 10px 0;

    .btnSave {
      background: #00c4c4;
      &:hover {
        background: #009191;
      }
    }

    .btnCancel {
      background: #ff6458ff;
    }

    button[type='submit'] {
      margin: 0 4px;
      height: 20px;
      padding: 2px;
      border-radius: 2px;
      transition: background 0.5s;
      color: #fff;
    }
  }

  .divDateTime {
    margin: 4px;
    display: flex;

    .divDate,
    .divTime {
      display: flex;
      align-items: center;
    }

    .divDate {
      label:first-child {
        width: 60px;
      }

      input {
        width: 114px;
      }

      .calenday {
        visibility: visible;
      }
    }

    .divTime {
      input {
        width: 70px;
      }
    }
  }

  .divProvider,
  .divClient {
    position: relative;

    input {
      width: 200px;
      padding-right: 22px;
    }

    svg {
      position: absolute;
      left: 254px;
      width: 20px;
      height: 20px;
      border-radius: 50%;

      &:hover {
        background: #505050ff;
        color: #fff;
      }
    }
  }
`;
