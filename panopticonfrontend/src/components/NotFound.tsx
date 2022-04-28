import React from "react";


function NotFound() {
    return (
        <div className='bg-center min-h-screen max-h-screen bg-auto bg-fixed' style={{
            backgroundImage: `url("/404-page-image.png")`,
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="relative px-7 py-6 ring-1 ring-gray-900/5 rounded-lg leading-none flex h-screen items-top justify-center space-x-6 m-auto">
                <h1 className="text-3xl font-bold">
                    Oops. Looks like you took a wrong turn. Page not Found! :(
                </h1 >


            </div>
        </div>
    );
}

export default NotFound;