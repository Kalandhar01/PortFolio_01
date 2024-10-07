import React, { useEffect, useState } from 'react';
import Card from './Athu';

const Blog = () => {
  const [items, setItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState(8);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3333');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setItems(data.items);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleViewMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='mt-52 h-full bg-slate-100 pt-10  p-10 max-sm:p-0'>
      {/* Page Title */}
      <div className="max-sm:flex max-sm:justify-center">
          <h1 className="primary_text text-[#F75023] font-sans text-[30px] ml-20 max-sm:m-0 max-sm:mt-10" >Projects</h1>
        </div>

      {/* Cards Section */}
      <div className='w-full h-auto flex justify-center items-start px-14 max-sm:w-full max-sm:p-4  '>
        <div className='mt-10 grid gap-40 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-2 lg:grid-rows-2 p-10 max-sm:gap-20'>
          {items.slice(0, visibleItems).map((post) => (
            <Card
              key={post._id}
              image={`http://localhost:3333${post.imageURL}`} 
              title={post.description}
            />
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className='flex justify-center mt-20 mb-10'>
        {visibleItems < items.length && (
          <button
            className='px-6 py-2 bg-[#b8953d] text-white rounded-lg hover:bg-[#b88b00] transition duration-300'
            onClick={handleViewMore}
          >
            View More Posts
          </button>
        )}
      </div>
    </div>
  );
};

export default Blog;
