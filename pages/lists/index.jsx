
import React from 'react'







export default function list({posts}) {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="mt-10 text-white text-4xl text-center">
      Ma liste de posts ♥
      </h1>
      <div className='flex justify-center mt-10'>
        {posts.map( (post)=>{
          return(
            <div key={post.id} className='text-white'>{post.title} </div>
          )
        })}
      </div>
    </div>
  )
}




export async function getStaticProps(context) {
  try {
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
		const data = await res.json();
		return {
      props: {
        posts : data
      },
    }
	} catch (err) {
		console.log(err);
	}
  
}