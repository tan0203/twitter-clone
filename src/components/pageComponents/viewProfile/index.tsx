import * as React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import RightitemComponent from '../Home/rightItem';
import SidebarComponent from 'components/layout/SideBar';
import { AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai'
import { MdComment } from 'react-icons/md'
import { BsDot, BsUpload } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'
import { FiMoreHorizontal, FiBarChart2 } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import { TiTick } from 'react-icons/ti'
import ProfileInfo from 'constants/profileInfo'
import { listMenuProfile } from 'constants/listMenuProfile';
import { Link } from 'react-router-dom';

export interface  ProfileComponentProps {
}
const itemposts = [
  {
      topic: "You might like",
      username: "User Name",
      useid: "UserID",
      status: "Beach Beautyfull",
      imgulr: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
      imgPosturl: "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
      comment: 50,
      tweet: 51,
      like: 52,
      view: 53,
      describe: 'biographical description',
      following: 1.125,
      follower: '12m',
  },{
      topic: "You might like",
      username: "User Name",
      useid: "UserID",
      status: "Beach Beautyfull",
      imgulr: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
      imgPosturl: "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
      comment: 50,
      tweet: 51,
      like: 52,
      view: 53,
      describe: 'biographical description',
      following: 1.125,
      follower: '12m',
  },
  {
      topic: "You might like",
      username: "User Name",
      useid: "UserID",
      status: "Beach Beautyfull",
      imgulr: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
      imgPosturl: "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
      comment: 50,
      tweet: 51,
      like: 52,
      view: 53,
      describe: 'biographical description',
      following: 1.125,
      follower: '12m',
  },
  {
      topic: "You might like",
      username: "User Name",
      useid: "UserID",
      status: "Beach Beautyfull",
      imgulr: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
      imgPosturl: "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
      comment: 50,
      tweet: 51,
      like: 52,
      view: 53,
      describe: 'biographical description',
      following: 1.125,
      follower: '12m',
  },
  {
      topic: "You might like",
      username: "User Name",
      useid: "UserID",
      status: "Beach Beautyfull",
      imgulr: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
      imgPosturl: "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
      comment: 50,
      tweet: 51,
      like: 52,
      view: 53,
      describe: 'biographical description',
      following: 1.125,
      follower: '12m',
  },{
      topic: "You might like",
      username: "User Name",
      useid: "UserID",
      status: "Beach Beautyfull",
      imgulr: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
      imgPosturl: "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
      comment: 50,
      tweet: 51,
      like: 52,
      view: 53,
      describe: 'biographical description',
      following: 1.125,
      follower: '12m',
  },
  {
      topic: "You might like",
      username: "User Name",
      useid: "UserID",
      status: "Beach Beautyfull",
      imgulr: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
      imgPosturl: "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
      comment: 50,
      tweet: 51,
      like: 52,
      view: 53,
      describe: 'biographical description',
      following: 1.125,
      follower: '12m',
  },
  {
      topic: "You might like",
      username: "User Name",
      useid: "UserID",
      status: "Beach Beautyfull",
      imgulr: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
      imgPosturl: "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
      comment: 50,
      tweet: 51,
      like: 52,
      view: 53,
      describe: 'biographical description',
      following: 1.125,
      follower: '12m',
  },
  {
      topic: "You might like",
      username: "User Name",
      useid: "UserID",
      status: "Beach Beautyfull",
      imgulr: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
      imgPosturl: "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
      comment: 50,
      tweet: 51,
      like: 52,
      view: 53,
      describe: 'biographical description',
      following: 1.125,
      follower: '12m',
  },{
      topic: "You might like",
      username: "User Name",
      useid: "UserID",
      status: "Beach Beautyfull",
      imgulr: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
      imgPosturl: "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
      comment: 50,
      tweet: 51,
      like: 52,
      view: 53,
      describe: 'biographical description',
      following: 1.125,
      follower: '12m',
  },
  {
      topic: "You might like",
      username: "User Name",
      useid: "UserID",
      status: "Beach Beautyfull",
      imgulr: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
      imgPosturl: "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
      comment: 50,
      tweet: 51,
      like: 52,
      view: 53,
      describe: 'biographical description',
      following: 1.125,
      follower: '12m',
  },
  {
      topic: "You might like",
      username: "User Name",
      useid: "UserID",
      status: "Beach Beautyfull",
      imgulr: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
      imgPosturl: "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
      comment: 50,
      tweet: 51,
      like: 52,
      view: 53,
      describe: 'biographical description',
      following: 1.125,
      follower: '12m',
  },{
      topic: "You might like",
      username: "User Name",
      useid: "UserID",
      status: "Beach Beautyfull",
      imgulr: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
      imgPosturl: "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
      comment: 50,
      tweet: 51,
      like: 52,
      view: 53,
      describe: 'biographical description',
      following: 1.125,
      follower: '12m',
  },{
      topic: "You might like",
      username: "User Name",
      useid: "UserID",
      status: "Beach Beautyfull",
      imgulr: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
      imgPosturl: "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
      comment: 50,
      tweet: 51,
      like: 52,
      view: 53,
      describe: 'biographical description',
      following: 1.125,
      follower: '12m',
  },
  {
      topic: "You might like",
      username: "User Name",
      useid: "UserID",
      status: "Beach Beautyfull",
      imgulr: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
      imgPosturl: "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
      comment: 50,
      tweet: 51,
      like: 52,
      view: 53,
      describe: 'biographical description',
      following: 1.125,
      follower: '12m',
  },
  {
      topic: "You might like",
      username: "User Name",
      useid: "UserID",
      status: "Beach Beautyfull",
      imgulr: "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
      imgPosturl: "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
      comment: 50,
      tweet: 51,
      like: 52,
      view: 53,
      describe: 'biographical description',
      following: 1.125,
      follower: '12m',
  }
]

const myElement = document.getElementById("myElement");
const scrollPosition = myElement?.scrollTop;

export default function ViewProfileComponent (props:  ProfileComponentProps) {
  return (
    <>
    <div className='flex justify-center'> 
      <SidebarComponent/>
      <div className='flex-auto w-viewpost border-x  '>
      <div className="border-x border-gray-500 relative ">
        <div className="w-full h-14 bg-opacity-90 hover:cursor-pointer flex py-1 fixed bg-white z-10 ">
            <a href="./"><i className="fa-solid fa-arrow-left text-gray-900 hover:bg-stone-200 p-3 m-1 h-9 w-9 rounded-full "></i></a>
            <div className="ml-4">
             <p className="text-lg text-black font-bold ">Tân Lê Ngọc</p>
             <p className="text-sm text-gray-600">0 Tweets</p>
            </div>
        </div>
         <div >
            <div className="bg-gray-300 h-64 w-full pt-14">
              <img src= "https://pbs.twimg.com/media/FpWe_9VWIAEPAaM?format=jpg&name=small" alt="" className="h-full w-full" />
            </div>
            <div className='h-36 w-36 rounded-full bg-white absolute top-44 left-5 border-4 border-white hover:bg-gray-200 '>
              <img src= "https://pbs.twimg.com/media/FpWe_9VWIAEPAaM?format=jpg&name=small" alt="" className="h-full w-full rounded-full hover:opacity-80" />
            </div>
            <div className='text-right mt-3 mr-6'>
              <button className="h-9 w-9  rounded-full border border-gray-400 hover:bg-gray-200">
                  <i className="fa-solid fa-ellipsis text-black "></i>
              </button>
              <button className="h-9 w-20 bg-gray-900 rounded-full text-white font-bold ml-3 hover:bg-gray-800">Follow</button>
            </div>
            <div className='ml-7 mt-10'>
                <p className='text-lg text-black font-bold'>Tân Lê Ngọc</p>
                <p className='text-sm text-gray-600'>@TnLNgc5</p>
            </div>
            <div className=' mt-2 ml-5'>
              <div className='flex text-gray-600 p-2'>
                <i className="fa-solid fa-calendar-days mr-2 mt-1 "></i>
                <p>Joined April 2014</p>
              </div>
              <div className='flex text-sm ml-2  text-gray-600'>
                <div className='no-underline hover:underline'>
                  <span className='font-bold mr-1 text-black'>7</span>
                  <a href="./" className='mr-4'>Following</a>
                </div>
                <div className='no-underline hover:underline'>
                  <span className='font-bold mr-1 text-black'>7</span>
                  <a href="./">Follower</a>
                </div>
              </div>
            </div>
        </div>
          <div>
          <div className='flex items-center h-14 text-sm border-b mt-3'>
          {/* <p className='flex items-center justify-center hover:bg-gray-200 h-full text-base font-bold w-1/5 cursor-pointer'>
            <span >
              <p className='my-2'>Tweets</p>
              <div className='bg-tweet w-full h-1  rounded-full'></div>
            </span>
          </p>
          <p className='flex items-center justify-center text-gray-500 hover:bg-gray-200 text-base font-bold h-full w-2/5 cursor-pointer'>Tweets & replies</p>
          <p className='flex items-center justify-center text-gray-500 hover:bg-gray-200 text-base font-bold h-full w-1/5 cursor-pointer'>Media</p>
          <p className='flex items-center justify-center text-gray-500 hover:bg-gray-200 text-base font-bold h-full w-1/5 cursor-pointer'>Likes</p> */}
        <ul className='flex h-16 w=full'>
          {listMenuProfile.map((item) => (
            <li
              className={' '}
              key={item.key}
              
            >
              <Link to={item.path??''}>
              <span className='items-center justify-center text-gray-500 hover:bg-gray-200 text-base font-bold cursor-pointer'>
                {item.title}
              </span>
              </Link>
            </li>
          ))}
        </ul>
        </div>
          </div>
        </div>
      </div>
      <RightitemComponent/>
    </div>
    </>                                     
  );
}
