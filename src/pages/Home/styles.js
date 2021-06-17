import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, .25);

    height: 280px;
    width: 700px;

    padding: 22px 45px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > button {
        align-self: center;
    }
`;

export const UserCard = styled.div`
    display: flex;
    justify-content: space-between;

    > img {
        background-color: #999999;

        height: 140px;
        width: 140px;
    }
`;

export const UserInfos = styled.div`
    > h1 {
        font-weight: 600;
        margin-bottom: 20px;
    }
    
    > p {
        color: #8c8c8c;
        font-size: 20px;
    }
`;