import React from "react";

type Props = {};

const landing = (props: Props) => {
  return (
    <div className="relative">
      <nav> 
        <div className=" relative w-[22.54688rem] h-[3.25rem] shrink-0">
          <div className="text-black font-jost text-4xl not-italic font-medium leading-normal">
            discover
          </div>
          <div className="h-[2.2338rem]  w-[2.23438rem] absolute shrink-0 left-[18.3rem] top-[0.38rem] bottom-[0.64 rem]">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M27.6935 32.0257L17.9373 22.3062C17.1675 22.902 16.2675 23.3677 15.2373 23.7031C14.2071 24.038 13.1334 24.2054 12.0162 24.2054C9.13596 24.2054 6.70288 23.2125 4.71697 21.2266C2.73105 19.2407 1.7381 16.8326 1.7381 14.0024C1.7381 11.1472 2.73105 8.72658 4.71697 6.74066C6.70288 4.75416 9.12345 3.7609 11.9787 3.7609C14.8089 3.7609 17.217 4.75416 19.2029 6.74066C21.1894 8.72658 22.1826 11.1472 22.1826 14.0024C22.1826 15.0945 22.0212 16.1373 21.6982 17.1305C21.3753 18.1232 20.8912 19.0416 20.2459 19.8859L30.0396 29.6797L27.6935 32.0257ZM11.9787 20.8914C13.9151 20.8914 15.5474 20.2211 16.8755 18.8805C18.2037 17.5398 18.8677 15.9138 18.8677 14.0024C18.8677 12.0659 18.2037 10.4336 16.8755 9.10553C15.5474 7.77682 13.9151 7.11246 11.9787 7.11246C10.0172 7.11246 8.37866 7.77682 7.06306 9.10553C5.74746 10.4336 5.08966 12.0659 5.08966 14.0024C5.08966 15.9138 5.74746 17.5398 7.06306 18.8805C8.37866 20.2211 10.0172 20.8914 11.9787 20.8914Z" fill="black"/>
</svg>
          </div>

        </div>

      </nav>
        {/* p tag */}
        <div className="absolute  w-[22.54688rem] h-[3.25rem] left-[0.06rem] top-[3.4rem]">
        Choose five or more accounts below, 
to help us curate your personalised feed.
        </div>

      {/* brand card */}

      
    </div>
  );
};

export default landing;