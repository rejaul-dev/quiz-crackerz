import React from 'react';

const Blog = () => {
    return (
        <section className='bg-primary pt-20 pb-20'>
            <div className='text-center text-2xl font-bold'>
                <h1>Questions and Answers</h1>
            </div>
           <div className='md:w-3/5 w-5/6 mt-10 p-10 rounded-md mx-auto bg-secondary'>
                <h2 className='text-xl font-bold'>What is the purpose of React router?</h2>
                <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
           </div>
           <div className='md:w-3/5 w-5/6 mt-10 p-10 rounded-md mx-auto bg-secondary'>
                <h2 className='text-xl font-bold'>How does context API works?</h2>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
           </div>
           <div className='md:w-3/5 w-5/6 mt-10 p-10 rounded-md mx-auto bg-secondary'>
                <h2 className='text-xl font-bold'>UseHref Hooks?</h2>
                <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
           </div>
        </section>
    );
};

export default Blog;