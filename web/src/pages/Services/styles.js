import styled from 'styled-components';

export const ServicesDiv = styled.div`
  width: 100%;
  max-width: 300px;
  text-align: center;
  background: rgba(80, 80, 80, 0.9); /* = background: #505050ff opacity: 0.9*/
  padding: 20px;
  margin: auto;
  position: relative;
  margin-top: 40px;

  strong {
    color: #fff;
    font-size: 18px;
  }

  .addService {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 8px;

    input {
      text-align: center;
      font-size: 14px;
      width: 100%;
      height: 26px;
      padding: 0 15px;
      margin-right: 8px;
    }

    svg {
      width: 28px;
      height: 28px;
      color: #fff;
      cursor: pointer;
    }
  }

  ul {
    margin: 14px 0;
    max-height: 200px;
    overflow: auto;
  }

  .divActive {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 4px;
    margin-bottom: 4px;
    margin-left: 0px;

    label {
      text-align: left;
      margin-left: 6px;
    }

    input {
      margin-left: 70px;
    }
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
`;

export const ServiceSelectLi = styled.li`
  /* text-align: left; */
  padding-left: 8px;
  display: flex;
  align-items: center;
  height: 24px;
  font-weight: 430;
  color: ${props => (props.selected ? '#fff' : '#111')};
  background: ${props => (props.selected ? '#333' : '#e2e2e2ff')};
  cursor: pointer;

  :nth-child(odd) {
    background: ${props => (props.selected ? '#333' : '#f9f9f9')};
  }

  svg {
    width: 20px;
    height: 20px;
    color: #ff6458ff;
    margin-left: auto;
    margin-right: 8px;
    cursor: pointer;
  }
`;
