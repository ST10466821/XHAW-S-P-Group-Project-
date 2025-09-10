import SixMonthCoursesPage from './SixMonthCoursesPage';
import SixWeekCoursesPage from './SixWeekCoursesPage';
import HomePage from './HomePage';
import CreateAccountPage from './CreateAccountPage';
import SignInPage from './SignInPage';
import ContactPage from './ContactPage';
import FeesPage from './FeesPage';
import React from 'react';

export default function renderCurrentPage(currentPage: string) {
const renderCurrentPage = (currentPage: string) => {
    switch (currentPage) {
        case 'home': return <HomePage />;
        case 'six-weeks': return <SixWeekCoursesPage />;
        case 'six-months': return <SixMonthCoursesPage />;
        case 'contact': return <ContactPage />;
        case 'fees': return <FeesPage />;
        case 'sign-in': return <SignInPage />;
        case 'create-account': return <CreateAccountPage />;
        default: return <HomePage />;
    }
    };