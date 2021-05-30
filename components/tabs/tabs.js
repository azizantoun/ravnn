import React from 'react';
import styled from 'styled-components';


const TabsContainer = styled.ul`
    display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
	align-content: stretch;
    padding:0;
    margin:0;

`;
const TabItem = styled.li`
    color:#7C8DB5;
    font-weight:400;
    font-size:18px;
    list-style-type:none;
    margin:8px 18px 18px 0;
    transition: color 200ms ease;
    cursor: pointer;
    &.active,&:hover{
        color:#000;
    }
`;

const Tabs = (props) => {
    return (
        <div>
            <TabsContainer>
                {props.items.map((tab) => {
                    return (
                        <TabItem className={tab.active ? 'active' : null} key={tab.name}>{tab.name}</TabItem>
                    )
                })}

            </TabsContainer>
        </div>
    )
}

export default Tabs;