import styled from 'styled-components';

export const Container = styled.div`
    > form {
        background-color: #fff;

        height: 530px;
        width: 570px;

        box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, .25);

        padding: 50px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        > h1 {
            font-size: 38px;
        }
    }
`;

export const InputsBlock = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    > label {
        color: #8c8c8c;
    }

    > input {
        border-bottom: 1px solid #8c8c8c;

        padding: 12px 5px;

        font-size: 20px;
        color: #333333;

        &:first-of-type { 
            margin-bottom: 15px;
        }
    }
`;