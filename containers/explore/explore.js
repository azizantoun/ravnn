import React from 'react';
import Welcome from '../../components/welcome/welcome';
import FeaturedQuote from '../../components/quote/quote';
import {fetchFeaturedPost, fetchBooks} from '../../utils/gateway';
import { useEffect, useState } from 'react'
import Section from '../../components/section/section';
const Explore = () =>{

    const [featuredPost, setFeaturedPost] = useState([])
  
    useEffect(() => {
      async function getPosts() {
        const featured = await fetchFeaturedPost('Post')    
        setFeaturedPost([...featured])
      }
      getPosts()
    }, [])


    const [books, setBooks] = useState([])
  
    useEffect(() => {
      async function getBooks() {
        const books = await fetchBooks()    
        setBooks([...books])
      }
      getBooks()
    }, [])  




      return (
          <div>

          <Welcome name="Aziz Antoun"/>  
          {featuredPost?featuredPost.map((p)=>{
            return <FeaturedQuote entries={p.fields} key={p.fields.slug}/>
          }):null}
        
        
          <Section books={books} />
          <Section/>
          <Section/>
          <Section/>
          
          </div>
      )
}


export default Explore;