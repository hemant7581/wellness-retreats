import { useState } from 'react';
import wellnessData from '../data/Retreat.json';

const Retreat = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [filters, setFilters] = useState({ date: '', type: '', title: '' });
  const cardsPerPage = 3;

  const handleFilterChange = (filterName, value) => {
    setFilters({
      ...filters,
      [filterName]: value,
    });
    setCurrentPage(0); 
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(filteredCards.length / cardsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredCards = wellnessData.wellness.filter((wellness) => {
    return (
      (filters.date === '' || wellness.date.includes(filters.date)) &&
      (filters.type === '' || wellness.type.toLowerCase().includes(filters.type.toLowerCase())) &&
      (filters.title === '' || wellness.title.toLowerCase().includes(filters.title.toLowerCase()))
    );
  });

  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);

  const currentCards = filteredCards.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  return (
    <>
{/* header */}
<div className="bg-[#1B3252] w-full h-16">
        <h1 className="text-white font-semibold text-2xl p-4 font-sans ">
          Wellness Retreats
        </h1>
      </div>

      <div className="banner bg-[#E0D9CF] mt-4 mx-4 h-96  ">
        <div className="px-4 pt-3 ">
          <img
            src="https://cdn.midjourney.com/873b60f7-f026-40f9-b2d7-184e981ee1f5/0_3.jpeg"
            alt=""
            className="w-full h-72 rounded-lg object-cover   border-2"
          />

          <div className="my-3">
            <h1 className="font-sans font-normal text-xl ">
              Discover Your Inner Peace
            </h1>
            <p className="text-sm tracking-wide ">
              Join us for a series of wellness retreats designed to help you
              find tranquility and rejuvination
            </p>
          </div>
        </div>
      </div>

{/* header */}

      <div className="buttons flex mt-4 mx-4 justify-between">
        <div className="filter_btn space-x-2">
          <select
            onChange={(e) => handleFilterChange('date', e.target.value)}
            className="bg-[#1B3252] p-2 rounded-md text-white"
          >
            <option value="">Filter by Date</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
          <select
            onChange={(e) => handleFilterChange('type', e.target.value)}
            className="bg-[#1B3252] p-2 rounded-md text-white"
          >
            <option value="">All Types</option>
            <option value="Yoga">Yoga</option>
            <option value="Meditation">Meditation</option>
            <option value="Detox">Detox</option>
          </select>
        </div>
        <div className="filter_title">
          <input
            type="text"
            placeholder="Search retreats by title"
            className="bg-[#1B3252] p-2 w-[468px] placeholder:text-white rounded-md text-start text-white"
            onChange={(e) => handleFilterChange('title', e.target.value)}
          />
        </div>
      </div>

      {/* Cards */}
      <div className="cards-container">
        <div className="cards my-4 mx-4 flex justify-between">
          {currentCards.map((wellness) => (
            <div
              key={wellness.id}
              className="bg-[#E0D9CF] w-[475px] rounded-lg h-auto p-6 grid justify-center gap-4"
            >
              <img
                src={wellness.image}
                alt={wellness.title}
                className="object-cover max-w-full h-60 rounded-lg border border-black"
              />
              <div className="text-center">
                <h1 className="font-sans font-semibold text-xl mb-2">{wellness.title}</h1>
                <p className="font-sans text-sm tracking-wide mb-1">{wellness.description}</p>
                <p className="font-sans text-sm tracking-wide mb-1">Date: {wellness.date}</p>
                <p className="font-sans text-sm tracking-wide mb-1">Location: {wellness.location}</p>
                <p className="font-sans text-sm tracking-wide mb-1">Price: {wellness.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Buttons */}
      <div className="pagination_btns my-4 space-x-3 place-content-center flex">
        <button
          className="previous bg-[#1B3252] p-2 rounded-md text-white"
          onClick={handlePrev}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        {[...Array(totalPages).keys()].map((number) => (
          <button
            key={number}
            className={`page-number ${number === currentPage ? 'bg-[#1B3252] text-white' : 'bg-white text-[#1B3252]'} p-2 rounded-md`}
            onClick={() => handlePageClick(number)}
          >
            {number + 1}
          </button>
        ))}
        <button
          className="next bg-[#1B3252] p-2 rounded-md text-white"
          onClick={handleNext}
          disabled={currentPage >= totalPages - 1}
        >
          Next
        </button>
      </div>

      {/* Footer */}
      <footer>
        <p className="text-center font-light text-sm mt-5 mb-7 tracking-widest">
          © 2024 Wellness Retreats. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Retreat;

