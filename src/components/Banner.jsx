import React from "react";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[60vh] max-w-6xl mx-auto my-5">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="w-1/2   flex justify-center items-center">
          <img
            src="https://png.pngtree.com/png-clipart/20250116/original/pngtree-smiling-professional-avatar-png-image_20142973.png"
            className="w-lg rounded-lg  "
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-7xl font-bold">Rasel Ahmed</h1>
          <h1 className="text-2xl font-smbold">Fontent Developer</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
