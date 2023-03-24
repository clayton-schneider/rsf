import React, { useState, useEffect } from "react";

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

  const [selectedOption, setSelectedOption] = useState(trueOption);

  const handleChange = () => {
    toggleTrue(() => !isTrue);
  };
  useEffect(() => {
    setSelectedOption(() => (isTrue ? trueOption : falseOption));
  }, [isTrue]);
  return (
    <div className={classes + ""}>
      <p className="text-xl font-bold">Donate {selectedOption.title}:</p>
      <label
        onChange={() => handleChange()}
        className="relative inline-flex cursor-pointer items-center"
      >
        <input type="checkbox" defaultChecked={true} className="peer sr-only" />
        <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px]  after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4  peer-focus:ring-secondary"></div>
        <span className="ml-3 text-sm font-bold">Donate Online</span>
      </label>
      {/* Insert Steps */}
      <div className="mt-4 space-y-3">
        {selectedOption.steps.map((step, index) => (
          <div className="flex" key={`step-${index}`}>
            <p className=" h-9 w-9 min-w-[36px] rounded-full bg-primary text-center text-sm font-bold leading-[36px] text-white">
              {index + 1}
            </p>

            {/* prettier-ignore */}
            <p className="inline-block ml-2 whitespace-pre-line"><span>{step}</span></p>
          </div>
        ))}

        {/* Render Paypal*/}
        {isTrue && (
          <a
            href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=roxburyscholarshipfoundation@gmail.com&lc=US&no_note=0&cn=&curency_code=USD&bn=PP-DonationsBF:btn_donateCC_LG.gif:NonHosted"
            target="_blank"
            className="mt-2 inline-block rounded border-2 border-transparent bg-primary py-2 px-4 text-sm uppercase tracking-widest text-white transition-all duration-300 hover:border-2 hover:border-primary hover:bg-transparent hover:text-primary"
          >
            Donate Online
          </a>
        )}
      </div>
    </div>
  );
}
