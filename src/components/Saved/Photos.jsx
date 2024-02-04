import React from 'react'
import PostCard from '../Home/PostCard'

const Photos = () => {
  return (
    <section>
          {
              "abcdef".split('').map((item, index) => {
                  return <PostCard index={index} key={index}/>
              })
        }
    </section>
  )
}

export default Photos