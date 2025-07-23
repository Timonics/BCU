import { useState, useEffect } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  hasNext,
  hasPrev,
}: PaginationProps) {
  const [activePage, setActivePage] = useState(currentPage);

  useEffect(() => {
    setActivePage(currentPage);
  }, [currentPage]);

  let pageNumbers = [];
  let firstThreenumbers = [];
  let lastThreenumbers = [];
  let elipseNumbers = [];

  const handleChange = (page: number) => {
    setActivePage(page);
    onPageChange(page);
  };

  const handleNext = (page: number) => {
    onPageChange(page + 1);
    setActivePage(page + 1);
  };

  const handlePrev = (page: number) => {
    onPageChange(page - 1);
    setActivePage(page - 1);
  };

  for (let i = 1; i <= (totalPages < 6 ? 10 : totalPages); i++) {
    pageNumbers.push(i);
  }

  firstThreenumbers.push(...pageNumbers.slice(0, 3));
  elipseNumbers.push(
    ...pageNumbers.slice(pageNumbers.indexOf(4), pageNumbers.length - 3),
  );
  lastThreenumbers.push(...pageNumbers.slice(pageNumbers.length - 3));

  const firstThreePageNumbersElements = firstThreenumbers.map((page) => {
    let availablePages = [];
    let isAvailable: boolean = false;
    for (let i = 1; i <= totalPages; i++) {
      availablePages.push(i);
    }
    if (availablePages.includes(page)) isAvailable = true;

    return (
      <div className="flex items-center">
        <button
          disabled={!isAvailable}
          className={`border-2 d rounded-sm font-bold ${page === activePage ? 'bg-[#eff6ff] text-[#009af4]' : 'border-[#e7ebf2] text-[#344054] '} ${!isAvailable ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-[#eff6ff] hover:text-[#009af4]'} size-8`}
          onClick={() => handleChange(page)}
        >
          {page}
        </button>
      </div>
    );
  });

  const lastThreePageNumbersElements = lastThreenumbers.map((page) => {
    let availablePages = [];
    let isAvailable: boolean = false;
    for (let i = 1; i <= totalPages; i++) {
      availablePages.push(i);
    }
    if (availablePages.includes(page)) isAvailable = true;

    return (
      <div className="flex items-center gap-2">
        <button
          disabled={!isAvailable}
          className={`border-2 d rounded-sm font-bold ${page === activePage ? 'bg-[#eff6ff] text-[#009af4]' : 'border-[#e7ebf2] text-[#344054] '} ${!isAvailable ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-[#eff6ff] hover:text-[#009af4]'} size-8`}
          onClick={() => handleChange(page)}
        >
          {page}
        </button>
      </div>
    );
  });

  return (
    <div className="flex items-center justify-around w-[70%] mx-auto mt-6 p-6">
      <button
        className="flex pagination-btn w-[110px] pops disabled:cursor-not-allowed"
        disabled={!hasPrev}
        onClick={() => {
          handlePrev(activePage);
        }}
      >
        <BsArrowLeft />
        Previous
      </button>
      <div className="flex items-center justify-center gap-2.5">
        {firstThreePageNumbersElements}
        <hr className="w-2 border-[#c0c4c6]" />
        <button
          disabled
          className={`border-2 rounded-sm font-bold ${elipseNumbers.includes(activePage) ? 'bg-[#eff6ff] text-[#009af4]' : 'border-[#e7ebf2] text-[#344054]/80'} size-8`}
        >
          {elipseNumbers.includes(activePage) ? activePage : '...'}
        </button>
        <hr className="w-2 border-[#c0c4c6]" />
        {lastThreePageNumbersElements}
      </div>
      <button
        className="flex w-[105px] pagination-btn pops"
        disabled={!hasNext}
        onClick={() => {
          handleNext(activePage);
        }}
      >
        Next
        <BsArrowRight />
      </button>
    </div>
  );
}
