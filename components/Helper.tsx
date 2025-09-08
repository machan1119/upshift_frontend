import Link from "next/link";

export function Helper() {
  return (
    <div className="ui-link-helper">
      <a
        className="ui-tooltip-link"
        href="https://upshift.uicore.co/?utm_campaign=Upshift&utm_source=Demos&utm_medium=LinkHelper"
        target="_blank"
      >
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M32 24.34a6 6 0 11-4 0V14a2 2 0 014 0v10.34zm-12-.68V34a2 2 0 01-4 0V23.66a6 6 0 114 0zM12 4h24a8 8 0 018 8v24a8 8 0 01-8 8H12a8 8 0 01-8-8V12a8 8 0 018-8zm0 4a4 4 0 00-4 4v24a4 4 0 004 4h24a4 4 0 004-4V12a4 4 0 00-4-4H12zm6 12a2 2 0 100-4 2 2 0 000 4zm12 12a2 2 0 100-4 2 2 0 000 4z"
            fill="#1C1C1C"
            fillRule="nonzero"
          />
        </svg>
        <span className="ui-tooltip">
          Features
          <span></span>
        </span>
      </a>
      <a
        className="ui-tooltip-link"
        href="https://help.uicore.co/docs/?utm_campaign=Upshift&utm_source=Demos&utm_medium=LinkHelper"
        target="_blank"
      >
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24 39.95L11.13 37.1A4 4 0 018 33.2V12a4 4 0 014-4h6a2 2 0 100-4h-6a8 8 0 00-8 8v21.19a8 8 0 006.26 7.8L24 44.06 37.74 41A8 8 0 0044 33.19V12a8 8 0 00-8-8h-6a8 8 0 00-8 8v22a2 2 0 004 0V12a4 4 0 014-4h6a4 4 0 014 4v21.19a4 4 0 01-3.13 3.9L24 39.95z"
            fill="#1C1C1C"
            fillRule="nonzero"
          />
        </svg>
        <span className="ui-tooltip">
          Read Documentation
          <span></span>
        </span>
      </a>
      <a
        className="ui-tooltip-link"
        href="https://help.uicore.co?utm_campaign=Upshift&utm_source=Demos&utm_medium=LinkHelper"
        target="_blank"
      >
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24 42a2 2 0 01-4 0v-2a8 8 0 018-8h8a4 4 0 004-4V12a4 4 0 00-4-4H12a4 4 0 00-4 4v16a4 4 0 004 4h2a2 2 0 010 4h-2a8 8 0 01-8-8V12a8 8 0 018-8h24a8 8 0 018 8v16a8 8 0 01-8 8h-8a4 4 0 00-4 4v2zm0-20a2 2 0 110-4 2 2 0 010 4zm-8 0a2 2 0 110-4 2 2 0 010 4zm16 0a2 2 0 110-4 2 2 0 010 4z"
            fill="#1C1C1C"
            fillRule="nonzero"
          />
        </svg>
        <span className="ui-tooltip">
          Support
          <span></span>
        </span>
      </a>
      <a
        className="ui-tooltip-link"
        href="https://1.envato.market/75jMzO"
        target="_blank"
      >
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 8a2 2 0 110-4h2a8 8 0 018 8v16a4 4 0 004 4h16a4 4 0 004-4v-8a4 4 0 00-4-4H22a2 2 0 110-4h14a8 8 0 018 8v8a8 8 0 01-8 8H20a8 8 0 01-8-8V12a4 4 0 00-4-4H6zm31 36a3 3 0 110-6 3 3 0 010 6zm-18 0a3 3 0 110-6 3 3 0 010 6z"
            fill="#1C1C1C"
            fillRule="nonzero"
          />
        </svg>
        <span className="ui-tooltip">
          Purchase Upshift
          <span></span>
        </span>
      </a>
    </div>
    // <div className=" fixed right-0 top-[calc(50vh-111px)] flex flex-col bg-white w-[45px] border-l-[5px] border-[#EAEAEA] z-[99]">
    //   <Link
    //     href=""
    //     className="relative group flex justify-center h-[44px] transition-all duration-300 ease-in"
    //   >
    //     <svg
    //       viewBox="0 0 48 48"
    //       className="w-[22px] h-[20px]"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         d="M32 24.34a6 6 0 11-4 0V14a2 2 0 014 0v10.34zm-12-.68V34a2 2 0 01-4 0V23.66a6 6 0 114 0zM12 4h24a8 8 0 018 8v24a8 8 0 01-8 8H12a8 8 0 01-8-8V12a8 8 0 018-8zm0 4a4 4 0 00-4 4v24a4 4 0 004 4h24a4 4 0 004-4V12a4 4 0 00-4-4H12zm6 12a2 2 0 100-4 2 2 0 000 4zm12 12a2 2 0 100-4 2 2 0 000 4z"
    //         fill="#1C1C1C"
    //         fillRule="nonzero"
    //       ></path>
    //     </svg>
    //     <span className="hidden group-hover:block transform scale-[70%] absolute bg-white text-[13px] py-5 font-medium leading-[36px] tracking-[0.1px] right-[10px] top-[4px] rounded-[3px] whitespace-nowrap text-[#794AFF]">
    //       Features
    //     </span>
    //   </Link>
    // </div>
  );
}
