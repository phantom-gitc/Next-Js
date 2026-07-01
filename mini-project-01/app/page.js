import React from "react";

const page = () => {
  return (
    <div className  ="flex min-h-[70vh] items-center justify-center px-6 text-center">
      <div className="max-w-xl">
        <h1 className="text-3xl font-bold text-gray-800">Hello, Next.js!</h1>
        <p className="mt-3 text-lg text-gray-600">
          This is your homepage content centered nicely.
        </p>
      </div>
    </div>
  );
};

export default page;