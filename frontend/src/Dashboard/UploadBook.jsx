import React, { useState } from 'react'

import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-fiction",
    "Mystery",
    "Programming",
    "Science fiction",
    "Fantasy",
    "Horror",
    "Biography",
    "Autobiography",
    "History",
    "Self-help",
    "Business",
    "Memoir",
    "Poetry",
    "Children's books",
    "Travel",
    "Religion and spirituality",
    "Science",
    "Art and design",
  ];


  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const title = form.title.value;
    const author = form.author.value;
    const imageURL = form.imageURL.value;
    const category = form.category;
    const description = form.description.value;
    const pdfURL = form.pdfURL.value;

    const bookObj = {
      title,
      author,
      imageURL,
      category,
      description,
      pdfURL,
    };
    // console.log(dataObj)
    fetch("http://localhost:5000/upload-book", {
      method: "POST",

      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        alert("Book updated successfully!!!!");
        form.reset();
      });
  };


  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A Book!</h2>
      <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4" onSubmit={handleSubmit}>

        {/* first row */}
        <div className='flex gap-8'>

          {/* book name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="bookTitle"
                value="Book Title"
              />
            </div>
            <TextInput
              id="title"
              placeholder="Book Name"
              required
              type="text"
              name='bookTitle'
              className='w-full'
            />
          </div>

          {/* author name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="authorName"
                value="Author Name"
              />
            </div>
            <TextInput
              id="author"
              placeholder="Author Name"
              required
              type="text"
              name='authorName'
              className='w-full'
            />
          </div>

        </div>

        {/* 2nd Row */}
        <div className='flex gap-8'>
          {/* book url */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="imageURL"
                value="Book Image URL"
              />
            </div>
            <TextInput
              id="imageURL"
              placeholder="Image URL"
              required
              type="text"
              name='imageURL'
              className='w-full'
            />
          </div>

          {/* book category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="inputState"
                value="Book Category"
              />
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>

        </div>

        {/* full width div for book description */}
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="bookDescription"
              value="Book Description"
            />
          </div>
          <Textarea
            id="description"
            placeholder="Book Description"
            required
            type="text"
            name='bookDescription'
            className='w-full'
            rows={4}
          />
        </div>


        {/* book pdf url */}
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="bookPDFURL"
              value="Book PDF Link"
            />
          </div>
          <TextInput
            id="pdfURL"
            placeholder="Paste Book PDF URL here"
            required
            type="text"
            name='bookPDFURL'
            className='w-full'
          />
        </div>


        {/* Submit btn */}
        <Button type="submit" className='mt-5'>
          Upload book
        </Button>

      </form>
    </div>
  )
}

export default UploadBook