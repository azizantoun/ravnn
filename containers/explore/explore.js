import React from 'react';
import Welcome from '../../components/welcome/welcome';
import FeaturedQuote from '../../components/quote/quote';
import { fetchFeaturedPost, fetchBooks, fetchHomepagePosts } from '../../utils/gateway';
import { useEffect, useState } from 'react'
import Tabs from '../../components/tabs/tabs';
import Section from '../../components/section/section';
const Explore = () => {

  const [featuredPost, setFeaturedPost] = useState([])

  useEffect(() => {
    async function getPosts() {
      const items = await fetchFeaturedPost('Post')
      setFeaturedPost([...items])
    }
    getPosts()
  }, [])


  const [books, setBooks] = useState([])

  useEffect(() => {
    async function getBooks() {
      const items = await fetchBooks()
      setBooks([...items])
    }
    getBooks()
  }, [])


  const [homePagePosts, setHomepagePosts] = useState([])
  const [tabs, setTabs] = useState([])
  useEffect(() => {
    async function getHomePagePosts() {
      const items = await fetchHomepagePosts()
      const activeTabs = [{ name: 'All', id: 0, active: true }];
      const idChecker = [];
      items.map(post => {
        const contentTypeId = post.fields.contentType.sys.id;
        const contentTypeName = post.fields.contentType.fields.contentTypeName;
        const tab = { id: contentTypeId, name: contentTypeName, active: false };
        !idChecker.includes(contentTypeId) ? activeTabs.push(tab) : null;
        idChecker.push(contentTypeId);
      });
      setHomepagePosts([...items]);
      setTabs([...activeTabs]);
      idChecker.length = 0;
    }
    getHomePagePosts()
  }, [])




  return (
    <div>

      <Welcome name="Aziz Antoun" />
      {tabs.length ? <Tabs items={tabs} /> : null}
      {featuredPost ? featuredPost.map((p) => {
        return <FeaturedQuote entries={p.fields} key={p.fields.slug} />
      }) : null}


      <Section books={books} />
      <Section />
      <Section />
      <Section />

    </div>
  )
}


export default Explore;