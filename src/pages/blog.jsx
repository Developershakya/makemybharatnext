import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogPage() {
return (
<>
<Header />
<div className="container mx-auto px-4 py-16">
  <h1 className="text-4xl font-bold mb-8">Blog</h1>
  <p className="text-lg text-gray-700 mb-12">   Explore our latest articles and insights on travel, culture, and more.</p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols 3 gap-8">
    {/* Blog posts will be dynamically generated here */}
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Blog Post Title</h2>
      <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <a href="#" className="text-blue-500 hover:underline">Read more</a>
    </div>
    {/* Repeat for more blog posts */}  
    </div>
    </div>
    <Footer />
</>
    )
}