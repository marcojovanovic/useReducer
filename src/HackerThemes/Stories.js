import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {

  const {isLoading, hits, removeStory}=useGlobalContext()

  console.log(isLoading)

  if(isLoading){

      return <div className='loading'>Lodadg ...</div>
  }


  return <section className='stories'>
      {hits.map((story)=>{

        const {objectID, title, num_comments, url, points, author} = story


         return <article key={objectID} className='story'>

          <h4 className='title'>{title}</h4>

          <div>
            <a href={url} target='_blank' className='read-link'>

            read more

            </a>
            <button onClick={()=>removeStory(objectID)} className='remove-btn'>Remove</button>
          </div>

         </article> 

      })}


  </section>
}

export default Stories