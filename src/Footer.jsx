import rightArrowWhite from "./assets/images/rightArrowWhite.svg";
import footerIcon from "./assets/images/footerIcon.svg";
import whiteNexcent from "./assets/images/whiteNexcent.svg";
import igIcon from "./assets/images/igIcon.svg";
import dribbleIcon from "./assets/images/dribbleIcon.svg";
import twitterIcon from "./assets/images/twitterIcon.svg";
import ytIcon from "./assets/images/ytIcon.svg";
import sendIcon from "./assets/images/sendIcon.svg";

function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-[#263238] text-center text-[64px] font-semibold w-[887px]">
          Pellentesque suscipit fringilla libero eu.
        </h2>
        <button className="bg-[#4CAF4F] rounded-sm px-8 py-3.5 text-[#FFF] font-medium border-0 flex items-center justify-center gap-2">
          Get a Demo
          <img
            className="flex justify-center items-center py-[5px] px-[2.5px] stroke-1 m-auto"
            src={rightArrowWhite}
            alt=""
          />
        </button>

        <section className="bg-[#263238] w-full flex justify-between items-center">
          <div className=" flex flex-row justify-between items-start gap-[125px] px-[165px] py-16 w-full">
            <div className="flex gap-10 flex-col">
              <div className="flex flex-row gap-[9.891px]">
                <img
                  className="w-[43.27px] h-[29.67px]"
                  src={footerIcon}
                  alt=""
                />
                <img
                  className="w-[137.83px] h-[25.54]"
                  src={whiteNexcent}
                  alt=""
                />
              </div>

              <p className="text-[#F5F7FA] text-[14px] w-[350px]">
                Copyright © 2020 Nexcent ltd.{" "}
                <span className="block mt-2">All rights reserved</span>
              </p>
              <div className="flex flex-row gap-4">
                <div className="flex justify-center items-center w-8 h-8 rounded-full bg-white/10">
                  <a href="#">
                    <img src={igIcon} alt="" />
                  </a>
                </div>
                <div className="flex justify-center items-center w-8 h-8 rounded-full bg-white/10">
                  <a href="#">
                    <img src={dribbleIcon} alt="" />
                  </a>
                </div>
                <div className="flex justify-center items-center w-8 h-8 rounded-full bg-white/10">
                  <a href="#">
                    <img src={twitterIcon} alt="" />
                  </a>
                </div>
                <div className="flex justify-center items-center w-8 h-8 rounded-full bg-white/10">
                  <a href="#">
                    <img src={ytIcon} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[30px]">
              <div className="flex flex-col gap-6 w-40">
                <h4 className="text-white text-[20px] font-semibold">
                  Company
                </h4>
                <ul className="flex flex-col gap-3 text-[#F5F7FA] text-[14px]">
                  <a href="#">
                    <li>About us</li>
                  </a>
                  <a href="#">
                    <li>Blog</li>
                  </a>
                  <a href="#">
                    <li>Contact us</li>
                  </a>
                  <a href="#">
                    <li>Pricing</li>
                  </a>
                  <a href="#">
                    <li>Testimonials</li>
                  </a>
                </ul>
              </div>
              <div className="flex flex-col gap-6 w-40">
                <h4 className="text-white text-[20px] font-semibold">
                  Support
                </h4>
                <ul className="flex flex-col gap-3 text-[#F5F7FA] text-[14px]">
                  <a href="#">
                    <li>Help center</li>
                  </a>
                  <a href="#">
                    <li>Terms of service </li>
                  </a>
                  <a href="#">
                    <li>Legal</li>
                  </a>
                  <a href="#">
                    <li>Privacy policy</li>
                  </a>
                  <a href="#">
                    <li>
                      <li>Status</li>
                    </li>
                  </a>
                </ul>
              </div>
              <div className="flex flex-col gap-6">
                <h4 className="text-white text-[20px] font-semibold">
                  Stay up to date
                </h4>
                <form
                  className="flex justify-between items-center w-[255px] h-10 bg-white/20 rounded-lg border-0 "
                  action=""
                >
                  <input
                    className="ml-3 text-gray-300 text-[14px] border-0 outline-0"
                    placeholder="Your email address"
                    type="text"
                  />
                  <img className="mr-3" src={sendIcon} alt="" />
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
