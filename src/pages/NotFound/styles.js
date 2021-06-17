import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, .25);

    height: 280px;
    width: 700px;

    padding: 22px 45px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    > a {
        background-color: #CDDC39;
        box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, .3);
        
        font-size: 20px;
        font-weight: 600;
        color: #333333;
        text-decoration: none;
        text-align: center;

        padding: 18px 50px;

        transition: filter .3s;

        &:hover {
            filter: brightness(1.08);
        }
    }
`;