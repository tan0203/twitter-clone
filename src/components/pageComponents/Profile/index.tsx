import React, { useEffect } from "react";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import RightitemComponent from "../Home/rightItem";
import SidebarComponent from "components/layout/SideBar";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { MdComment } from "react-icons/md";
import { BsDot, BsUpload } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FiMoreHorizontal, FiBarChart2 } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import ProfileInfo from "constants/profileInfo";
import ProfilePage from "pages/Profile";
import ViewProfileComponent from "../viewProfile";
import RightProfileComponent from "../Home/rightProfile";

export interface ProfileComponentProps {}
const itemposts = [
  {
    topic: "You might like",
    username: "User Name",
    useid: "UserID",
    status: "Beach Beautyfull",
    imgulr:
      "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
    imgPosturl:
      "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
    comment: 50,
    tweet: 51,
    like: 52,
    view: 53,
    describe: "biographical description",
    following: 1.125,
    follower: "12m",
  },
  {
    topic: "You might like",
    username: "User Name",
    useid: "UserID",
    status: "Beach Beautyfull",
    imgulr:
      "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
    imgPosturl:
      "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
    comment: 50,
    tweet: 51,
    like: 52,
    view: 53,
    describe: "biographical description",
    following: 1.125,
    follower: "12m",
  },
  {
    topic: "You might like",
    username: "User Name",
    useid: "UserID",
    status: "Beach Beautyfull",
    imgulr:
      "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
    imgPosturl:
      "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
    comment: 50,
    tweet: 51,
    like: 52,
    view: 53,
    describe: "biographical description",
    following: 1.125,
    follower: "12m",
  },
  {
    topic: "You might like",
    username: "User Name",
    useid: "UserID",
    status: "Beach Beautyfull",
    imgulr:
      "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
    imgPosturl:
      "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
    comment: 50,
    tweet: 51,
    like: 52,
    view: 53,
    describe: "biographical description",
    following: 1.125,
    follower: "12m",
  },
  {
    topic: "You might like",
    username: "User Name",
    useid: "UserID",
    status: "Beach Beautyfull",
    imgulr:
      "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
    imgPosturl:
      "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
    comment: 50,
    tweet: 51,
    like: 52,
    view: 53,
    describe: "biographical description",
    following: 1.125,
    follower: "12m",
  },
  {
    topic: "You might like",
    username: "User Name",
    useid: "UserID",
    status: "Beach Beautyfull",
    imgulr:
      "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
    imgPosturl:
      "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
    comment: 50,
    tweet: 51,
    like: 52,
    view: 53,
    describe: "biographical description",
    following: 1.125,
    follower: "12m",
  },
  {
    topic: "You might like",
    username: "User Name",
    useid: "UserID",
    status: "Beach Beautyfull",
    imgulr:
      "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
    imgPosturl:
      "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
    comment: 50,
    tweet: 51,
    like: 52,
    view: 53,
    describe: "biographical description",
    following: 1.125,
    follower: "12m",
  },
  {
    topic: "You might like",
    username: "User Name",
    useid: "UserID",
    status: "Beach Beautyfull",
    imgulr:
      "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
    imgPosturl:
      "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
    comment: 50,
    tweet: 51,
    like: 52,
    view: 53,
    describe: "biographical description",
    following: 1.125,
    follower: "12m",
  },
  {
    topic: "You might like",
    username: "User Name",
    useid: "UserID",
    status: "Beach Beautyfull",
    imgulr:
      "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
    imgPosturl:
      "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
    comment: 50,
    tweet: 51,
    like: 52,
    view: 53,
    describe: "biographical description",
    following: 1.125,
    follower: "12m",
  },
  {
    topic: "You might like",
    username: "User Name",
    useid: "UserID",
    status: "Beach Beautyfull",
    imgulr:
      "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
    imgPosturl:
      "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
    comment: 50,
    tweet: 51,
    like: 52,
    view: 53,
    describe: "biographical description",
    following: 1.125,
    follower: "12m",
  },
  {
    topic: "You might like",
    username: "User Name",
    useid: "UserID",
    status: "Beach Beautyfull",
    imgulr:
      "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
    imgPosturl:
      "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
    comment: 50,
    tweet: 51,
    like: 52,
    view: 53,
    describe: "biographical description",
    following: 1.125,
    follower: "12m",
  },
  {
    topic: "You might like",
    username: "User Name",
    useid: "UserID",
    status: "Beach Beautyfull",
    imgulr:
      "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
    imgPosturl:
      "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
    comment: 50,
    tweet: 51,
    like: 52,
    view: 53,
    describe: "biographical description",
    following: 1.125,
    follower: "12m",
  },
  {
    topic: "You might like",
    username: "User Name",
    useid: "UserID",
    status: "Beach Beautyfull",
    imgulr:
      "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
    imgPosturl:
      "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
    comment: 50,
    tweet: 51,
    like: 52,
    view: 53,
    describe: "biographical description",
    following: 1.125,
    follower: "12m",
  },
  {
    topic: "You might like",
    username: "User Name",
    useid: "UserID",
    status: "Beach Beautyfull",
    imgulr:
      "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
    imgPosturl:
      "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
    comment: 50,
    tweet: 51,
    like: 52,
    view: 53,
    describe: "biographical description",
    following: 1.125,
    follower: "12m",
  },
  {
    topic: "You might like",
    username: "User Name",
    useid: "UserID",
    status: "Beach Beautyfull",
    imgulr:
      "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
    imgPosturl:
      "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
    comment: 50,
    tweet: 51,
    like: 52,
    view: 53,
    describe: "biographical description",
    following: 1.125,
    follower: "12m",
  },
  {
    topic: "You might like",
    username: "User Name",
    useid: "UserID",
    status: "Beach Beautyfull",
    imgulr:
      "https://pbs.twimg.com/profile_images/1625663289928847361/38_k4q3E_normal.png",
    imgPosturl:
      "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*",
    comment: 50,
    tweet: 51,
    like: 52,
    view: 53,
    describe: "biographical description",
    following: 1.125,
    follower: "12m",
  },
];

export default function ProfileComponent(props: ProfileComponentProps) {
  function BackButton() {
    useEffect(() => {
      const handleBackButton = () => {
        window.history.back();
      };
      window.addEventListener("popstate", handleBackButton);
      return () => {
        window.removeEventListener("popstate", handleBackButton);
      };
    }, []);
  }
  return (
    <>
      <div className="flex justify-center">
        <SidebarComponent />
        <div className="flex-auto w-viewpost border-x  ">
          <div className=" border-gray-500 relative ">
            <div className="w-full h-14 bg-opacity-90 hover:cursor-pointer flex py-1 fixed bg-white z-10 ">
              <a
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                  window.history.back();
                }}
              >
                <i className="fa-solid fa-arrow-left text-gray-900 hover:bg-stone-200 p-3 m-1 h-9 w-9 rounded-full "></i>
              </a>
              <div className="ml-4">
                <p className="text-lg text-black font-bold ">Tân Lê Ngọc</p>
                <p className="text-sm text-gray-600">0 Tweets</p>
              </div>
            </div>
            <div>
              <div className="bg-gray-300 h-64 w-full pt-14">
                <img
                  src="https://pbs.twimg.com/media/FpWe_9VWIAEPAaM?format=jpg&name=small"
                  alt=""
                  className="h-full w-full"
                />
              </div>
              <div className="h-36 w-36 rounded-full bg-white absolute top-44 left-5 border-4 border-white hover:bg-gray-200 ">
                <img
                  src="https://pbs.twimg.com/media/FpWe_9VWIAEPAaM?format=jpg&name=small"
                  alt=""
                  className="h-full w-full rounded-full hover:opacity-80"
                />
              </div>
              <div className="text-right mt-3 mr-6">
                <button className="h-9 w-9  rounded-full border border-gray-400 hover:bg-gray-200">
                  <i className="fa-solid fa-ellipsis text-black "></i>
                </button>
                <button className="h-9 w-20 bg-gray-900 rounded-full text-white font-bold ml-3 hover:bg-gray-800">
                  Follow
                </button>
              </div>
              <div className="ml-7 mt-10">
                <p className="text-lg text-black font-bold">Tân Lê Ngọc</p>
                <p className="text-sm text-gray-600">@TnLNgc5</p>
              </div>
              <div className=" mt-2 ml-5">
                <div className="flex text-gray-600 p-2">
                  <i className="fa-solid fa-calendar-days mr-2 mt-1 "></i>
                  <p>Joined April 2014</p>
                </div>
                <div className="flex text-sm ml-2  text-gray-600">
                  <div className="no-underline hover:underline">
                    <span className="font-bold mr-1 text-black">7</span>
                    <a href="./" className="mr-4">
                      Following
                    </a>
                  </div>
                  <div className="no-underline hover:underline">
                    <span className="font-bold mr-1 text-black">7</span>
                    <a href="./">Follower</a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center h-14 text-sm border-b mt-3">
                <p className="flex items-center justify-center hover:bg-gray-200 h-full text-base font-bold w-1/5 cursor-pointer">
                  <span>
                    <p className="my-2">Tweets</p>
                    <div className="bg-tweet w-full h-1  rounded-full"></div>
                  </span>
                </p>
                <p className="flex items-center justify-center text-gray-500 hover:bg-gray-200 text-base font-bold h-full w-2/5 cursor-pointer">
                  Tweets & replies
                </p>
                <p className="flex items-center justify-center text-gray-500 hover:bg-gray-200 text-base font-bold h-full w-1/5 cursor-pointer">
                  Media
                </p>
                <p className="flex items-center justify-center text-gray-500 hover:bg-gray-200 text-base font-bold h-full w-1/5 cursor-pointer">
                  Likes
                </p>
              </div>
              {itemposts.map((itemposts, index) => (
                <div
                  className="cursor-pointer hover:bg-gray-100 border-b"
                  key={index}
                >
                  <div className="flex items-center w-full justify-between">
                    <div className="flex items-center mt-1 w-10/12">
                      <div className="ml-10 mr-3">
                        <MdComment className="text-gray-500 cursor-pointer" />
                      </div>
                      <div>
                        <Tippy
                          placement="bottom"
                          interactive
                          render={(attrs) => (
                            <div
                              className=" ml-20 w-56 bg-white rounded-lg shadow-boxsd"
                              tabIndex={-1}
                              {...attrs}
                            >
                              <div className="px-2">
                                <p className="text-2xl font-bold">
                                  {" "}
                                  Business personalities
                                </p>
                                <p className="text-sm font-medium">Business</p>
                                <p className="py-2 text-xs">
                                  Following this Topic will help personalize
                                  Home timeline and experience across Twitter
                                </p>
                                <div className=" flex items-center justify-between pb-2">
                                  <button className="flex border hover:bg-gray-200 border-gray-400 rounded-full">
                                    <span className="py-1 px-4 text-xs font-bold">
                                      Not Interested
                                    </span>
                                  </button>
                                  <button className="flex border hover:bg-gray-700 border-black rounded-full bg-black text-white">
                                    <span className="py-1 px-4 text-xs font-bold">
                                      Follow
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        >
                          <p className="text-sm font-bold text-gray-500 hover:underline cursor-pointer">
                            {itemposts.topic}
                          </p>
                        </Tippy>
                      </div>
                      <div>
                        <BsDot />
                      </div>
                      <div className="flex items-center  w-8/12 justify-between">
                        <p className="text-tweet text-sm font-medium hover:underline cursor-pointer">
                          See more
                        </p>
                      </div>
                    </div>
                    <Tippy
                      placement="bottom"
                      delay={200}
                      render={(attrs) => (
                        <div className="" tabIndex={-1} {...attrs}>
                          <div className="bg-gray-900 opacity-50 text-white rounded-sm px-2 py-1 text-xs">
                            <p>Dismiss</p>
                          </div>
                        </div>
                      )}
                    >
                      <div className="hover:bg-hover mr-1 rounded-full p-2">
                        <IoClose className=" text-xl cursor-pointer text-gray-500" />
                      </div>
                    </Tippy>
                  </div>
                  <div className="flex w-full">
                    <div>
                      <Tippy
                        placement="bottom"
                        interactive
                        render={() => <ProfileInfo itemposts={itemposts} />}
                      >
                        <img
                          className="rounded-full mt-2 ml-3"
                          src={itemposts.imgulr}
                          alt=""
                        />
                      </Tippy>
                    </div>
                    <div className="pl-2 w-11/12 ">
                      <div className="flex items-center w-full justify-between">
                        <div className="flex items-center">
                          <Tippy
                            placement="bottom"
                            interactive
                            render={() => <ProfileInfo itemposts={itemposts} />}
                          >
                            <p className="font-bold text-username hover:underline">
                              {itemposts.username}
                            </p>
                          </Tippy>
                          <div className="p-tick mx-1 rounded-full bg-tweet">
                            <TiTick className="text-gray-50 text-xs" />
                          </div>
                          <Tippy
                            placement="bottom"
                            interactive
                            render={() => <ProfileInfo itemposts={itemposts} />}
                          >
                            <p className="text-gray-500">{`@${itemposts.useid}`}</p>
                          </Tippy>
                          <div className="text-gray-500">
                            <BsDot />
                          </div>
                          <p className="text-gray-500 hover:underline">1h</p>
                        </div>
                        <Tippy
                          placement="bottom"
                          delay={200}
                          render={(attrs) => (
                            <div className="" tabIndex={-1} {...attrs}>
                              <div className="bg-gray-900 opacity-50 text-white rounded-sm px-2 py-1 text-xs">
                                <p>More</p>
                              </div>
                            </div>
                          )}
                        >
                          <div className="mr-1 hover:bg-hover rounded-full p-2">
                            <FiMoreHorizontal className=" text-xl" />
                          </div>
                        </Tippy>
                      </div>
                      <div className="flex pr-5 mb-3">
                        <p className="text-justify">{itemposts.status}</p>
                      </div>
                      <div className="mr-4">
                        <img
                          className="rounded-2xl"
                          src={itemposts.imgPosturl}
                          alt=""
                        />
                        <p className="text-sm text-gray-500">from</p>
                        <div className="w-9/12 flex items-center justify-between text-gray-500 mb-2">
                          <Tippy
                            placement="bottom"
                            delay={200}
                            render={(attrs) => (
                              <div className="" tabIndex={-1} {...attrs}>
                                <div className="bg-gray-900 opacity-50 text-white rounded-sm px-2 py-1 text-xs">
                                  <p>Reply</p>
                                </div>
                              </div>
                            )}
                          >
                            <div className="flex items-center hover:text-tweet ">
                              <span className="p-2 hover:bg-hover rounded-full">
                                <FaRegComment />
                              </span>{" "}
                              {itemposts.comment}
                            </div>
                          </Tippy>
                          <Tippy
                            placement="bottom"
                            delay={200}
                            render={(attrs) => (
                              <div className="" tabIndex={-1} {...attrs}>
                                <div className="bg-gray-900 opacity-50 text-white rounded-sm px-2 py-1 text-xs">
                                  <p>Retweet</p>
                                </div>
                              </div>
                            )}
                          >
                            <div className="flex items-center hover:text-hover2">
                              <span className="p-2 hover:bg-hover2bg rounded-full">
                                <AiOutlineRetweet />
                              </span>{" "}
                              {itemposts.tweet}
                            </div>
                          </Tippy>
                          <Tippy
                            placement="bottom"
                            delay={200}
                            render={(attrs) => (
                              <div className="" tabIndex={-1} {...attrs}>
                                <div className="bg-gray-900 opacity-50 text-white rounded-sm px-2 py-1 text-xs">
                                  <p>Like</p>
                                </div>
                              </div>
                            )}
                          >
                            <div className="flex items-center hover:text-hover3">
                              <span className="p-2 hover:bg-hover3bg rounded-full">
                                <AiOutlineHeart />
                              </span>{" "}
                              {itemposts.like}
                            </div>
                          </Tippy>
                          <Tippy
                            placement="bottom"
                            delay={200}
                            render={(attrs) => (
                              <div className="" tabIndex={-1} {...attrs}>
                                <div className="bg-gray-900 opacity-50 text-white rounded-sm px-2 py-1 text-xs">
                                  <p>View</p>
                                </div>
                              </div>
                            )}
                          >
                            <div className="flex items-center hover:text-tweet">
                              <span className="p-2 hover:bg-hover rounded-full">
                                <FiBarChart2 />
                              </span>{" "}
                              {itemposts.view}
                            </div>
                          </Tippy>
                          <Tippy
                            placement="bottom"
                            delay={200}
                            render={(attrs) => (
                              <div className="" tabIndex={-1} {...attrs}>
                                <div className="bg-gray-900 opacity-50 text-white rounded-sm px-2 py-1 text-xs">
                                  <p>Share</p>
                                </div>
                              </div>
                            )}
                          >
                            <div className="flex items-center hover:text-tweet">
                              <span>
                                <BsUpload />
                              </span>
                            </div>
                          </Tippy>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <RightProfileComponent />
      </div>
    </>
    // <div>
    //     <ViewProfileComponent/>
    // </div>
  );
}
