import React from 'react'
import { useParams } from 'react-router-dom'

export default function PostDetail() {
    const params = useParams();
    const postId = params.postId;
  return (
    <div>
    <div>PostDetail</div>
    POST ID = {postId}
    </div>
  )

}
