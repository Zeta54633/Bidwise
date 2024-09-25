// FilterDropdown.js
import React from 'react';

const FilterDropdown = ({ category, selectedFilters, onChange }) => {
  const filters = {
    Batsmen: ['Power', 'Certainty', 'SR', 'Average'],
    Bowlers: ['Pace', 'Spin', 'Economy', 'Wickets', 'Average'],
    Allrounders: ['Batting Avg', 'Bowling Avg', 'Power', 'Certainty', 'Versatility']
  };

  const handleCheckboxChange = (filter) => {
    onChange({
      ...selectedFilters,
      [filter]: !selectedFilters[filter]
    });
  };

  const handleSliderChange = (e) => {
    onChange({
      ...selectedFilters,
      'Handedness': e.target.value
    });
  };

  return (
    <div className="w-full flex items-center justify-between mb-4">
      {/* Left or Right Handed Slider */}
      <div className="flex items-center">
        <label htmlFor="handedness" className="mr-4 font-semibold">Handedness:</label>
        <label className="flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer"
            id="handedness" 
            value={selectedFilters['Handedness'] === 'Right' ? 'Left' : 'Right'}
            onChange={handleSliderChange} 
          />
          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 relative transition duration-300">
            <span className={`absolute w-4 h-4 bg-white rounded-full top-1 left-1 peer-checked:transform peer-checked:translate-x-5 transition-transform duration-300 ease-in-out`}></span>
          </div>
          <span className="ml-3 text-sm text-gray-900">{selectedFilters['Handedness'] || 'Left'}</span>
        </label>
      </div>

      {/* Checkbox Filters */}
      <div className="flex items-center space-x-4">
        {filters[category].map((filter) => (
          <div key={filter} className="flex items-center">
            <input
              type="checkbox"
              id={filter}
              checked={selectedFilters[filter] || false}
              onChange={() => handleCheckboxChange(filter)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor={filter} className="ml-2 text-sm font-medium text-gray-900">
              {filter}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterDropdown;
