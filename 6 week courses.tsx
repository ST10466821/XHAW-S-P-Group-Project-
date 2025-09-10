import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

type PageType = 'home' | 'six-weeks' | 'six-months';

interface Course {
  id: string;
  title: string;
  description: string;
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [activeTab, setActiveTab] = useState<'6weeks' | '6months'>('6weeks');

  const sixWeekCourses: Course[] = [
    {
      id: '1',
      title: 'Child Minding',
      description: 'Learn essential childcare skills and safety protocols for professional child minding.'
    },
    {
      id: '2',
      title: 'Cooking',
      description: 'Master fundamental cooking techniques and kitchen safety for home and commercial use.'
    },
    {
      id: '3',
      title: 'Garden Maintenance',
      description: 'Develop skills in garden care, plant maintenance, and landscape upkeep.'
    }
  ];

  const sixMonthCourses: Course[] = [
    {
      id: '1',
      title: 'First Aid',
      description: 'Comprehensive first aid training with certification for emergency response and medical assistance.'
    },
    {
      id: '2',
      title: 'Sewing',
      description: 'Advanced sewing techniques from basic repairs to professional garment construction.'
    },
    {
      id: '3',
      title: 'Landscaping',
      description: 'Professional landscaping design, implementation, and maintenance for commercial and residential projects.'
    },
    {
      id: '4',
      title: 'Life Skills',
      description: 'Essential life skills including financial management, communication, and personal development.'
    }
  ];

  const courseData = {
    '6weeks': {
      title: '6 Week Intensive Course',
      description: 'Fast-track your skills with our comprehensive 6-week program designed for rapid learning and immediate results.',
      features: [
        'Daily interactive sessions',
        'Hands-on projects',
        'Personal mentorship',
        'Certificate of completion'
      ],
      price: '$299'
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
      price: '$899'
    }
  };

  const HomePage: React.FC = () => (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-light text-gray-400 mb-8">Home Page</h1>
      
      <div className="bg-gray-600 p-8 text-center rounded">
        <h2 className="text-xl text-gray-800 font-medium">Logo/Banner of Company</h2>
        <p className="text-sm text-gray-700 mt-2">Empowering the Nation</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="bg-gray-600 hover:bg-gray-500 transition-colors p-4 rounded text-gray-800 font-medium">
          Sign/Log In
        </button>
        <button className="bg-gray-600 hover:bg-gray-500 transition-colors p-4 rounded text-gray-800 font-medium">
          Create Acc
        </button>
      </div>

      <div className="bg-gray-600 p-8 rounded">
        <p className="text-gray-800 text-center">
          Company Goal/Mission/Purpose
          <br />
          W/Img
        </p>
      </div>

      <div className="space-y-4">
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
              <button 
                onClick={() => setCurrentPage(activeTab === '6weeks' ? 'six-weeks' : 'six-months')}
                className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded transition-colors"
              >
                View Courses
              </button>
            </div>
          </div>
        </div>
      </div>

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
  );

  const SixWeekCoursesPage: React.FC = () => (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center space-x-4 mb-8">
        <button
          onClick={() => setCurrentPage('home')}
          className="flex items-center text-gray-400 hover:text-gray-200 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>
        <h1 className="text-2xl font-light text-gray-400">Six Week Courses</h1>
      </div>

      <div className="bg-gray-600 p-4 rounded text-center">
        <h2 className="text-lg text-gray-800 font-medium">Six Week Courses</h2>
      </div>

      <div className="bg-gray-600 p-6 rounded">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Six Week Course Summary:</h3>
        <p className="text-gray-700 mb-6">
          Empowering the Nation offers the following six-week short courses designed to provide essential skills for immediate employment opportunities and personal development.
        </p>
        
        <div className="grid gap-4">
          {sixWeekCourses.map((course) => (
            <div key={course.id} className="bg-gray-500 p-4 rounded">
              <h4 className="font-semibold text-gray-800 mb-2">{course.title}</h4>
              <p className="text-gray-700 text-sm">{course.description}</p>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-gray-800 font-semibold">6 weeks • $299</span>
                <button className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded text-sm transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={() => setCurrentPage('six-months')}
          className="bg-gray-600 hover:bg-gray-500 text-gray-800 px-6 py-3 rounded transition-colors font-medium"
        >
          View 6 Month Courses
        </button>
      </div>
    </div>
  );

  const SixMonthCoursesPage: React.FC = () => (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center space-x-4 mb-8">
        <button
          onClick={() => setCurrentPage('home')}
          className="flex items-center text-gray-400 hover:text-gray-200 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>
        <h1 className="text-2xl font-light text-gray-400">Six Month Courses</h1>
      </div>

      <div className="bg-gray-600 p-4 rounded text-center">
        <h2 className="text-lg text-gray-800 font-medium">Six Month Courses</h2>
      </div>

      <div className="bg-gray-600 p-6 rounded">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Six Month Course Summary:</h3>
        <p className="text-gray-700 mb-6">
          Empowering the Nation offers the following comprehensive six-month courses designed for in-depth skill development and professional certification.
        </p>
        
        <div className="grid gap-4">
          {sixMonthCourses.map((course) => (
            <div key={course.id} className="bg-gray-500 p-4 rounded">
              <h4 className="font-semibold text-gray-800 mb-2">{course.title}</h4>
              <p className="text-gray-700 text-sm">{course.description}</p>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-gray-800 font-semibold">6 months • $899</span>
                <button className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded text-sm transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={() => setCurrentPage('six-weeks')}
          className="bg-gray-600 hover:bg-gray-500 text-gray-800 px-6 py-3 rounded transition-colors font-medium"
        >
          View 6 Week Courses
        </button>
      </div>
    </div>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'six-weeks':
        return <SixWeekCoursesPage />;
      case 'six-months':
        return <SixMonthCoursesPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 text-gray-200 p-6">
      {renderCurrentPage()}
    </div>
  );
};

export default App;