// assets
import WhatsApp from "../../assets/icon_whatsapp";
// data
import { SOCIALMEDIA } from "../../data/DefaultSocialMedia";
import { navConfigFooter } from "../../data/DefaultNavConfig";
// components
import Logo from "../../components/Logo";

// ----------------------------------------------------------------------

const Footer = () => {
  return (
    <footer className="bg-primary py-20 px-6 xl:py-28">
      <div className="md:mx-20 xl:mx-44 text-white">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center text-2xl font-normal gap-14 md:gap-16 lg:gap-10">
          <li className="li-footer">
            <div className="li-div-footer space-y-8">
              <Logo sx="h-20 w-20" />
              <p className="text-base xl:text-sm leading-8 xl:leading-9">
                It is a long established fact that a reader will be distracted
                by the readable content of a page whenters.
              </p>
              <div className="flex items-center justify-between w-full xl:w-4/6">
                {SOCIALMEDIA.map((page, idx) => (
                  <a
                    key={idx}
                    href={page.url}
                    target="_blank"
                    className="link-social-media"
                  >
                    {page.icon}
                  </a>
                ))}
              </div>
            </div>
          </li>
          {navConfigFooter.map(({ subheader, items }, idx) => (
            <li key={idx} className="li-footer">
              <div className="li-div-footer space-y-6 lg:space-y-12">
                <h2 className="md:mt-7">{subheader}</h2>
                <ul className="flex flex-col gap-2">
                  {items.map((link, idx) => (
                    <li key={idx} className="link-footer">
                      <a href={link.path}>{link.title}</a>
                    </li>
                  ))}
                  {idx === 2 && (
                    <li>
                      <a
                        href="https://www.whatsapp.com"
                        target="_blank"
                        className="mt-8 py-2 w-full text-white font-semibold text-xl xl:text-lg tracking-wide rounded-md flex justify-center items-center border-3 border-white"
                      >
                        <WhatsApp /> WhatsApp
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
