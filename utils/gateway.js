const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})


async function fetchHomepagePosts() {
  const entries = await client.getEntries({
    content_type: "post",
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
};


async function fetchFeaturedPost(contentType) {
  const entries = await client.getEntries({
    content_type: "post",
    'fields.featured': true
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
};

async function fetchBooks(contentType) {
  const entries = await client.getEntries({
    content_type: "post",
    'fields.contentType.sys.id': "4C8JCy7i9iof2F5zGSChSD"
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
};



export { fetchFeaturedPost, fetchBooks, fetchHomepagePosts };