import styled from 'styled-components';

export const Input = styled.input`
    border: solid 1px #969696;
    border-radius: 20px;
    height: 68px;
    width: ${(props) => props.width || '50%'};
    margin: 0% 12px;
    cursor: text;
    color: #000000;
    padding: 15px;
    font-size: 20px;

    &::placeholder {
        color: #969696;
        font-size: 20px;
        font-weight: 300;
    }

    &::textarea {
        background-color: #f5f5f5;
    }

    &::-webkit-datetime-edit-day-field {
        padding-left: 15px;
        color: #969696;
        font-size: 20px;
        font-weight: 300;
    }

    &::-webkit-datetime-edit-month-field {
      color: #969696;
      font-size: 20px;
      font-weight: 300;
    }

    &::-webkit-datetime-edit-year-field {
      color: #969696;
      font-size: 20px;
      font-weight: 300;
    }
`