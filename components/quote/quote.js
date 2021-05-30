import React from 'react';
import styled from 'styled-components';
import { QuoteLeft } from '@styled-icons/boxicons-solid/QuoteLeft';
import { getImage, getContenType } from '../../utils/getData'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const BlocQuote = styled.section`
    display:block;
    background:rgba(146,216,180,0.1);
    border-radius:10px;
    border:1px solid #E6EFFB;
    padding:30px 25px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    h2{
        line-height:30px;
        font-size:20px;
        font-weight:normal;
        margin-top:40px;
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

const ForYou = styled.span`
    background:#92D8B4;
    color:#FFF;
    padding:10px 15px;
    border-radius:10px;
`;

const Media = styled.div`
    
    display:block;
    padding:5px;
    background:#FFF;
    border:1px solid #E6EFFB;
    border-radius:10px;
    margin-left:25px;
    &.Video{
        width:400px;
        height:250px;
        iframe{
            width:100%;
            height:100%;
        }

    }
    &.Book{
        width:170px;
        img{
            width:100%;
        }
    }
    &.podcast{

    }
    &.article{

    }
`;
const EntryDescription = styled.div`
    max-height:100px;
    overflow:hidden;
    position:relative;
    p{
        margin:0;
    }
`;


const Hashtag = styled.a`
    color:rgba(51,51,51,0.5);
    display:inline-block;
    margin:15px 5px 5px 0;
    transition:all 200ms ease;
    &:hover{
        color:rgba(51,51,51,1);
        text-decoration:underline;
    }

`;


const renderMedia = (entry) => {
    const type = getContenType(entry);
    if (type === "Book") {
        return <img src={getImage(entry)} />
    }

    if (type == "Video") {
        return (
            <iframe width="560" height="315" src={entry.youtube} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        );
    }

};

const renderExcerpt = (text) => {
    return documentToReactComponents(text)[0];
}



const FeaturedQuote = (props) => {
    return (
        <>
            <BlocQuote>
                <div>

                    <ForYou>
                        For you
                        </ForYou>
                    <h2>
                        <QuoteOpen />
                        {props.entries.quote}
                    </h2>
                    <EntryDescription>
                        {renderExcerpt(props.entries.description)}
                    </EntryDescription>



                    {props.entries.tags ? props.entries.tags.map((t) => {
                        return (<Hashtag key={t} href={`/tag/` + t}>#{t}</Hashtag>)
                    })
                        : null}
                </div>
                <div>
                    <Media className={getContenType(props.entries)}>
                        {renderMedia(props.entries)}
                    </Media>
                </div>
            </BlocQuote>
        </>

    )
}

export default FeaturedQuote;