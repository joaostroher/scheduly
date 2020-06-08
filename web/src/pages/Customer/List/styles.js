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

  .divNavDates {
    background: rgba(50, 50, 50, 0.9);
    display: flex;
    margin: auto;
    width: 250px;
    height: 50px;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;

    strong {
      margin-left: 15px;
      margin-right: 15px;
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

export const CustomersDiv = styled.div`
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

export const CustomersLi = styled.li`
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