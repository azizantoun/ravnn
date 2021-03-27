import React from 'react';
import styled from 'styled-components';
import logo from '../../public/images/ravnn-logo.png';
import {Explore} from '@styled-icons/material/Explore'
import {Zap} from '@styled-icons/boxicons-solid/Zap';
import {ChevronDoubleUp} from '@styled-icons/bootstrap/ChevronDoubleUp'
import {Hashtag} from '@styled-icons/fa-solid/Hashtag';
import {AccountCircle} from '@styled-icons/remix-fill/AccountCircle';
import {History} from '@styled-icons/boxicons-regular/History';
import {Settings2} from '@styled-icons/evaicons-solid/Settings2';
import {LogoutCircleR} from '@styled-icons/remix-line/LogoutCircleR';

const NavBar = styled.nav`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    width:235px;
    border-right:1px solid #E6EFFB;
    padding:24px 15px;
    background: linear-gradient(0deg, rgba(2,0,36,0) 0%, rgba(244,247,249,1) 100%);
`;

const NavWrapper = styled.div`

    max-height:100vh;
    overflow:auto;
    padding-bottom:120px;
`;

const Logo = styled.a`
    width:119px;
    height:44px;
    background-image:url(${logo});
    display:block;
    margin:auto auto 30px auto;
    background-size:cover;
    background-position:center center;
`;

const NavTitle = styled.div`
    font-family: 'Abel', sans-serif;
    text-transform:uppercase;
    font-size:16px;
    margin-top:30px;
    &:first-of-type{
        margin-top:0;
    }
`;


const List = styled.ul`
    padding:0;

`

const ListItem = styled.li`
    list-style-type:none;
    font-size:14px;
    margin-top:5px;
    color:#2D2D2D;
    transition:color 200ms ease, background-color 200ms ease;
    cursor:pointer;
    padding:10px 5px;
    border-radius:10px;
    &:hover{
        background:#E6EFFB;
        color:rgba(0,0,0,0.55);
    }
    a{
        display:block;
    }
    svg{
        width:25px;
    }
`
const ListItemLabel = styled.span`
    display:inline-block;
    vertical-align:middle;
`;


const iconsStyle =  `
    color: #92D8B4;
    width:25px;
    height:25px;
    margin-right:10px;
    `;


const ExploreIcon = styled(Explore)`
    ${iconsStyle}
`
const TrendingIcon = styled(Zap)`
   ${iconsStyle}
`

const RecommendationIcon = styled(ChevronDoubleUp)`
 ${iconsStyle}
 `;

const HashtagIcon = styled(Hashtag) `
    ${iconsStyle};
`;

const AccountIcon = styled(AccountCircle)`
    ${iconsStyle}
`

const HistoryIcon = styled(History)`
    ${iconsStyle}
`

const SettingsIcon = styled(Settings2)`
    ${iconsStyle}
`
const LogoutIcon = styled(LogoutCircleR)`
    ${iconsStyle}
`


const Nav = () => (
  <NavBar>
    <Logo></Logo>
    <NavWrapper>
    <NavTitle>Explore</NavTitle>
    <List>
        <ListItem><a href=""><ExploreIcon/> <ListItemLabel>Discover </ListItemLabel> </a> </ListItem>
        <ListItem><a href=""><TrendingIcon/> <ListItemLabel>Trending </ListItemLabel> </a> </ListItem>
        <ListItem><a href=""><RecommendationIcon/> <ListItemLabel>Recommendations </ListItemLabel> </a> </ListItem>
    </List>


    <NavTitle>My Topics</NavTitle>
    <List>
        <ListItem><a href=""><HashtagIcon/> <ListItemLabel>ProductManagement </ListItemLabel> </a> </ListItem>
        <ListItem><a href=""><HashtagIcon/> <ListItemLabel>Politics </ListItemLabel> </a> </ListItem>
        <ListItem><a href=""><HashtagIcon/> <ListItemLabel>Leadership </ListItemLabel> </a> </ListItem>
        <ListItem><a href=""><HashtagIcon/> <ListItemLabel>GrowthHacking </ListItemLabel> </a> </ListItem>
        <ListItem><a href=""><HashtagIcon/> <ListItemLabel>Startups </ListItemLabel> </a> </ListItem>
    </List>

    <NavTitle>Account</NavTitle>
    <List>
        <ListItem><a href=""><AccountIcon/> <ListItemLabel>My account </ListItemLabel> </a> </ListItem>
        <ListItem><a href=""><HistoryIcon/> <ListItemLabel>History </ListItemLabel> </a> </ListItem>
        <ListItem><a href=""><SettingsIcon/> <ListItemLabel>Settings </ListItemLabel> </a> </ListItem>
        <ListItem><a href=""><LogoutIcon/> <ListItemLabel>Logout </ListItemLabel> </a> </ListItem>
    </List>
    </NavWrapper>


  </NavBar>
);

export default Nav;