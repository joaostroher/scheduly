import styled from 'styled-components';

export const SchedulesDiv = styled.div`
  display: flex;
  flex-direction: column;

  .divBtnsOptions {
    padding: 10px;

    button[type='submit'] {
      padding: 4px;
      border-radius: 2px;
      font-size: 14px;
      font-weight: bold;
      transition: background 0.5s;
      background: #edededff;
      color: #333;

      &:hover {
        background: #dededeff;
      }
    }
  }

  .divNavDates {
    background: rgba(80, 80, 80, 0.9);
    display: flex;
    margin: auto;
    width: 200px;
    height: 30px;
    margin-top: 14px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    * {
      cursor: pointer;
    }

    strong {
      margin-left: 10px;
      margin-right: 10px;
      font-size: 20px;
      text-align: center;
      color: #fff;
    }

    svg {
      height: 30px;
      width: 30px;
      transition: background 0.5s;
      border-radius: 50%;
      background: transparent;
      color: #fff;

      &:hover {
        background: #fff;
        color: #333;
      }
    }
  }

  .divSelList {
    display: flex;
    position: relative;
    width: 100%;
  }
`;

export const ListTimesUl = styled.ul`
  margin-left: 10px;
  margin-bottom: 20px;

  li {
    color: #fff;
    position: relative;

    .btnTimeOclock {
      cursor: pointer;
      background: transparent;
      color: #fff;
      margin: 2px 0;
    }

    .btnPoint {
      display: block;
      width: 10px;
      height: 10px;
      background: #fff;
      border-radius: 50%;
      margin: 0 auto;
      cursor: pointer;

      &:hover {
        width: 18px;
        height: 18px;
      }
    }

    .spanMouseOnTime {
      position: absolute;
      top: 0;
      left: calc(50% + 14px);
    }
  }
`;

export const ScheduledsDiv = styled.div`
  width: 100%;
  margin-left: 30px;
  padding: 10px;
  position: relative;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 300px));
    gap: 15px;
  }
`;

export const ScheduledsLi = styled.li`
  display: flex;
  padding: 10px;
  border-radius: 4px;
  background: rgba(80, 80, 80, 0.9);
  opacity: ${props => (props.passed ? 0.8 : 1)};
  cursor: pointer;

  strong {
    color: #fff;
    font-size: 16px;
  }

  .divShowService {
    margin: 0 8px;

    span {
      display: block;
      color: #edededff;
    }
  }

  .spanOptions {
    margin-left: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    .svgOptions {
      color: #fff;
      width: 20px;
      height: 20px;
      border-radius: 50%;

      &:hover {
        background: #fff;
        color: #111;
      }
    }

    .svgAlertComments {
      width: 16px;
      height: 16px;
      margin-top: 4px;
      cursor: pointer;

      /* background-color: black; */
      -webkit-animation-name: commentAlert;
      -webkit-animation-iteration-count: infinite;
      -webkit-animation-duration: 3s;

      @keyframes commentAlert {
        0% {
          color: #fff;
        }
        50% {
          color: #ff6458ff;
        }
        100% {
          color: #fff;
        }
      }
    }
  }
`;

export const OptionsDiv = styled.div`
  position: absolute;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  width: 100px;
  left: 10px;
  top: 10px;

  button {
    color: #111;
    padding: 2px 4px;
    align-items: center;
    display: flex;
    background: #fff;
    cursor: pointer;
    width: 100%;

    :nth-child(odd) {
      background: #edededff;
    }

    &:hover {
      background: #333;
      color: #fff;
    }

    svg {
      margin-right: 6px;
      width: 18px;
      height: 18px;
    }
  }
`;
