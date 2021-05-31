import React from 'react';
import styled from 'styled-components';
import Nav from '../../components/nav/nav';

const MainWrapper = styled.main`
  display:block;
  margin-left:236px;
  min-height:100vh;
`;

const MainInner = styled.div`
    display: flex;
    width: 100%;
`;

const MainContent = styled.div`
  flex: 1;
  min-height:100vh;
  padding:40px;
  max-width: 100%;
`;

const Side = styled.aside`
  width: 366px;
  border-left:1px solid #E6EFFB;
  background-color:rgba(230,239,251,0.2);
`;


const Sticky = styled.div`
  position:sticky;
  top:0;
`;




const Layout = ({ children }) => {
  console.log(children);
  return (
    <>
      <div>
        <Nav></Nav>
        <MainWrapper>
          <MainInner>
            <MainContent>
              {children[0]}
            </MainContent>

            <Side>
              <Sticky></Sticky>
              {children[1]}
            </Side>
          </MainInner>


        </MainWrapper>
      </div>
    </>
  )
}

export default Layout;