import React from "react";

const StitchedTitle = ({ title }: { title: string }) => {
  return (
    <div className="bg-[#8fffc7] rounded-md p-1">
      <div className="border-dashed border-darkgreen border-2 box-content">
        <p className="text-center text-darkgreen text-3xl max-sm:text-2xl font-extrabold py-2">
          {title}
        </p>
      </div>
    </div>
  );
};

export default StitchedTitle;
