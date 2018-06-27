import styled from 'styled-components';

export const SCgrid = styled.div`
    &.grid
    {
        display: grid;

        height: 100vh;

        grid-template-rows: 60px auto;
        grid-row-gap: 5px;

         > div.menu
        {
            display: grid;

            grid-template-columns: 200px repeat(4, 1fr) ;
            grid-gap: 2px;

             > .item
            {
                display: flex;
                align-items: center;
                justify-content: center;

                width: 100%;
                height: 100%;

                transition: background-color .3s;

                background-color: #f1f1f1;

                &:hover:not(.logo)
                {
                    background-color: #e7e7e7;
                }
            }
        }

         > div.children
        {
            background-color: #f1f1f1;
        }
    }
`;
