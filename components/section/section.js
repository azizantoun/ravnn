import React from 'react';
import styled from 'styled-components';
import Thumb from '../../public/images/Thumb.png';
import {QuoteLeft} from '@styled-icons/boxicons-solid/QuoteLeft';
import {QuoteRight} from '@styled-icons/boxicons-solid/QuoteRight';
import {getImage,getContenType} from '../../utils/getData'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const ContentSection = styled.section`
    display:block;
    background:#FFF;
    border-radius:10px;
    border:1px solid #E6EFFB;
    padding:30px 25px;
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

const iconsStyle =  `
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


const SectionHeader = styled.div `

`;

const SectionTitle = styled.h3 `
    font-family:"Abel";
    font-size:18px;
    color:#2D2D2D;
    padding:0;
    margin:0;
`;

const SectionContent = styled.div `
    margin-top:10px;
    display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
	align-content: stretch;
`;

const Card = styled.div`
    width:210px;
    border:1px solid #E6EFFB;
    border-radius:10px;
    padding:14px;
    margin:5px 15px 5px 0;
`;

const CardCover = styled.div`
    width:180px;
    height:200px;
    display:block;
    border-radius:10px;
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center center;
    border:1px solid #E6EFFB;
`;

const CardTitle = styled.div`
   font-family:"Abel";
    font-size:18px;
    color:#2D2D2D;
    margin-top:10px;
`;
const CardSubtitle = styled.div`
    font-size:15px;
    color:#7C8DB5;
    margin-top:5px;
`;

const Section = (props)=>{
        return (

            <>  
                    <ContentSection>
                           <SectionHeader>
                               <SectionTitle>
                                    Audio Books for you
                               </SectionTitle>
                           </SectionHeader>

                            <SectionContent>
                            {props.books?props.books.map((b)=>{
                                return (<Card key={b.fields.slug} book={b}>

                                        <CardCover style={{"background-image": `url(${getImage(b.fields)})`}}/>
                                        <CardTitle>{b.fields.title}</CardTitle>
                                        <CardSubtitle>{b.fields.author.fields.name}</CardSubtitle>

                                </Card>)
                            }) 
                            :null}

                                    
                                    
                            </SectionContent>

                    </ContentSection>
            </>

        )
}

export default Section;