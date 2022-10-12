import React from 'react';

const Blog = () => {
    return (
        <section className='bg-primary pt-20 pb-20'>
            <div className='text-center text-2xl font-bold'>
                <h1>Questions and Answers</h1>
            </div>
           <div className='md:w-3/5 w-5/6 mt-10 p-10 rounded-md mx-auto bg-secondary'>
                <h2 className='text-xl font-bold'>What is the purpose of React router?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veniam quam facilis nisi neque, quia cumque quos ab quibusdam, ut nemo cum, hic similique beatae? Fugiat officia dolore dolores rerum?</p>
           </div>
           <div className='md:w-3/5 w-5/6 mt-10 p-10 rounded-md mx-auto bg-secondary'>
                <h2 className='text-xl font-bold'>How does context API works?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veniam quam facilis nisi neque, quia cumque quos ab quibusdam, ut nemo cum, hic similique beatae? Fugiat officia dolore dolores rerum?</p>
           </div>
           <div className='md:w-3/5 w-5/6 mt-10 p-10 rounded-md mx-auto bg-secondary'>
                <h2 className='text-xl font-bold'>UseHref Hooks?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veniam quam facilis nisi neque, quia cumque quos ab quibusdam, ut nemo cum, hic similique beatae? Fugiat officia dolore dolores rerum?</p>
           </div>
        </section>
    );
};

export default Blog;