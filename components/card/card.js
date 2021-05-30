import React from 'react';
import styled from 'styled-components';
import { getImage } from '../../utils/getData';
import PlayIcon from '../playIcon/playIcon';
import Link from 'next/link'

const CardWrapper = styled.div`
    border:1px solid #E6EFFB;
    border-radius:10px;
    padding:8px;
    max-width:230px;
    height: 290px;
    cursor:pointer;
    transition: opacity 200ms ease;
    position: relative;
    &:hover{
        opacity: 0.7;
    }
`;
const CardCover = styled.div`
    width:180px;
    height:180px;
    display:block;
    border-radius:10px;
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center center;
    /* border:1px solid #E6EFFB; */
    position:relative;
`;

const CardTitle = styled.div`
   font-family:"Abel";
    font-size:16px;
    color:#2D2D2D;
    margin-top:20px;
    font-weight: bold;
    word-break: break-word;
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   line-height: 22px; /* fallback */
   max-height: 43px; /* fallback */
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
`;
const CardAuthor = styled.div`
    font-size:12px;
    color:#7C8DB5;
    margin-top:5px;
    position: absolute;
    bottom:10px;
`;
const Card = (props) => {
    return (
        <div>
            <Link href={`/book/${props.item.fields.slug}`}>
                <CardWrapper key={props.item.fields.slug} book={props}>
                    <CardCover style={{ "backgroundImage": `url(${getImage(props.item.fields)})` }} >
                        <PlayIcon />
                    </CardCover>
                    <CardTitle>{props.item.fields.title}</CardTitle>
                    <CardAuthor>{props.item.fields.author.fields.name}</CardAuthor>
                </CardWrapper>
            </Link>
        </div>
    )
}


export default Card;