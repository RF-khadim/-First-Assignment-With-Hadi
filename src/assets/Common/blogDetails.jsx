import React from 'react'
import { useParams } from 'react-router-dom'

const BlogDetails = () => {

    const { id } = useParams
    return (
        <div>blogDetails  {id}</div>
    )
}

export default BlogDetails