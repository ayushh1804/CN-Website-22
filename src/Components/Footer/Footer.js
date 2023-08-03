import React from "react";
import { Link } from "react-router-dom";
import Scroll from "react-scroll";
// import style from './Footer.module.css'
// import { div } from 'react-router-dom'

function Footer() {
  const goToAbout = async () => {
    var scroller = Scroll.scroller;
    await new Promise((r) => setTimeout(r, 500));
    scroller.scrollTo("about", { smooth: true, offset: -80, duration: 200 });
  };
  return (
    <footer className="dark:bg-opacity-60 backdrop-blur-lg backdrop-filter bg-neutral-900 dark:bg-neutral-900 w-screen">
      <div className="md:grid grid-cols-3 gap-5 py-8 px-5 md:grid-cols-3">
        {/* Social media handles */}
        <div className="block md:hidden mb-12">
          <div classNameName="md:flex md:items-center md:justify-center">
            <div className="text-white mx-auto mb-5 mt-7">Follow Us</div>
          </div>
          <div className="flex md:space-x-4 space-x-3 justify-center md:justify-center md:mt-0">
            <a
              href="https://www.facebook.com/codingninjasSRM/"
              className="text-orange-700 hover:text-white"
            >
              <svg
                className="md:w-8 md:h-8 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://www.instagram.com/coding.ninjas_srm/?hl=en"
              className="text-orange-700 hover:text-white"
            >
              <svg
                className="md:w-8 md:h-8 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Instagram page</span>
            </a>
            <a
              href="https://mobile.twitter.com/ninjassrm"
              className="text-orange-700 hover:text-white"
            >
              <svg
                className="md:w-8 md:h-8 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="https://in.linkedin.com/company/coding-ninjas-club-srm"
              className="text-orange-700 hover:text-white"
            >
              <svg
                fill="currentColor"
                className=" md:w-8 md:h-8 w-6 h-6 bi bi-divedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
              <span className="sr-only">LinkedIn page</span>
            </a>
          </div>
        </div>
        {/* Useful divs */}
        <div>
          <h2 className="mb-6 text-sm font-bold text-orange-700  dark:text-orange-700">
            Useful Links
          </h2>
          <ul className="text-white dark:text-white">
            <li className="mb-4">
              <Link to="/" className="" onClick={goToAbout}>
                About
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/domains">Domains</Link>
            </li>
            <li className="mb-4">
              <Link to="/team" className="">
                Team
              </Link>
            </li>
            <li className="mb-4">
              <a href="https://medium.com/@cnsrm" className="">
                Medium
              </a>
            </li>
          </ul>
        </div>
        {/* Social media handles */}
        <div className="hidden md:block">
          <div classNameName="md:flex md:items-center md:justify-center">
            <div className="text-white mx-auto mb-5 mt-7">Follow Us</div>
          </div>
          <div className="flex md:space-x-4 space-x-3 justify-center md:justify-center md:mt-0">
            <a
              href="https://www.facebook.com/codingninjasSRM/"
              className="text-orange-700 hover:text-white"
            >
              <svg
                className="md:w-8 md:h-8 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://www.instagram.com/coding.ninjas_srm/?hl=en"
              className="text-orange-700 hover:text-white"
            >
              <svg
                className="md:w-8 md:h-8 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Instagram page</span>
            </a>
            <a
              href="https://mobile.twitter.com/ninjassrm"
              className="text-orange-700 hover:text-white"
            >
              <svg
                className="md:w-8 md:h-8 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="https://in.linkedin.com/company/coding-ninjas-club-srm"
              className="text-orange-700 hover:text-white"
            >
              <svg
                fill="currentColor"
                className=" md:w-8 md:h-8 w-6 h-6 bi bi-divedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
              <span className="sr-only">LinkedIn page</span>
            </a>
          </div>
        </div>
        {/* Services */}
        <div>
          <h2 className="mb-6 text-sm font-bold text-gray-500  dark:text-orange-700">
            Domains
          </h2>
          <div className="flex items-center justify-center gap-10 ">
            <ul className="text-white dark:text-white">
              <li className="mb-4">
                <Link to="/technical/aiml" className="">
                  AI/ML
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/technical/appdev" className="">
                  App Dev
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/technical/webdev" className="">
                  Web Dev
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/technical/webdev" className="">
                  CP
                </Link>
              </li>

            </ul>
            <ul className="text-white dark:text-white">
              <li className="mb-4">
                <Link to="/nontechnical/corporate" className="">
                  Corporate
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/nontechnical/creative" className="">
                  Creative
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/nontechnical/editorial" className="">
                  Editorial
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/nontechnical/sponsorship" className="">
                  Sponsorship
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div></div>
      </div>

      {/* Copyrights */}
      <div classNameName="dark:bg-neutral-800 dark:bg-opacity-30">
        <div className="mt-7 pt-4 pb-4 text-sm text-white dark:text-stone-200 sm:text-center text-light">
          © 2023 <a href="/">Coding Ninjas SRM™</a>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
