 'use client'
import { navigation } from "@/app/data/FooterData"
import Image from "next/image";
import LegalFooter from './LegalFooter'

const Footer = () => {
  return (
    <footer className="bg-darkgrey" aria-labelledby="footer-heading">
      <div>
        {/* <h2 id="footer-heading" className="sr-only">
          Footer
        </h2> */}
        <div className="xs:flex xs:flex-wrap mx-auto max-w-screen-2xl px-6 lg:px-8 pt-10 md:pb-8 pb-4 
                      justify-center items-center">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <Image
              src="/company/logo-removebg.png"
              alt="Southwave logo"
              width={350}
              height={350}
            //   className="h-auto w-auto"
            />
            <div className="mt-6 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-lg font-bold leading-6 text-blue-800">
                    Sale
                  </h3>
                  <ul role="list" className="md:mt-6 mt-4 md:space-y-4 text-[12px] md:text-lg">
                    {navigation.sale.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 md:mt-0">
                  <h3 className="text-base font-bold leading-6 text-blue-800">
                    About Us
                  </h3>
                  <ul role="list" className="md:mt-6 mt-4 md:space-y-4 text-[12px] md:text-lg">
                    {navigation.about.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-bold leading-6 text-blue-800">
                    Buying
                  </h3>
                  <ul role="list" className="md:mt-6 mt-4 md:space-y-4 text-[12px] md:text-lg">
                    {navigation.buy.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 md:mt-0">
                  <h3 className="text-base font-bold leading-6 text-blue-800">
                    Support
                  </h3>
                  <ul role="list" className="md:mt-6 mt-4 md:space-y-4 text-[12px] md:text-lg">
                    {navigation.help.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------- */}
      <LegalFooter />
    </footer>
  );
};

export default Footer;