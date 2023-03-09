import * as React from 'react';
import Search from '../rightItem/search';
import Youmightlike from './youmightlike';
import TrendingsProfile from './trendingsProfile';

export interface RightProfileComponentProps {
}

export default function RightProfileComponent(props: RightProfileComponentProps) {
  return (
    <div className='flex-auto w-rightitem pb-96'>
      <div className="sticky top-0 z-10">
        <Search />
      </div>
      <div className="h-80 sticky top-300" >
        <Youmightlike />
      </div>
      <div className="h-715 sticky top-300" >
        <TrendingsProfile />
      </div>
    </div>
  );
}