import React from 'react';
import styled from 'styled-components';
import Thumb from '../../public/images/Thumb.png';

const BlocQuote = styled.section`
    display:block;
    background:rgba(146,216,180,0.1);
    border-radius:10px;
    border:1px solid #E6EFFB;
    padding:28px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: stretch;
    align-content: stretch;

`;

const Image = styled.img`
    width:110px;
    display:block;
    padding:5px;
    background:#FFF;
    border:1px solid #E6EFFB;
    border-radius:10px;
    margin-left:100px;

`;

const FeaturedQuote = ()=>{
        return (

            <>  
                    <BlocQuote>
                            <div>
                            <h2>
                                Management and leadership are like forehand and backhand. You have to be good at both to win
                            </h2>
                            <p>The essential skill of creating and maintaining new businessesthe art of the entrepreneurcan be summed up in a single word: managing. In High Output Management...</p>
                            <p>
                                <span>#business</span>
                                <span>#management</span>
                                <span>#leadership</span>
                            </p>
                            </div>
                            <div>
                            <Image src={Thumb}/>
                            </div>
                    </BlocQuote>
            </>

        )
}

export default FeaturedQuote;