import React from 'react';

export default function PostPage({post}) {
  return (
    <div>{post.title} </div>
  )
};

export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
    const data = await res.json();
    const paths = data.map( (post)=>{
        return { params: { id: post.id.toString() } }
    })
    
    return {
        paths,
      fallback: false
    }
}

export async function getStaticProps(context) {
    try {
          const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`+context.params.id);
          const data = await res.json();
          return {
        props: {
          post : data
        },
      }
      } catch (err) {
          console.log(err);
      }
    
  }