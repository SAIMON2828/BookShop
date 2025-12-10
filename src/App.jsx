import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Navbar from './Components/NavBar/Navbar'

function App() {


  const [bookmarked, setBookmarked] = useState([]);
  const [readingCount, setReadingCount] = useState(0);

  const handleBookMark = (blog) =>{
    setBookmarked([...bookmarked, blog])
  }
  

  const handleMarkAsRead = (time,id)=>{
    setReadingCount(readingCount + time);
    handleRemoveFromBookMark(id)
  }

  const handleRemoveFromBookMark = (id)=>{
    const remainingBookMark = bookmarked.filter((mark)=> mark.id !== id);
    setBookmarked(remainingBookMark)
  }

  return (
    <>
      
      <Navbar></Navbar>
      

      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          

          <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <h1 className='bg-amber-700 p-2 shadow-amber-500 m-4 rounded-lg text-3xl font-bold'>Reading time : {readingCount}</h1>
          <h1 className='bg-teal-700 p-2  m-4 rounded-lg text-3xl font-bold'>BookMarked count: {bookmarked.length}</h1>

          {
            bookmarked.map((marked) =><p key={marked.id} className='bg-amber-700 p-2 shadow-amber-500 m-4 rounded-lg'>{marked.title}</p>)
          }
        </div>
      </div>
      

    </>
  )
}

export default App
