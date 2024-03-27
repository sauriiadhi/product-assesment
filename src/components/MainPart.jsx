import React, { useState } from 'react'
import '../styles/sidebar.scss'
import '../styles/button.scss'
import Button from './Button';
import Table from './Table'
function MainPart() {
  const [showComponent, setShowComponent] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleClick = () => {
    setShowComponent(true);
  };
  const elements = ['Paris Olympic 2024 - 300', 'T20 World Cup 2024 - 200', 'Manchester United - 200', 'Mumbai City FC - 220', 'Motorsports - 10'];
  return (
    <div className='section'>
      <div className='sect1'>
        <div className='section--button'>
          <Button items={elements}></Button>
        </div>
        <div className='section--search'>
          <span className='search-bar'>
            <label for="subject">Subject</label>
            <input id="subject" type="search" placeholder="Search..." value="" name="subject" />
          </span>
          <span className='search-cta'>
            <button className='cta cta-add'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16 10.0008H4" stroke="white" stroke-width="1.2" stroke-linecap="round" />
                <path d="M10.0017 16V4" stroke="white" stroke-width="1.2" stroke-linecap="round" />
              </svg>
              Add Products
            </button>
            <button className='cta cta-filter' onClick={handleClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="#8D7855" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              Filters
            </button>
            <button className='cta cta-export'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5.62502 13.75C2.25532e-05 14.375 0.625023 7.5 5.62502 8.125C3.75002 1.25 14.375 1.25 13.75 6.25C20 4.375 20 14.375 14.375 13.75M6.87502 16.25L10 18.75M10 18.75L13.125 16.25M10 18.75V10" stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              Export
            </button>
          </span>
        </div>
        <div>
          <Table></Table>
        </div>
      </div>
      {showComponent && (<div className='filter'>
        <div className='filter--header'>
          <span>Filters</span>
          <svg onClick={() => setShowComponent(false)} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M22.1634 7.47767L20.5187 5.83301L13.9984 12.3533L7.47804 5.83301L5.83337 7.47767L12.3537 13.998L5.83337 20.5183L7.47804 22.163L13.9984 15.6427L20.5187 22.163L22.1634 20.5183L15.643 13.998L22.1634 7.47767Z" fill="#9CA3AF" />
          </svg>
        </div>
        <div className='filter--content'>
          <form className='form'>
            <span>
              <label for="subject">Product Name</label>
              <input id="subject" type="text" placeholder="Search" value="Test Product Name" name="subject" />
            </span>
            <span>
              <label htmlFor="dropdown">Category</label>
              <select id="dropdown" value={selectedOption} onChange={handleSelectChange}>
                <option value="">Category</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </span>


          </form>
        </div>
        <div className='filter--footer'>
          <button className='apply'>Apply</button>
          <a className='reset'>Reset</a>
        </div>
      </div>
      )}
    </div>
  )
}

export default MainPart