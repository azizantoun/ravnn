import React from 'react';
import styled from 'styled-components';
import { QuoteLeft } from '@styled-icons/boxicons-solid/QuoteLeft';
import { getImage, getContenType } from '../../utils/getData';
import PlayIcon from '../PlayIcon/PlayIcon';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';



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
    display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
	align-content: stretch;
`;

const Card = styled.div`
    width:230px;
    border:1px solid #E6EFFB;
    border-radius:10px;
    padding:14px;
    margin:0px 15px 0px 0;
`;
const CardCover = styled.div`
    width:200px;
    height:155px;
    display:block;
    border-radius:10px;
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center center;
    border:1px solid #E6EFFB;
    position:relative;
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

const Section = (props) => {
    return (

        <>
            <ContentSection>
                <SectionHeader>
                    <SectionTitle>
                        Audio Books for you
                               </SectionTitle>
                </SectionHeader>

                <SectionContent>
                    {props.books ? props.books.map((b) => {
                        return (<Card key={b.fields.slug} book={b}>

                            <CardCover style={{ "backgroundImage": `url(${getImage(b.fields)})` }} >
                                <PlayIcon />
                            </CardCover>
                            <CardTitle>{b.fields.title}</CardTitle>
                            <CardSubtitle>{b.fields.author.fields.name}</CardSubtitle>

                        </Card>)
                    })
                        : null}



                </SectionContent>

            </ContentSection>
        </>

    )
}

export default Section;