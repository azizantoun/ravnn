import React from 'react';
import styled from 'styled-components';
import sun from '../../public/images/sun.png'

const WelcomeNote = styled.p`
  display:block;
  font-size:24px;
  font-weight:500;
  img,span{
      display:inline-block;
      vertical-align:middle;
  } 
`;
const NameWrapper = styled.span`
    color:#7C8DB5;
`;

const Welcome = (props) => {
    return (
        <div>
            <WelcomeNote>
                <img src={sun} width={40} /> <span>Good Morning!</span>
                {/* <NameWrapper>{props.name}!</NameWrapper> */}
            </WelcomeNote>
        </div>
    )
}

export default Welcome;