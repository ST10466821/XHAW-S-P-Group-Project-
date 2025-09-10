import React, { useState } from 'react';

interface CourseData {
  title: string;
  description: string;
  features: string[];
  price: string;
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'6weeks' | '6months'>('6weeks');
    // Removed invalid HomePage component definition and moved SVG banner into main App component.
  

  const courseData: Record<'6weeks' | '6months', CourseData> = {
    '6weeks': {
      title: '6 Week Intensive Course',
      description: 'Fast-track your skills with our comprehensive 6-week program designed for rapid learning and immediate results.',
      features: [
        'Daily interactive sessions',
        'Hands-on projects',
        'Personal mentorship',
        'Certificate of completion'
      ],
      price: 'R5 234,45'
    },
    '6months': {
      title: '6 Month Comprehensive Course',
      description: 'Deep dive into advanced concepts with our extensive 6-month program for thorough mastery and expertise.',
      features: [
        'Weekly structured lessons',
        'Advanced project portfolio',
        'Industry networking opportunities',
        'Job placement assistance',
        'Professional certification'
      ],
      price: 'R15 744,58'
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 text-gray-200 p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <h1 className="text-2xl font-light text-gray-400 mb-8">Home Page</h1>
        
        {/* Logo/Banner */}
        <div className="bg-gray-600 p-8 text-center rounded">
          <h2 className="text-xl text-gray-800 font-medium">Logo/Banner of Company</h2>
        </div>

        {/* Auth Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-gray-600 hover:bg-gray-500 transition-colors p-4 rounded text-gray-800 font-medium">
            Sign/Log In
          </button>
          <button className="bg-gray-600 hover:bg-gray-500 transition-colors p-4 rounded text-gray-800 font-medium">
            Create Acc
          </button>
        </div>

        {/* Company Mission */}
        <div className="bg-gray-600 p-8 rounded">
          <p className="text-gray-800 text-center">
            Mission Statement:
Our mission is to empower individuals and communities by delivering innovative, sustainable solutions that drive positive change. We are committed to excellence, integrity, and collaboration, striving to create lasting value for our customers, employees, and stakeholders while contributing to a more equitable and resilient future.
            <br />
            W/Img
          </p>
        </div>

        {/* Course Tabs */}
        <div className="space-y-4">
          {/* Tab Headers */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setActiveTab('6weeks')}
              className={`p-4 rounded transition-colors font-medium ${
                activeTab === '6weeks'
                  ? 'bg-gray-500 text-white'
                  : 'bg-gray-600 text-gray-800 hover:bg-gray-500'
              }`}
            >
              6 Week Course
            </button>
            <button
              onClick={() => setActiveTab('6months')}
              className={`p-4 rounded transition-colors font-medium ${
                activeTab === '6months'
                  ? 'bg-gray-500 text-white'
                  : 'bg-gray-600 text-gray-800 hover:bg-gray-500'
              }`}
            >
              6 Month Course
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-gray-600 p-6 rounded min-h-[200px]">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {courseData[activeTab].title}
              </h3>
              
              <p className="text-gray-700 leading-relaxed">
                {courseData[activeTab].description}
              </p>

              <div className="space-y-2">
                <h4 className="font-medium text-gray-800">What's included:</h4>
                <ul className="space-y-1">
                  {courseData[activeTab].features.map((feature, index) => (
                    <li key={index} className="text-gray-700 flex items-start">
                      <span className="text-gray-500 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-500">
                <span className="text-2xl font-bold text-gray-800">
                  {courseData[activeTab].price}
                </span>
                <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <div className="bg-gray-600 p-3 text-center rounded">
            <h3 className="text-gray-800 font-medium">Contact Us:</h3>
          </div>
          
          <div className="bg-gray-600 p-6 rounded space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800">
              <div>
                <label className="block font-medium mb-1">Email:</label>
                <input 
                  type="email" 
                  className="w-full bg-gray-500 p-2 rounded border border-gray-400 focus:border-gray-300 focus:outline-none"
                  placeholder="contact@company.com"
                />
              </div>
              
              <div>
                <label className="block font-medium mb-1">Visit Us: (Address)</label>
                <p className="text-sm text-gray-700 bg-gray-500 p-2 rounded">
                  123 Business Street<br/>
                  City, State 12345
                </p>
              </div>
            </div>
            
            <div>
              <label className="block font-medium mb-1 text-gray-800">Phone Number:</label>
              <input 
                type="tel" 
                className="w-full bg-gray-500 p-2 rounded border border-gray-400 focus:border-gray-300 focus:outline-none"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <button className="w-full bg-gray-700 hover:bg-gray-800 text-white p-3 rounded transition-colors font-medium">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;