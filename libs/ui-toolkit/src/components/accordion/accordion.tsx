import React, { useRef, useState } from 'react';

export interface AccordionProps {
  title: React.ReactNode;
  content: React.ReactNode;
}

export const AccordionPanel = ({ title, content }: AccordionProps) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('0px');
  const [rotate, setRotate] = useState(
    'transform duration-300 ease rotate-180'
  );

  const contentSpace = useRef(null);

  const toggleAccordion = () => {
    setActive((prevState) => !prevState);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`);
    setRotate(
      active
        ? 'transform duration-300 ease rotate-180'
        : 'transform duration-300 ease'
    );
  };

  return (
    <div className="flex flex-col">
      <button
        data-testid="accordion-toggle"
        className="py-2 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between border-b border-muted"
        onClick={toggleAccordion}
      >
        <p
          className="inline-block text-footnote font-bold text-h6 text-black dark:text-white pt-5 "
          data-testid="accordion-title"
        >
          {title}
        </p>
        <svg
          width="20"
          height="20"
          aria-label="chevron icon"
          data-testid="accordion-chevron-icon"
          className={`${rotate} inline-block fill-black dark:fill-white`}
          viewBox="0 0 20 20"
          fill="fillCurrent"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="12" width="2" height="2" />
          <rect x="5" y="10" width="2" height="2" />
          <rect x="7" y="8" width="2" height="2" />
          <rect x="9" y="6" width="2" height="2" />
          <rect x="11" y="8" width="2" height="2" />
          <rect x="13" y="10" width="2" height="2" />
          <rect x="15" y="12" width="2" height="2" />
        </svg>
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        data-testid="accordion-content-ref"
        className="overflow-auto transition-max-height duration-300 ease-in-out"
      >
        <div className="pb-5" data-testid="accordion-content">
          {content}
        </div>
      </div>
    </div>
  );
};