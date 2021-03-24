import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react'
import Link from 'next/link';
const Explore = () =>{

    const client = require('contentful').createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
      })
      



    async function fetchEntries() {
        const entries = await client.getEntries()
        if (entries.items) return entries.items
        console.log(`Error getting Entries for ${contentType.name}.`)
      }
    
      const [posts, setPosts] = useState([])
    
      useEffect(() => {
        async function getPosts() {
          const allPosts = await fetchEntries()
          console.log(allPosts);
    
          setPosts([...allPosts])
        }
        getPosts()
      }, [])


      return (
          <div>
                {posts.length > 0
        ? posts.map((p) => (

              <>
            <Link href={`/post/${p.fields.slug}`}>
                {p.fields.title}
            </Link>
            
            </>
           
          ))
        : null}
          </div>
      )
}

{/* <Post
alt={p.fields.alt}
date={p.fields.date}
key={p.fields.title}
image={p.fields.image.fields.file.url}
title={p.fields.title}
url={p.fields.slug}
/> */}

export default Explore;