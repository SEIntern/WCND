
const ProgressIndicator = ({ currentStep, isCompleted }) => {
  return (
    <div className="mb-8 sm:mb-12 lg:mb-[20px] mt-8 sm:mt-12 lg:mt-[112px] w-full px-2">
      <div className="flex items-center justify-between w-full relative" style={{ minWidth: 0 }}>
        {/* Background line */}
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-300 -translate-y-1/2 z-0" />

        {/* Active line */}
        <div
          className="absolute left-0 top-1/2 h-0.5 bg-[#972620] -translate-y-1/2 z-10"
          style={{
            width: `${Math.min(((currentStep - 1) / 4) * 100, 100)}%`,
          }}
        />

        {/* Circles */}
        {[1, 2, 3, 4, 5].map((step) => (
          <div
            key={step}
            className={`relative flex items-center justify-center z-20
              w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full
              ${
                isCompleted || step < currentStep
                  ? "bg-[#972620] text-white"
                  : step === currentStep
                  ? "bg-white border-2 border-[#972620]"
                  : "bg-gray-300"
              }`}
          >
            {isCompleted || step < currentStep ? (
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : step === currentStep ? (
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#972620] rounded-full"></div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressIndicator