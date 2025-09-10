import SixMonthCoursesPage from './XHAWGROUPPROD/components/6 months courses';
import SixWeekCoursesPage from './XHAWGROUPPROD/components/6 week courses';
import HomePage from './XHAWGROUPPROD/components/HomePage';
import CreateAccountPage from './XHAWGROUPPROD/components/CreateAccountPage';
import SignInPage from './XHAWGROUPPROD/components/SignInPage';
import ContactPage from './XHAWGROUPPROD/components/ContactPage';
import FeesPage from './XHAWGROUPPROD/components/FeesPage';
import React from 'react';

export default function renderCurrentPage(currentPage: string, setCurrentPage: (page: string) => void) {
    switch (currentPage) {
        case 'home': return <HomePage />;
        case 'six-weeks': return <SixWeekCoursesPage />;
        case 'six-months': return <SixMonthCoursesPage />;
        case 'contact': return <ContactPage />;
        case 'fees': return <FeesPage />;
        case 'sign-in': return <SignInPage setCurrentPage={setCurrentPage} />;
        case 'create-account': return <CreateAccountPage setCurrentPage={setCurrentPage} />;
        default: return <HomePage />;
    }
}