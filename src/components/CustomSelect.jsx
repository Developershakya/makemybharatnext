// CustomSelect.jsx - Fixed with proper React import
import React, { useState, useEffect, useRef } from 'react';

const CustomSelect = ({
  options = [],
  value,
  onChange,
  searchable = false,
  fetchOptions,
  placeholder = "Select an option",
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [loading, setLoading] = useState(false);
  const wrapperRef = useRef(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter options based on search term or fetch from API
  useEffect(() => {
    const filterOptions = async () => {
      if (!searchable || !searchTerm) {
        setFilteredOptions(options);
        return;
      }

      if (fetchOptions) {
        setLoading(true);
        try {
          const fetchedOptions = await fetchOptions(searchTerm);
          setFilteredOptions(fetchedOptions);
        } catch (error) {
          console.error("Error fetching options:", error);
          setFilteredOptions(options);
        } finally {
          setLoading(false);
        }
      } else {
        // Local filtering if no fetch function provided
        const filtered = options.filter(option =>
          option.label.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredOptions(filtered);
      }
    };

    filterOptions();
  }, [searchTerm, options, searchable, fetchOptions]);

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
    setSearchTerm("");
  };

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      {/* Select Trigger */}
      <div
        className="flex items-center justify-between p-2 border border-gray-300 rounded-md cursor-pointer bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {searchable && isOpen ? (
          <input
            type="text"
            className="w-full outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            placeholder="Search..."
            autoFocus
          />
        ) : (
          <span className={value ? "text-gray-800" : "text-gray-500"}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        )}

      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
          {loading ? (
            <div className="p-4 text-center text-gray-500">Loading options...</div>
          ) : filteredOptions.length === 0 ? (
            <div className="p-4 text-center text-gray-500">No options found</div>
          ) : (
            filteredOptions.map((option) => (
              <div
                key={option.value}
                className={`p-2 cursor-pointer transition-colors ${
                  option.value === value
                    ? "bg-blue-50 text-blue-600 border-l-4 border-blue-500"
                    : "hover:bg-gray-100 text-gray-800"
                }`}
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;