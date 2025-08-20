// Example page using CustomSelect
import React, { useState } from 'react';
import CustomSelect from './CustomSelect';

const ExamplePage = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValueSearch, setSelectedValueSearch] = useState("");

  // Static options
  const options = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue.js" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
    { value: "next", label: "Next.js" },
  ];

  // Mock API fetch function
  const fetchOptions = async (query) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return options.filter(option =>
      option.label.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <div className="">
      <div className="flex ">

        
        <div>
          <h2 className="text-lg font-semibold mb-2">Normal Select</h2>
          <CustomSelect
            options={options}
            value={selectedValue}
            onChange={setSelectedValue}
            searchable={false}
            placeholder="Choose a framework"
          />
          <p className="mt-2 text-gray-600">Selected: {selectedValue || "None"}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Searchable Select</h2>
          <CustomSelect
            options={options}
            value={selectedValueSearch}
            onChange={setSelectedValueSearch}
            searchable={true}
            fetchOptions={fetchOptions}
            placeholder="Search for a framework"
          />
          <p className="mt-2 text-gray-600">Selected: {selectedValueSearch || "None"}</p>
        </div>
      </div>
            {/* Search Button */}
      <button
        onClick={handleSearch}
        className="bg-gradient-to-r from-[#1E2A38]-400 to-orange-500 text-white text-2xl rounded-tr-full rounded-br-full px-6 py-2 ml-4 cursor-pointer rounded font-semibold"
      >
        SEARCH
      </button>
 
    </div>
  );
};

export default ExamplePage;