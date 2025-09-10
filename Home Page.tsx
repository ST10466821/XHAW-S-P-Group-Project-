import React, { useState } from 'react';
import { ArrowLeft, Home, BookOpen, LogIn, UserPlus, Phone, DollarSign } from 'lucide-react';

type PageType = 'home' | 'six-weeks' | 'six-months' | 'contact' | 'fees' | 'sign-in' | 'create-account';

interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
}

interface SelectedCourse {
  course: Course;
  quantity: number;
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [activeTab, setActiveTab] = useState<'6weeks' | '6months'>('6weeks');
  const [selectedCourses, setSelectedCourses] = useState<SelectedCourse[]>([]);
  const [discount, setDiscount] = useState<number>(0);

  const sixWeekCourses: Course[] = [
    {
      id: '1',
      title: 'Child Minding',
      description: 'Learn essential childcare skills and safety protocols for professional child minding.',
      price: 750,
      duration: '6 weeks'
    },
    {
      id: '2',
      title: 'Cooking',
      description: 'Master fundamental cooking techniques and kitchen safety for home and commercial use.',
      price: 750,
      duration: '6 weeks'
    },
    {
      id: '3',
      title: 'Garden Maintenance',
      description: 'Develop skills in garden care, plant maintenance, and landscape upkeep.',
      price: 750,
      duration: '6 weeks'
    }
  ];

  const sixMonthCourses: Course[] = [
    {
      id: '4',
      title: 'First Aid',
      description: 'Comprehensive first aid training with certification for emergency response and medical assistance.',
      price: 1500,
      duration: '6 months'
    },
    {
      id: '5',
      title: 'Sewing',
      description: 'Advanced sewing techniques from basic repairs to professional garment construction.',
      price: 1500,
      duration: '6 months'
    },
    {
      id: '6',
      title: 'Landscaping',
      description: 'Professional landscaping design, implementation, and maintenance for commercial and residential projects.',
      price: 1500,
      duration: '6 months'
    },
    {
      id: '7',
      title: 'Life Skills',
      description: 'Essential life skills including financial management, communication, and personal development.',
      price: 1500,
      duration: '6 months'
    }
  ];

  const allCourses = [...sixWeekCourses, ...sixMonthCourses];

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
      price: 'R750'
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
      price: 'R1500'
    }
  };

  const addCourseToSelection = (course: Course) => {
    setSelectedCourses(prev => {
      const existing = prev.find(item => item.course.id === course.id);
      if (existing) {
        return prev.map(item => 
          item.course.id === course.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { course, quantity: 1 }];
      }
    });
  };

  const updateCourseQuantity = (courseId: string, quantity: number) => {
    if (quantity <= 0) {
      setSelectedCourses(prev => prev.filter(item => item.course.id !== courseId));
    } else {
      setSelectedCourses(prev => 
        prev.map(item => 
          item.course.id === courseId 
            ? { ...item, quantity }
            : item
        )
      );
    }
  };

  const calculateTotal = () => {
    const subtotal = selectedCourses.reduce((sum, item) => sum + (item.course.price * item.quantity), 0);
    const discountAmount = (subtotal * discount) / 100;
    const vatAmount = (subtotal - discountAmount) * 0.15;
    return {
      subtotal,
      discountAmount,
      vatAmount,
      total: subtotal - discountAmount + vatAmount
    };
  };

  const NavigationBar: React.FC = () => (
    <nav className="bg-gray-700 border-b border-gray-600 mb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <button
              onClick={() => setCurrentPage('home')}
              className={`flex items-center space-x-2 px-3 py-2 rounded transition-colors ${
                currentPage === 'home' ? 'bg-gray-600 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-600'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            
            <div className="relative group">
              <button className="flex items-center space-x-2 px-3 py-2 rounded transition-colors text-gray-300 hover:text-white hover:bg-gray-600">
                <BookOpen className="w-4 h-4" />
                <span>Courses</span>
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-gray-700 border border-gray-600 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <button
                  onClick={() => setCurrentPage('six-weeks')}
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-600 hover:text-white"
                >
                  6 Week Courses
                </button>
                <button
                  onClick={() => setCurrentPage('six-months')}
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-600 hover:text-white"
                >
                  6 Month Courses
                </button>
              </div>
            </div>

            <button
              onClick={() => setCurrentPage('contact')}
              className={`flex items-center space-x-2 px-3 py-2 rounded transition-colors ${
                currentPage === 'contact' ? 'bg-gray-600 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-600'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </button>

            <button
              onClick={() => setCurrentPage('fees')}
              className={`flex items-center space-x-2 px-3 py-2 rounded transition-colors ${
                currentPage === 'fees' ? 'bg-gray-600 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-600'
              }`}
            >
              <DollarSign className="w-4 h-4" />
              <span>Fees</span>
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setCurrentPage('sign-in')}
              className={`flex items-center space-x-2 px-3 py-2 rounded transition-colors ${
                currentPage === 'sign-in' ? 'bg-gray-600 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-600'
              }`}
            >
              <LogIn className="w-4 h-4" />
              <span>Sign In</span>
            </button>
            
            <button
              onClick={() => setCurrentPage('create-account')}
              className={`flex items-center space-x-2 px-3 py-2 rounded transition-colors ${
                currentPage === 'create-account' ? 'bg-gray-600 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-600'
              }`}
            >
              <UserPlus className="w-4 h-4" />
              <span>Create Account</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

  const HomePage: React.FC = () => (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-light text-gray-400 mb-8">Home Page</h1>
      
      <div className="bg-gray-600 p-8 text-center rounded">
        <div className="flex justify-center mb-4">
          <svg viewBox="0 0 400 120" className="h-20 w-auto">
            <circle cx="60" cy="60" r="45" fill="#4B5563" stroke="#9CA3AF" strokeWidth="2"/>
            <path d="M35 45 Q35 40 40 40 L55 40 Q60 40 60 45 L60 50 L85 50 Q85 45 80 40 L65 40 Q60 40 60 45 L60 75 Q60 80 65 80 L80 80 Q85 80 85 75 L85 50 L60 50 L60 45" 
                  fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="1"/>
            <path d="M70 65 L80 55 L75 55 L75 45 L85 45 L85 55 L80 55 L70 65 Z" fill="#10B981"/>
            <path d="M45 35 L60 30 L75 35 L75 40 L70 42 L60 40 L50 42 L45 40 Z" fill="#F59E0B"/>
            <rect x="58" y="28" width="4" height="8" fill="#F59E0B"/>
            <text x="130" y="45" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#E5E7EB">
              EMPOWERING
            </text>
            <text x="130" y="75" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#E5E7EB">
              THE NATION
            </text>
            <text x="130" y="95" fontFamily="Arial, sans-serif" fontSize="12" fill="#9CA3AF" fontStyle="italic">
              Skills for Success • Education for Excellence
            </text>
            <circle cx="380" cy="20" r="3" fill="#10B981" opacity="0.7"/>
            <circle cx="370" cy="30" r="2" fill="#F59E0B" opacity="0.7"/>
            <circle cx="385" cy="35" r="2" fill="#3B82F6" opacity="0.7"/>
            <line x1="130" y1="105" x2="350" y2="105" stroke="#4B5563" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      <div className="bg-gray-600 p-8 rounded">
        <p className="text-gray-800 text-center">
          Empowering individuals through quality education and skills development.
          <br />
          Building careers, transforming lives, strengthening communities.
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
    </div>
  );

  const ContactPage: React.FC = () => (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-light text-gray-400 mb-8">Contact Details</h1>
      
      <div className="bg-gray-600 p-6 rounded">
        <h2 className="text-lg font-semibold text-gray-800 mb-6 text-center">Contact Details:</h2>
        
        <div className="space-y-4 text-gray-800">
          <div>
            <strong>Email Address:</strong>
            <p className="mt-1">info@empoweringthenation.co.za</p>
          </div>
          
          <div>
            <strong>Phone Number:</strong>
            <p className="mt-1">+27 11 123 4567</p>
          </div>
          
          <div>
            <strong>Physical Address:</strong>
            <div className="mt-1 space-y-1">
              <p>Bonifay Court, 296, Pendoring Road</p>
              <p>13, Duthie Street</p>
              <p>10, Angus Crescent</p>
            </div>
          </div>
          
          <div className="mt-6">
            <strong>Google Maps:</strong>
            <div className="mt-2 bg-gray-500 p-8 rounded text-center min-h-[300px] flex items-center justify-center">
              <div className="text-gray-700">
                <p className="font-medium">Google Maps Overview of the three</p>
                <p className="font-medium">Locations</p>
                <p className="text-sm mt-2">[Interactive map would be embedded here]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const FeesPage: React.FC = () => {
    const totals = calculateTotal();
    
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-2xl font-light text-gray-400 mb-8">Fees</h1>
        
        <div className="bg-gray-600 p-6 rounded">
          <h2 className="text-lg font-semibold text-gray-800 mb-6 text-center">Contact Details:</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-gray-800 font-medium mb-2">Name:</label>
              <input 
                type="text" 
                className="w-full p-2 bg-gray-500 rounded border border-gray-400 text-gray-800"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-800 font-medium mb-2">Email Address:</label>
              <input 
                type="email" 
                className="w-full p-2 bg-gray-500 rounded border border-gray-400 text-gray-800"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-800 font-medium mb-2">Phone Number:</label>
              <input 
                type="tel" 
                className="w-full p-2 bg-gray-500 rounded border border-gray-400 text-gray-800"
                placeholder="Enter your phone"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-600 p-6 rounded">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Available Courses</h3>
          <div className="grid gap-4 mb-6">
            {allCourses.map((course) => (
              <div key={course.id} className="bg-gray-500 p-4 rounded flex justify-between items-center">
                <div>
                  <h4 className="font-medium text-gray-800">{course.title}</h4>
                  <p className="text-sm text-gray-700">{course.duration} • R{course.price}</p>
                </div>
                <button
                  onClick={() => addCourseToSelection(course)}
                  className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded text-sm transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {selectedCourses.length > 0 && (
          <div className="bg-gray-600 p-6 rounded">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Selected Courses</h3>
            
            <div className="space-y-3 mb-6">
              {selectedCourses.map((item) => (
                <div key={item.course.id} className="bg-gray-500 p-4 rounded">
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <span className="font-medium text-gray-800">Name Of Course:</span>
                      <span className="ml-2 text-gray-700">{item.course.title}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div>
                        <span className="font-medium text-gray-800">Price:</span>
                        <span className="ml-2 text-gray-700">R{item.course.price}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateCourseQuantity(item.course.id, item.quantity - 1)}
                          className="w-6 h-6 bg-gray-700 text-white rounded text-sm hover:bg-gray-800"
                        >
                          -
                        </button>
                        <span className="text-gray-800 w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateCourseQuantity(item.course.id, item.quantity + 1)}
                          className="w-6 h-6 bg-gray-700 text-white rounded text-sm hover:bg-gray-800"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-500 p-4 rounded">
              <div className="grid grid-cols-3 gap-4 text-gray-800">
                <div>
                  <label className="block font-medium mb-2">Quantity:</label>
                  <div className="text-lg">{selectedCourses.reduce((sum, item) => sum + item.quantity, 0)}</div>
                </div>
                <div>
                  <label className="block font-medium mb-2">Discounts:</label>
                  <input
                    type="number"
                    value={discount}
                    onChange={(e) => setDiscount(Math.max(0, Math.min(100, Number(e.target.value))))}
                    className="w-full p-2 bg-gray-400 rounded border border-gray-300"
                    placeholder="0"
                    min="0"
                    max="100"
                  />
                  <span className="text-sm text-gray-700">%</span>
                </div>
                <div>
                  <label className="block font-medium mb-2">Total Amount w/VAT:</label>
                  <div className="text-xl font-bold">R{totals.total.toFixed(2)}</div>
                  <div className="text-sm text-gray-700">
                    <div>Subtotal: R{totals.subtotal.toFixed(2)}</div>
                    <div>Discount: -R{totals.discountAmount.toFixed(2)}</div>
                    <div>VAT (15%): R{totals.vatAmount.toFixed(2)}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded text-lg font-medium transition-colors">
                Proceed to Payment
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  const SignInPage: React.FC = () => (
    <div className="max-w-md mx-auto space-y-6">
      <h1 className="text-2xl font-light text-gray-400 mb-8 text-center">Sign In</h1>
      
      <div className="bg-gray-600 p-6 rounded">
        <div className="space-y-4">
          <div>
            <label className="block text-gray-800 font-medium mb-2">Email:</label>
            <input 
              type="email" 
              className="w-full p-3 bg-gray-500 rounded border border-gray-400 text-gray-800"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-800 font-medium mb-2">Password:</label>
            <input 
              type="password" 
              className="w-full p-3 bg-gray-500 rounded border border-gray-400 text-gray-800"
              placeholder="Enter your password"
            />
          </div>
          <button className="w-full bg-gray-700 hover:bg-gray-800 text-white p-3 rounded font-medium transition-colors">
            Sign In
          </button>
          <div className="text-center">
            <button
              onClick={() => setCurrentPage('create-account')}
              className="text-gray-300 hover:text-white text-sm"
            >
              Don't have an account? Create one
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const CreateAccountPage: React.FC = () => (
    <div className="max-w-md mx-auto space-y-6">
      <h1 className="text-2xl font-light text-gray-400 mb-8 text-center">Create Account</h1>
      
      <div className="bg-gray-600 p-6 rounded">
        <div className="space-y-4">
          <div>
            <label className="block text-gray-800 font-medium mb-2">Full Name:</label>
            <input 
              type="text" 
              className="w-full p-3 bg-gray-500 rounded border border-gray-400 text-gray-800"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-gray-800 font-medium mb-2">Email:</label>
            <input 
              type="email" 
              className="w-full p-3 bg-gray-500 rounded border border-gray-400 text-gray-800"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-800 font-medium mb-2">Phone:</label>
            <input 
              type="tel" 
              className="w-full p-3 bg-gray-500 rounded border border-gray-400 text-gray-800"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="block text-gray-800 font-medium mb-2">Password:</label>
            <input 
              type="password" 
              className="w-full p-3 bg-gray-500 rounded border border-gray-400 text-gray-800"
              placeholder="Create a password"
            />
          </div>
          <div>
            <label className="block text-gray-800 font-medium mb-2">Confirm Password:</label>
            <input 
              type="password" 
              className="w-full p-3 bg-gray-500 rounded border border-gray-400 text-gray-800"
              placeholder="Confirm your password"
            />
          </div>
          <button className="w-full bg-gray-700 hover:bg-gray-800 text-white p-3 rounded font-medium transition-colors">
            Create Account
          </button>
          <div className="text-center">
            <button
              onClick={() => setCurrentPage('sign-in')}
              className="text-gray-300 hover:text-white text-sm"
            >
              Already have an account? Sign in
            </button>
          </div>
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
                <span className="text-gray-800 font-semibold">6 weeks • R{course.price}</span>
                <button 
                  onClick={() => addCourseToSelection(course)}
                  className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded text-sm transition-colors"
                >
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
      {/* Add the rest of your SixMonthCoursesPage content here */}
    </div>
  );