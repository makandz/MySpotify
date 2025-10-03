import React, { useMemo, useState } from "react";

function SlidingTabs({
  className = "",
  tabs = [],
  onChange = () => {},
  ...newProps
}) {
  const [activeTab, setActiveTab] = useState(0);
  const numTabs = tabs.length || 1;

  const sliderStyle = useMemo(
    () => ({
      width: `${100 / numTabs}%`,
      transform: `translateX(${activeTab * 100}%)`,
    }),
    [activeTab, numTabs]
  );

  const tabBase =
    "flex-1 text-center font-medium pb-3 cursor-pointer hover:text-blue-400";

  return (
    <div
      className={`${className} w-full flex border-b border-gray-300 relative`}
      {...newProps}
    >
      {tabs.map((t, index) => {
        const isObject = typeof t === "object";
        const name = isObject ? t.label : t;
        const value = isObject ? t.value : t;
        const icon = isObject ? t.icon : null;
        return (
          <button
            type="button"
            key={`${value}-${index}`}
            className={`${tabBase} ${
              activeTab === index ? "text-blue-400" : ""
            }`}
            onClick={() => {
              if (activeTab !== index) {
                setActiveTab(index);
                onChange(value);
              }
            }}
          >
            {icon ? (
              <span className="inline-block mr-2">
                {React.cloneElement(icon, { className: "mr-2" })}
              </span>
            ) : null}
            {name}
          </button>
        );
      })}
      <span
        className="block absolute bottom-0 left-0 h-1 bg-blue-400 transition-transform duration-300 ease-out"
        style={sliderStyle}
      />
    </div>
  );
}

export default SlidingTabs;
