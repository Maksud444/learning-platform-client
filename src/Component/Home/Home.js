import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
     

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://angfuzsoft.com/wordpress/acadu/wp-content/uploads/2022/10/about_v2_3_1.jpg" className="max-w-sm w-100 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Summary Of The Course
Scientific Calculation With Python</h1>
      <p className="py-6">Description:Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.It is used for:web development (server-side),software development,mathematics The most recent major version of Python is Python 3, which we shall be using in this tutorial. However, Python 2, although not being updated with anything other than security updates, is still quite popular</p>
      <button className="btn btn-active">See All Courses</button>
    </div>
  </div>
</div>

<div className="stats shadow">
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current text-blue-500"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div className="stat-title">Downloads</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current text-black"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
    </div>
    <div className="stat-title">New Users</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current text-amber-300"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
        </div>
    );
};

export default Home; 