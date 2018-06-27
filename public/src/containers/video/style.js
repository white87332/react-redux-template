import styled from 'styled-components';

export const SCvideo = styled.div`
    &.c_video
    {
        position: relative;
        top: 0;
        left: 0;

        width: 100%;
        height: 500px;

        background-color: rgba(255,255,255,.5);

         > video
        {
            position: absolute;
            top: 0;
            left: 0;

            width: 100%;
            height: 100%;
        }

         > div.controlBar
        {
            position: absolute;
            bottom: 0;
            left: 0;

            display: flex;
            flex-direction: column;

            box-sizing: border-box;
            width: 100%;
            height: 55px;
            padding: 3px;

            background-color: rgba(0, 0, 0, .5);

             > div.progressContain
            {
                z-index: 1;

                width: 98%;
                height: 6px;
                margin: 0 auto;

                cursor: pointer;

                border-radius: 50px;
                background-color: rgba(255,255,255,.2);

                 > div.progress
                {
                    width: 0;
                    height: 5px;

                    transition: width .5s;

                    border-radius: 50px;
                    background-color: #fc0;
                }
            }

             > div.buttons
            {
                z-index: 1;

                display: flex;
                flex: 1;
                flex-direction: row;

                box-sizing: border-box;
                width: 98%;
                margin: 0 auto;
                padding: 1%;

                 > div.action
                {
                    cursor: pointer;

                    background: transparent;

                    &.play
                    {
                        width: 0;
                        height: 0;

                        transition: .4s border-left-width ease;

                        border-width: 10px 0 10px 14px;
                        border-style: solid solid solid solid;
                        border-color: transparent transparent transparent #fff;
                    }

                    &.pause
                    {
                        transition: .4s border-left-width ease;

                        border-width: 0 0 0 15px;
                        border-style: double;
                        border-color: #fff;
                    }

                    &.end
                    {
                        width: 15px;
                        height: 15px;

                        transition: all .4s;

                        background-color: #fff;
                    }
                }

                 > div.volume
                {
                    margin-left: 3%;

                    svg
                    {
                        font-size: 20px;

                        color: #fff;
                    }
                }
            }
        }
    }
`;
