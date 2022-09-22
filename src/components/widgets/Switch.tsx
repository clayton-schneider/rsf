import React, { useState } from "react";

interface props {
  trueOption: {
    title: string;
    steps: string[];
  };
  falseOption: {
    title: string;
    steps: string[];
  };
  classes?: string;
}

export default function Switch({ trueOption, falseOption, classes }: props) {
  const [isTrue, toggleTrue] = useState(true);

  return (
    <div className={classes + ""}>
      <p className="font-bold text-xl">
        Donate By {isTrue ? trueOption.title : falseOption.title}:
      </p>
      <label
        onClick={() => toggleTrue(!isTrue)}
        htmlFor="default-toggle"
        className="inline-flex relative items-center cursor-pointer"
      >
        <input
          type="checkbox"
          value=""
          id="default-toggle"
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-secondary  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-primary"></div>
        <span className="ml-3 text-sm font-bold">Donate Online</span>
      </label>
      {/* Insert Steps */}
      <div className="mt-4 space-y-2">
        {trueOption.steps.map((step, index) => (
          <div className="flex" key={`step-${index}`}>
            <p className=" bg-primary text-white font-bold text-sm min-w-[36px] w-9 h-9 rounded-full leading-[36px] text-center">
              {index + 1}
            </p>

            {/* prettier-ignore */}
            <p className="inline-block ml-2 leading-none whitespace-pre-line  text-xl"><span>{step}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}
