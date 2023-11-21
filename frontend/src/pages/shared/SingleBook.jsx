import React, { useState } from 'react';
import { useLoaderData} from 'react-router-dom';
import { Banner } from 'flowbite-react';
import { HiX } from 'react-icons/hi';
import { MdAnnouncement } from 'react-icons/md';

const SingleBook = () => {
  const data = useLoaderData();
  console.log(data)
  const { bookTitle, bookDetails } = data; // Assuming bookDetails is available in your data
  const [isDetailsVisible, setDetailsVisible] = useState(true);

  const toggleDetails = () => {
    setDetailsVisible(!isDetailsVisible);
  };


  return (
    <div className='mt-20' onClick={() => {window.open(data.pdfURL)}}>
      <Banner>
        <div className="z-50 flex justify-between w-full py-12 px-4 border-b border-gray-200 bg-amber-400">
          <div className="flex items-center mx-auto">
            <p className="flex items-center text-2xl font-normal text-black" onClick={toggleDetails}>
              <MdAnnouncement className='me-2 text-red-600' />
              <span className='text-4xl font-semibold'>Book Name: {bookTitle}</span>
            </p>
          </div>
          <Banner.CollapseButton color="gray" className="border-0 bg-transparent px-0" onClick={toggleDetails}>
            <HiX className="h-4 w-4" />
          </Banner.CollapseButton>
        </div>
      </Banner>

      {/* book details */}
      {isDetailsVisible && (
        <div className="mt-4 p-4 border border-gray-300 bg-white">
          <h2 className="text-xl font-semibold mb-2">Book Details</h2>
          <p><strong>Title:</strong> {bookDetails.title}</p>
          <p><strong>Author:</strong> {bookDetails.author}</p>
          <p><strong>Genre:</strong> {bookDetails.description}</p>
         
        </div>
      )}
    </div>
  );
};

export default SingleBook;

