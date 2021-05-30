import React from 'react';
import styled from 'styled-components';
import { QuoteLeft } from '@styled-icons/boxicons-solid/QuoteLeft';
import Card from '../card/card';

const ContentSection = styled.section`
    display:block;
    background:#FFF;
    border-radius:10px;
    border:1px solid #E6EFFB;
    padding:25px;
    margin-top:30px;
    h2{
        line-height:35px;
        font-size:20px;
        font-weight:normal;
        margin-top:60px;
        position:relative;
    }
    p{
        text-align:justify;
        color:rgba(51,51,51,0.5);
    }
`;

const iconsStyle = `
    color: rgba(230,239,251,1);
    opacity:0.8;
    width:90px;
    left:-15px;
    top:-40px;
    position:absolute;
    z-index:-1;
`;


const QuoteOpen = styled(QuoteLeft)`
    ${iconsStyle} 
`;


const SectionHeader = styled.div`
`;

const SectionTitle = styled.h3`
    font-family:"Abel";
    font-size:22px;
    color:#2D2D2D;
    padding:0;
    margin:0 0 12.5px 0;
    font-weight:lighter;
`;

const SectionContent = styled.div`
    max-width:100%;
    display:grid;
    grid-template-rows:repeat(2, 310px);
    grid-template-columns: repeat(5, 1fr);
    column-gap: 17px;
`;


const Section = (props) => {
    return (

        <>
            <ContentSection>
                <SectionHeader>
                    <SectionTitle>
                        Audio Books
                    </SectionTitle>
                </SectionHeader>
                <SectionContent>
                    {props.books ? props.books.map((b) => {
                        console.log(b);
                        return (<Card item={b} key={b.fields.slug} ></Card>)
                    })
                        : null}
                </SectionContent>

            </ContentSection>
        </>

    )
}

export default Section;