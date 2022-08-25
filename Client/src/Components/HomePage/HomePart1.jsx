import {
  AtSignIcon,
  CalendarIcon,
  TriangleUpIcon,
  ExternalLinkIcon,
  InfoIcon,
  RepeatClockIcon,
  SettingsIcon,
  SunIcon,
  TimeIcon,
} from "@chakra-ui/icons";

import React from "react";
import { Link } from "react-router-dom";

import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpg";
import Footer1 from "../Footer/Footer1";
import Footerlast from "../Footer/Footerlast";

import { useNavigate } from "react-router-dom";
import '../../App.css'

const HomePart1 = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 landing-bg items-center lg:items-start lg:px-40 lg:py-12 justify-center">
      <div>
          <div className="text-center lg:text-left mb-6 lg:leading-loose">
            <h1 className="color-1 mt-12 text-base lg:text-xl font-extrabold">Timely<span className="text-white font-extrabold pl-2">time tracking software</span></h1>
            <h2 className="text-white  mt-3 font-extrabold text-4xl lg:text-7xl">Say hello to</h2>
            <span className="color-2 font-extrabold text-4xl lg:text-7xl lg:pr-12">automatic time tracking</span>
            <p className="px-12 mt-6 lg:px-0 text-white font-normal text-base lg:text-xl lg:pr-80">Timely automates company time tracking, so you and your team can focus on the work that matters.</p>
          </div>
          <div className="bg-white mx-3 mt-12 mb-12 rounded-2xl flex justify-around items-center lg:w-full lg:mx-0 lg:py-1 lg:px-3">
            <input type="text" placeholder="Enter your work mail id" className="rounded-lg my-1 py-1 px-1 lg:px-3 lg:my-2 lg:py-3 lg:h-auto lg:w-3/4 lg:mr-3 border-2 border-none active:ring-white  focus:ring-white focus:border-none" />
            <button className="bg-color-1 rounded-xl text-white py-2.5 px-2.5 lg:px-3 lg:my-0 text-xs lg:text-sm lg:py-4">Start my free trial</button>
          </div>

          <div className="flex flex-col my-6">
              <div className="flex items-center justify-center mb-1 lg:items-left lg:justify-start lg:text-left lg:mb-2">
                <img
                  src="https://assets-global.website-files.com/5db165cbf782f992df567ae5/60f835b74a8c57e4188a2912_Icon.svg"
                  alt=""
                  className="w-4 lg:w-5 lg:ml-1"
                 
                />
                <p className="text-white font-bold text-xs ml-2 lg:ml-4 lg:text-base">
                  Trusted by 5000+ businesses globally
                </p>
              </div>
              <div className="flex items-center justify-center mb-1 lg:items-left lg:justify-start lg:text-left lg:mb-2">
                <img
                  className="w-4 lg:w-6"
                  src="https://assets-global.website-files.com/5db165cbf782f992df567ae5/60f835b74a8c57c62c8a28e4_thumb-down.svg"
                  alt=""
                />
                <p className="text-white font-bold text-xs ml-2 lg:ml-4 lg:text-base">
                  Free 14-day trial--No credit cards needed
                </p>
              </div>
              <div className="flex items-center justify-center mb-1 lg:items-left lg:justify-start lg:text-left lg:mb-2">
                <img
                  className="w-4 lg:w-6"
                  src="https://assets-global.website-files.com/5db165cbf782f992df567ae5/60f835b74a8c57f43e8a2916_light-bulb.svg"
                  alt=""
                />
                <p className="text-white font-bold text-xs ml-2 lg:ml-4 lg:text-base">
                  Reduce time tracking admin by 75%
                </p>
              </div>
            </div>
      </div>
      <div className="my-12">
        <img
            
            src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62d7ebed9e2c923eb3b4c18b_hero-001-xl.png"
            alt=""
            className="px-3 py-6 lg:h-4/6 lg:w-4/5 lg:ml-32"
          />
      </div>
    </div>

    <div className="grid grid-col-1 my-6">
      <div className="flex flex-col items-center">
            <img
              src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39954ae48af5bf_brainp.svg"
              alt=""
            />
            <h3 className="my-3 text-2xl lg:text-4xl font-bold text-slate-800 px-3">Automate your time tracking</h3>
            <p className="text-center text-base lg:text-lg px-3 font-normal text-slate-600 lg:px-96">
              Forget timers, note taking and manual input—Timely can track time
              spent in every web and desktop app automatically for you. Get a
              precise daily record of all the time you spend in documents,
              meetings, emails, websites and video calls with zero effort.
              <span className="color-3">It’s all 100% private to you.</span>
            </p>
            <Link to="/" className="my-3 color-3 text-base lg:text-lg font-normal">How it all works</Link>
         
            <img
              src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39951ee48af5c4_arr.svg"
              alt=""
              className="mt-6 lg:h-24 lg:my-9"
            />
       </div>
       <div className="grid grid-col-3 gap-9 my-6 lg:flex justify-center items-center">
            <div className="flex flex-col items-center justify-center text-center px-3">
              <TimeIcon boxSize={6} color={"#722FD3"} />
              <h4 className="my-3 text-2xl lg:text-4xl font-bold text-slate-800 px-3">Track time</h4>
              <p className="text-lg text-slate-600 font-normal">Get the complete picture of your work day with zero effort.</p>
              <Link to="/" className="text-base text-slate-600 font-normal underline underline-offset-4 color-3">Automate time tracking</Link>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-3">
              <CalendarIcon boxSize={6} color={"#722FD3"} />
              <h4 className="my-3 text-2xl lg:text-4xl font-bold text-slate-800 px-3">Track projects</h4>
              <p className="text-lg text-slate-600 font-normal">Get the complete picture of your work day with zero effort.</p>
              <Link to="/" className="text-base text-slate-600 font-normal underline underline-offset-4 color-3">Run smarter projects</Link>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-3">
              <InfoIcon boxSize={6} color={"#722FD3"} />
              <h4 className="my-3 text-2xl lg:text-4xl font-bold text-slate-800 px-3">Track teams</h4>
              <p className="text-lg text-slate-600 font-normal">Get the complete picture of your work day with zero effort.</p>
              <Link to="/" className="text-base text-slate-600 font-normal underline underline-offset-4 color-3">Lead happier teams</Link>
            </div>
       </div>
       <div className="grid grid-col-1 gap-9 lg:gap-x-0 mt-32 mb-12">
          <div className="flex flex-col px-4 lg:grid lg:grid-cols-2 lg:items-center lg:justify-center">
              <img src={img1} alt="" className="h-60 mb-6 lg:h-auto lg:w-full lg:px-32" />
              <div className="flex flex-col justify-center text-center lg:text-left">
                <h3 className="my-3 text-2xl lg:text-4xl font-bold text-slate-800 px-3 lg:px-0">Save hours on time tracking</h3>
                <p className="text-base text-slate-600 font-normal lg:pr-64">
                  Timely’s simple UI and automatic time tracking have helped
                  other companies reduce timesheet admin by 75%. With flexible
                  options for logging time, your team can manage timesheets in
                  the way that makes most sense to them.
                </p>
              </div>
          </div>
       </div>
       <div className="grid grid-col-1 gap-9 lg:gap-x-0 my-12 ">
          <div className="flex flex-col px-4 lg:grid lg:grid-cols-2 lg:flex-col-reverse lg:items-center lg:justify-center">
              <img  src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62d7ed7f0de764464efc1bda_Frame%201340.png" alt="" className="h-60 mb-6 lg:h-auto lg:w-full lg:px-32  lg:order-last" />
              <div className="flex flex-col justify-center text-center lg:text-left">
                <h3 className="my-3 text-2xl lg:text-4xl font-bold text-slate-800 px-3 lg:px-0 lg:pl-36">Capture every billable detail</h3>
                <p className="text-base text-slate-600 font-normal  lg:pl-36 lg:pr-32">
                By capturing every second of your work day, Timely stops billable time from falling through the cracks. Report and invoice clients transparently, and use accurate company time data to improve project rates and budgets.
                </p>
              </div>
          </div>
       </div>
       <div className="grid grid-col-1 gap-9 lg:gap-x-0 my-12 ">
          <div className="flex flex-col px-4 lg:grid lg:grid-cols-2 lg:items-center lg:justify-center">
              <img src={img2} alt="" className="h-60 mb-6 lg:h-auto lg:w-full lg:px-32" />
              <div className="flex flex-col justify-center text-center lg:text-left">
                <h3 className="my-3 text-2xl lg:text-4xl font-bold text-slate-800 px-3 lg:px-0">Empower your people</h3>
                <p className="text-base text-slate-600 font-normal lg:pr-64">
                Timely’s gorgeous design, intuitive controls and fierce protection of individual privacy make it a time tracking tool that people actually enjoy using. Empower your team to manage their own productivity, and stay on top of performance, wellbeing and workload without compromising anyone’s trust
                </p>
              </div>
          </div>
       </div>
    </div>
    <div className="grid grid-col-1 gap-9 lg:gap-x-0 my-12 landing-bg">
      <div className="text-center text-white flex flex-col justify-center items-center">
            <img
                  src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/625c168b07e04cf345cd2b3d_tm-arrow-wh.svg"
                  alt=""
                  className="mt-12"
            />
            <h3 className="text-3xl font-extrabold my-3 lg:text-4xl">Connect your stack</h3>
            <p className="text-sm mb-12 px-6 font-bold text-zinc-50 lg:text-lg lg:px-96">
                  Timely’s native integrations and open APIs let you easily
                  connect data across you existing digital toolkit. Enjoy modern,
                  automatic time tracking without changing workflows you’ve spent
                  years perfecting.
           </p>
      </div>
      <div className="grid grid-cols-4 gap-12 mx-9 landing-bg mb-12 lg:mx-auto lg:gap-x-12">
           <Link to={"/"} className="hover:animate-bounce">
                    <img
                      src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399507178afec0_622f69e00c9cf281783c6e63_60b773d26388125af692655e_zoom.png"
                      alt=""
                      className="lg:h-20"
                    />
            </Link>
            <Link to={"/"} className="hover:animate-bounce">
              <img
                src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a3995db068afecb_622f69e00c9cf2a3aa3c6e5c_60b773d26388128ce29265e3_zapier.png"
                alt=""
                className="lg:h-20"
              />
            </Link>
            <Link to={"/"}  className="hover:animate-bounce">
              <img
                src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a3995d48d8afec2_622f69e00c9cf228763c6e5f_60b773d263881212a3926561_trello.png"
                alt=""
                className="lg:h-20"
              />
            </Link>
            <Link to={"/"} className="hover:animate-bounce">
              <img
                src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a39959cb08b0389_622f69e00c9cf20e073c75c5_toggl.svg"
                alt=""
                className="lg:h-20"
              />
            </Link>
            <Link to={"/"} className="hover:animate-bounce">
              <img
                src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399551b88afec9_622f69e00c9cf211c53c6e61_60b773d26388125fe3926566_todois.png"
                alt=""
                className="lg:h-20"
              />
            </Link>
            <Link to={"/"} className="hover:animate-bounce">
              <img
                src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a39952c128afec1_622f69e00c9cf20fcd3c6e5d_60b773d2638812c090926634_quickbooks_logo.png"
                alt=""
                className="lg:h-20"
              />
            </Link>
            <Link to={"/"} className="hover:animate-bounce">
              <img
                src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a3995f1728afec3_622f69e00c9cf219633c6e62_60b773d26388126112926555_outlook.png"
                alt=""
                className="lg:h-20"
              />
            </Link>
            <Link to={"/"} className="hover:animate-bounce">
              <img
                src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a3995366e8afec5_622f69e00c9cf23dd63c6e5b_60b773d2638812391092655c_office365.png"
                alt=""
                className="lg:h-20"
              />
            </Link>
            <Link to={"/"} className="hover:animate-bounce">
              <img
                src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a39955cba8afec8_622f69e00c9cf266013c6e5e_60b773d263881204bd92656c_jira.png"
                alt=""
                className="lg:h-20"
              />
            </Link>
            <Link to={"/"} className="hover:animate-bounce">
              <img
                src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399594708afead_622f69e00c9cf215b73c6e44_60b773d2638812a08e92656f_harvest.png"
                alt=""
                className="lg:h-20"
              />
            </Link>
            <Link to={"/"} className="hover:animate-bounce">
              <img
                src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399543808afeae_622f69e00c9cf22e8d3c6e48_60b773d26388128342926559_calendar.png"
                alt=""
                className="lg:h-20"
              />
            </Link>
            <Link to={"/"} className="hover:animate-bounce">
              <img
                src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399530e28afebb_622f69e00c9cf223073c6e4c_60b773d2638812105d926556_gmail.png"
                alt=""
                className="lg:h-20"
              />
            </Link>
      </div>
      <div className="grid grid-cols-3 gap-x-12 mx-9 landing-bg mb-12 lg:flex lg:justify-center">
          <Link to={"/"} className="hover:animate-bounce">
            <img
              src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399545b18afea6_622f69e00c9cf271b93c6e46_60b773d26388129bba926569_github.png"
              alt=""
             className="p-3 lg:h-20 lg:p-0"
            />
          </Link>
          <Link to={"/"} className="hover:animate-bounce">
            <img
              src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a39954a888afeac_622f69e00c9cf27e7c3c6e43_60b773d263881215e6926573_azuread.png"
              alt=""
              className="p-3 lg:h-20 lg:p-0"
            />
          </Link>
          <Link to={"/"} className="hover:animate-bounce">
            <img
              src="https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399535d98afeaf_622f69e00c9cf262c83c6e47_60b773d2638812deaf926564_asana.png"
              alt=""
             className="p-3 lg:h-20 lg:p-0"
            />
          </Link>
      </div>
      <p className="text-center text-white font-normal text-lg mb-12">See Intergration</p>
    </div>


    <div className="flex flex-col justify-center items-center text-center mb-12">
        <SunIcon boxSize={55} />
        <h3 className="my-3 text-2xl lg:text-4xl font-bold text-slate-800 px-3 lg:px-0">Trusted by 5000+ businesses globally</h3>
        <p className="text-base lg:text-lg px-6 text-slate-600 font-normal lg:px-96">
          Whether you have hundreds of colleagues or none at all, with
          Timely size doesn’t matter. We help businesses of all sizes
          access the benefits of automatic time tracking, with flexible
          subscription plans that scale to meet your needs.
        </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-5 text-center lg:gap-x-3 lg:mx-auto lg:w-4/6">
        <div className="bg-slate-100 flex flex-col items-center py-6 rounded-lg mx-6 my-6 lg:mx-0">
          <SunIcon boxSize={30}/>
          <Link to="/" className="font-normal text-slate-700 text-lg lg:text-base my-4 lg:px-2">Specialist departments in corporates</Link>
        </div>
        <div className="bg-slate-100 flex flex-col items-center py-6 rounded-lg mx-6 my-6 lg:mx-0">
          <SettingsIcon boxSize={30}/>
          <Link to="/" className="font-normal text-slate-700 text-lg lg:text-base my-4 lg:px-2">International firms and agency groups</Link>
        </div>
        <div className="bg-slate-100 flex flex-col items-center py-6 rounded-lg mx-6 my-6 lg:mx-0">
          <ExternalLinkIcon boxSize={30}/>
          <Link to="/" className="font-normal text-slate-700 text-lg lg:text-base my-4 lg:px-2">Small businesses and startups</Link>
        </div>
        <div className="bg-slate-100 flex flex-col items-center py-6 rounded-lg mx-6 my-6 lg:mx-0">
          <AtSignIcon boxSize={30}/>
          <Link to="/" className="font-normal text-slate-700 text-lg lg:text-base my-4 lg:px-2">Consultants and freelancers</Link>
        </div>
        <div className="bg-slate-100 flex flex-col items-center py-6 rounded-lg mx-6 my-6 lg:mx-0">
          <RepeatClockIcon boxSize={30}/>
          <Link to="/" className="font-normal text-slate-700 text-lg lg:text-base my-4 lg:px-2">Inter-organizational partnership</Link>
        </div>
    </div>

    <div className="grid grid-cols-1  lg:grid-cols-2 text-center lg:flex lg:gap-x-2 lg:mx-auto lg:w-4/6">
        <div className="mb-6">
            <img
              src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39956f438af4f5_global.jpg"
              alt=""
              className="px-3 rounded-2xl"
            />
        </div>
        <div className="flex flex-col items-center justify-center lg:items-start lg:text-left">
              <h3 className="text-lg text-slate-900 font-bold px-3">
                “Timely is helping our organization transform time
                tracking from a chore to a simple review process.”
              </h3>
              <img
                src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39952ab78af332_grant-thornton-vector-logo.svg"
                alt=""
                className="w-36 mt-3 mb-12 lg:ml-3"
              />
              <p className="text-sm px-6 text-slate-700 mb-3 lg:ml-0 lg:pl-3">
                See how <strong className="color-3">Grant Thornton </strong> leverages
                Timely’s automation to increase time tracking accuracy and
                efficiency across its Legal and Finance, Tax and
                Regulatory, and IT departments.
              </p>
              <Link to="/" className="color-3 font-bold text-base underline underline-offset-2 mb-24 lg:ml-3">Grant Thornton case study</Link>
        </div>
    </div>
    <div className="grid grid-cols-1 gap-y-9 w-32 mx-auto mb-12 lg:grid-cols-7 items-center  justify-center text-center gap-x-3 lg:gap-x-12 lg:gap-y-0 lg:mx-auto lg:w-4/6">
      <div>
        <img
          src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fd96ad4e0c44915ed_TimeTracking_MostImplementable_Total.svg"
          alt=""
          className="w-22"
        />
      </div>
      <div>
        <img
          src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b36657dfae2feee178fee9_TimeTracking_MomentumLeader_Leader.svg"
          alt=""
          className="w-22"
        />
      </div>
      <div>
        <img
          src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fc9eb5ab5b7d8536c_TimeTracking_Leader_Leader.svg"
          alt=""
          className="w-22"
        />
      </div>
      <div className="mr-9">
        <img
          src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a3995b0a08af4da_loveus.svg"
          alt=""
          className="w-32 lg:w-22"
        />
      </div>
      <div>
        <img
          src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3668136276388dc2815e8_TimeTracking_HighPerformer_Mid-Market_HighPerformer.svg"
          alt=""
          className="w-22"
        />
      </div>
      <div>
        <img
          src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3668136276388dc2815e8_TimeTracking_HighPerformer_Mid-Market_HighPerformer.svg"
          alt=""
          className="w-22"
        />
      </div>
      <div>
        <img
          src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fdfae2ff62378f39f_TimeTracking_BestRelationship_Total.svg"
          alt=""
          className="w-22"
        />
      </div>
    </div>
    <div className="grid grid-cols-1 landing-bg">
      <div className="text-white text-center my-6">
          <h1 className="text-3xl font-bold lg:text-4xl">Try <span className="color-1">Timely</span> for free!</h1>
          <p className="text-base px-4 mt-2 text-slate-50">Discover the power of Timely's automated time tracking with a 14-day free trial</p>
          <div className="bg-white mx-3 mt-6 mb-6 rounded-2xl flex justify-around items-center lg:w-2/5 lg:mx-auto lg:py-1 lg:px-3">
            <input type="text" placeholder="Enter your work mail id" className="rounded-lg my-2 py-1 px-3 text-base lg:px-3 lg:my-1 lg:py-3 lg:h-auto lg:w-3/4 lg:mr-3 border-2 border-none active:ring-white  focus:ring-white focus:border-none" />
            <button className="bg-color-1 rounded-xl text-white py-2.5 px-2.5 lg:my-0 text-xs lg:text-sm lg:py-3 lg:px-3">Start my free trial</button>
          </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-x-6 mb-6 lg:justify-center lg:items-center">
          <div className="flex items-center justify-center mb-1 lg:items-left lg:justify-start lg:text-left lg:mb-2">
            <img
              src="https://assets-global.website-files.com/5db165cbf782f992df567ae5/60f835b74a8c57e4188a2912_Icon.svg"
              alt=""
              className="w-4 lg:w-5 lg:ml-1"
              
            />
            <p className="text-white font-bold text-xs ml-2 lg:ml-4 lg:text-base">
              Trusted by 5000+ businesses globally
            </p>
          </div>
          <div className="flex items-center justify-center mb-1 lg:items-left lg:justify-start lg:text-left lg:mb-2">
            <img
              className="w-4 lg:w-6"
              src="https://assets-global.website-files.com/5db165cbf782f992df567ae5/60f835b74a8c57c62c8a28e4_thumb-down.svg"
              alt=""
            />
            <p className="text-white font-bold text-xs ml-2 lg:ml-4 lg:text-base">
              Free 14-day trial--No credit cards needed
            </p>
          </div>
          <div className="flex items-center justify-center mb-1 lg:items-left lg:justify-start lg:text-left lg:mb-2">
            <img
              className="w-4 lg:w-6"
              src="https://assets-global.website-files.com/5db165cbf782f992df567ae5/60f835b74a8c57f43e8a2916_light-bulb.svg"
              alt=""
            />
            <p className="text-white font-bold text-xs ml-2 lg:ml-4 lg:text-base">
              Reduce time tracking admin by 75%
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-6">
            <p className="text-white  font-bold text-xs  text-center lg:ml-4 lg:text-xs mt-3">20 people or more? <span className="underline underline-offset-2 cursor-pointer">Get a personalized introduction to Timely</span></p>
        </div>
    </div>
    <div className="flex justify-center mt-6">
      <img
            src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39957b258af61b_ship.svg"
            alt=""
            className="animate-bounce"
      />
    </div>
    <div className="grid grid-cols-1 mt-6 mb-12 lg:grid-cols-2 text-center lg:flex lg:gap-x-2 lg:mx-auto lg:w-4/6">
        <div className="mb-6 order-last lg:order-first w-full lg:w-5/6">
          <div className="flex justify-center lg:justify-start">
              <img
                width={"170px"}
                height="50px"
                src="https://assets-global.website-files.com/622f69e00c9cf2599f3c60d5/62556ba13d84b67cea42af8a_made-by-dark.svg"
                alt=""
              />
          </div>
          <div className="flex justify-center lg:justify-start my-6">
              <img
                src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fc9eb5ab5b7d8536c_TimeTracking_Leader_Leader.svg"
                alt=""
                className="w-12"
              />
              <img
                src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fdb7877357a9300c3_TimeTracking_BestUsability_Total.svg"
                alt=""
                className="w-12"
              />
              <img
                src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fd96ad4e0c44915ed_TimeTracking_MostImplementable_Total.svg"
                alt=""
                className="w-12"
              />
              <img
                src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fdfae2ff62378f39f_TimeTracking_BestRelationship_Total.svg"
                alt=""
                className="w-12"
              />
          </div>
          <div className="flex justify-center lg:justify-start">
              <button onClick={() => navigate("/login")} className="bg-color-1 font-normal mb-6 text-white text-base px-6 py-2 cursor-pointer rounded-lg">
                  Start free trial
              </button>
          </div>
          <div className="flex justify-center lg:justify-start">
            <p className="text-slate-700 text-base font-bold">Get Timely on every device</p>
          </div>
          <div className="flex justify-center gap-3 lg:justify-start mt-6">
            <img
              src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39951e1d8af644_App%20Store%20-%20eng.svg"
              alt=""
              className="w-28"
            />
            <img
              src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39950b828af639_Google%20Play%20-%20eng.svg"
              alt=""
              className="w-28"
            />
          </div>
        </div>
       
        <div className="grid grid-cols-2 lg:grid-cols-3 w-full gap-x-0 gap-y-12  mx-6 lg:mx-0 lg:gap-x-6 tracking-wide mb-12"> 
          <div>
            <h2 className="text-slate-900 text-sm text-left font-normal">Features</h2>
            <div className="mt-2 text-slate-600 text-left text-xs">
              <p className="cursor-pointer">Track time</p>
              <p>Track teams</p>
              <p>Track plans</p>
              <p>Our privacy promise</p>
            </div>
          </div>
          <div>
            <h2 className="text-slate-900 text-sm text-left font-normal">Solutions</h2>
            <div className="mt-2 text-slate-600 text-left text-xs">
              <p>Consulting firms</p>
              <p>Software companies</p>
              <p>Agencies</p>
              <p>Designers and creatives</p>
              <p>Lawyers</p>
              <p>Teams</p>
            </div>
          </div>
          <div>
            <h2 className="text-slate-900 text-sm text-left font-normal">Resources</h2>
            <div className="mt-2 text-slate-600 text-left text-xs">
              <p>Blog</p>
              <p>Case studies</p>
              <p>Podcast</p>
              <p>Webinars</p>
              <p>Time tracking guide</p>
              <p>Support</p>
            </div>
          </div>
          <div>
            <h2 className="text-slate-900 text-sm text-left font-normal">Integrations</h2>
            <div className="mt-2 text-slate-600 text-left text-xs">
              <p>Google Calendar</p>
              <p>Outlook</p>
              <p>QuickBooks</p>
              <p>Zapier</p>
              <p>Zoom</p>
              <p>See all integrations</p>
            </div>
          </div>
          <div>
            <h2 className="text-slate-900 text-sm text-left font-normal">Compare</h2>
            <div className="mt-2 text-slate-600 text-left text-xs">
              <p>Timely vs RescueTime</p>
              <p>Timely vs Harvest</p>
              <p>Timely vs TSheets</p>
              <p>Timely vs Clockify</p>
              <p>Timely vs Toggl</p>
            </div>
          </div>
          <div>
            <h2 className="text-slate-900 text-sm text-left font-normal">About Memory</h2>
            <div className="mt-2 text-slate-600 text-left text-xs">
              <p>About us</p>
              <p>Jobs - We're hiring!</p>
              <p>Manifesto</p>
              <p>Download our apps</p>
              <p>API docs</p>
              <p>Memory app</p>
              <p>Contact us</p>
            </div>
          </div>
        </div>
    </div>
    <div>
      <div className="hidden lg:block">

        <div className="grid grid-cols-2  items-center justify-center lg:grid-cols-1 mb-3">
            <div className="flex lg:justify-center lg:items-center lg:gap-x-12 text-slate-600 font-light text-xs">
              <Link to="/">Terms of Service</Link>
              <TriangleUpIcon/>
              <Link to="/">Privacy Policy</Link>
              <TriangleUpIcon/>
              <Link to="/">Login</Link>
              <TriangleUpIcon/>
              <Link to="/">Start 14 day trial</Link>
              <TriangleUpIcon/>
              <img
                src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a3995140e8af655_Twitter.svg"
                alt=""
                className="w-5"
              />
              <TriangleUpIcon/>
              <img
                src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a3995580a8af657_Vector.svg"
                alt=""
                className="w-2"
              />
          </div>

        </div>
      </div>
    
      <div className="text-xs text-center my-6 text-slate-600 font-light">
        <p>Copyright 2022 Memory AS</p>
      </div>
    </div>


    </>
  );
};

export default HomePart1;
