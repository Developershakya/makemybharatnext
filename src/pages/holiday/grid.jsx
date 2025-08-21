        <div className="px-4 py-6">
          {/* Tabs */}
          <div className="max-w-7xl mx-auto flex justify-between  bg-white p-4 shadow-md rounded-t-lg -mt-2">
            <div className="w-full flex space-x-8">
              <button
                onClick={() => setSelectedTab("itinerary")}
                className={`font-semibold md:text-2xl cursor-pointer hover:text-blue-600 transition-all pb-1 ${
                  selectedTab === "itinerary"
                    ? "text-blue-600 border-blue-600 border-b-4"
                    : "text-gray-600"
                }`}
              >
                Itinerary
              </button>
              <button
                onClick={() => setSelectedTab("policies")}
                className={`font-semibold md:text-2xl cursor-pointer hover:text-blue-600 pb-1 transition-all ${
                  selectedTab == "policies"
                    ? "text-blue-600 border-blue-600 border-b-4"
                    : "text-gray-600"
                }`}
              >
                Policies
              </button>
              <button
                onClick={() => setSelectedTab("summary")}
                className={`font-semibold md:text-2xl cursor-pointer hover:text-blue-600 pb-1 transition-all  ${
                  selectedTab == "summary"
                    ? "text-blue-600 border-blue-600 border-b-4"
                    : "text-gray-600"
                }`}
              >
                Summary
              </button>
            </div>

            <button
              onClick={handleShare}
              className="flex items-center cursor-pointer gap-2 text-gray-600   px-4 py-2 "
            >
              <RiShareForwardFill size={20} /> Share
            </button>
          </div>

          {/* Main Content */}

          <div className="max-w-7xl mx-auto mt-6 mb-24 md:mb-2 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1  gap-6">
            {/* Itinerary Section (left) */}
            {selectedTab === "itinerary" && (
              <div className="col-span-2  bg-white rounded-lg shadow p-8">
                <div className="">
                  <span>Itinerary</span>{" "}
                </div>
                <h2 className="text-2xl font-semibold mb-6">4 Day Plan</h2>

                {/* Day 1 */}
                <section className="mb-8">
                  <h3 className="text-lg font-bold text-gray-800">
                    Day 1: Arrival in Goa
                  </h3>
                  <p className="text-sm text-red-600">
                    Note: You need to reach Goa on your own.
                  </p>

                  <div className="mt-4 border p-5 rounded-lg bg-gray-50">
                    <h4 className="font-semibold">Private Transfer</h4>
                    <p className="text-sm text-gray-700">
                      Airport to hotel via private cab
                    </p>
                  </div>

                  <div className="mt-4 border p-5 rounded-lg bg-gray-50">
                    <h4 className="font-semibold">
                      Resort Stay: Luxury Goa Resort
                    </h4>
                    <p className="text-sm text-gray-700">
                      3 Nights | Deluxe Room w/ Balcony
                    </p>
                    <img
                      src="https://images.pexels.com/photos/136721/pexels-photo-136721.jpeg"
                      alt="Resort Room"
                      className="mt-3 w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </section>

                {/* Day 2 */}
                <section className="mb-8">
                  <h3 className="text-lg font-bold text-gray-800">
                    Day 2: Water Sports Activity
                  </h3>
                  <div className="mt-4 border p-5 rounded-lg bg-gray-50">
                    <h4 className="font-semibold">
                      Double Decker Boat Party with Water Sports
                    </h4>
                    <p className="text-sm text-gray-700">
                      4 Hours | Includes water sports, lunch & transfers
                    </p>
                    <img
                      src="https://images.pexels.com/photos/326212/pexels-photo-326212.jpeg"
                      alt="Boat Party"
                      className="mt-3 w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </section>

                {/* Day 3 */}
                <section className="mb-8">
                  <h3 className="text-lg font-bold text-gray-800">
                    Day 3: Leisure Day
                  </h3>
                  <p className="text-sm text-gray-700">
                    Enjoy resort amenities or add optional activities as you
                    like.
                  </p>
                </section>

                {/* Day 4 */}
                <section>
                  <h3 className="text-lg font-bold text-gray-800">
                    Day 4: Departure
                  </h3>
                  <p className="text-sm text-red-600">
                    Note: Departure from Goa on your own.
                  </p>
                </section>
              </div>
            )}

            {/* Policies */}
            {selectedTab === "policies" && (
              <div className="col-span-2  bg-white rounded-lg shadow p-8">
                <div
                  className="border rounded-md p-2 cursor-pointer flex justify-between items-center"
                  onClick={() => setPoliciesOpen(!policiesOpen)}
                >
                  <span>View Policies</span>
                  <span>{policiesOpen ? "-" : "+"}</span>
                </div>
                {policiesOpen && (
                  <div className="mt-2 p-2 border rounded-md bg-gray-50">
                    {/* Actual policies content */}
                    <p>Policy 1: Lorem ipsum...</p>
                    <p>Policy 2: Lorem ipsum...</p>
                  </div>
                )}
              </div>
            )}

            {/* Summary */}
            {selectedTab === "summary" && (
                  <div className="col-span-2  bg-white rounded-lg shadow p-8">
                {isLarge ? (
                  // Full content directly visible on large screens
                  <div className="p-2 border rounded-md bg-gray-50">
                    <p>Summary content directly visible on large screens.</p>
                  </div>
                ) : (
                  // Dropdown wrapper on small screens
                  <div>
                    <div
                      className="border rounded-md p-2 cursor-pointer flex justify-between items-center"
                      onClick={() => setSummaryOpen(!summaryOpen)}
                    >
                      <span>View Summary</span>
                      <span>{summaryOpen ? "-" : "+"}</span>
                    </div>
                    {summaryOpen && (
                      <div className="mt-2 p-2 border rounded-md bg-gray-50">
                        <p>Summary content visible when dropdown opened.</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Sidebar (right) */}
            <aside className="col-span-1 hidden  md:block space-y-6">
              <div className="bg-white  rounded-lg shadow p-6">
                <p className="text-sm line-through text-gray-500">₹12,295</p>
                <p className="text-4xl font-bold text-green-600">
                  ₹8,550 <span className="text-base">/ Adult</span>
                </p>
                <button className="w-full mt-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white py-3 rounded-lg font-semibold hover:opacity-90">
                  Proceed to Payment
                </button>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Coupons & Offers
                </h3>
                <div className="bg-gray-100 p-4 rounded-lg mb-2">
                  <p className="text-sm font-medium text-gray-800">
                    FREEDOMSALE
                  </p>
                  <p className="text-xs text-green-600">₹696 OFF applied</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-800">MMTHLD</p>
                  <p className="text-xs text-green-600">₹161 OFF available</p>
                </div>
              </div>
            </aside>
          </div>
        </div>