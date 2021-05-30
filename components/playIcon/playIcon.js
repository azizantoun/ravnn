import React from 'react';
import styled from 'styled-components';

const PlayFrame = styled.div`
    width:40px;
    height:40px;
    background:#FFF;
    border-radius:10px;
    position:absolute;
    bottom:5px;
    right:5px;
    z-index:1;
    border:1px solid #E6EFFB;
`;
const StyledPlayButton = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(2.5);
    width: 22px;
    height: 22px;
  }
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 0;
    height: 10px;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 6px solid;
    top: 6px;
    left: 9px;
  }
`;
const PlayIcon = (props) => {
    return (
        <div>
            <PlayFrame>
                <StyledPlayButton />
            </PlayFrame>
        </div>
    )
}


export default PlayIcon;