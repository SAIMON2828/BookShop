import React from 'react';
import { IoBookmarkSharp } from "react-icons/io5";


const Blog = ({ blog,handleBookMark, handleMarkAsRead }) => {

    
    return (
        <div className='m-3'>

            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={blog.cover}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="author flex justify-around items-center">

                        <h3>{blog.author}</h3>
                        <img className='w-14' src={blog.author_img} alt="" />

                        <button onClick={()=>handleBookMark(blog)} >

                            <IoBookmarkSharp size={25}/>
                        </button>
                    </div>


                    <h2 className="card-title">{blog.title}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

                    <div className='flex'>
                        {
                            blog.hashtags.map((hash) => <p key={hash}>{hash}</p>)
                        }
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={()=>handleMarkAsRead(blog.reading_time, blog.id)} className="btn btn-primary">Mark as read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;