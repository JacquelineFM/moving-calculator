// icons
import Twitter from "../../assets/icon_twitter";
import Facebook from "../../assets/icon_facebook";
import Instagram from "../../assets/icon_instagram";
import WhatsApp from "../../assets/icon_whatsapp";
//
import Logo from "../../components/Logo";

// ----------------------------------------------------------------------

const SOCIALMEDIA = [
  { icon: <Twitter />, url: "https://twitter.com" },
  { icon: <Facebook />, url: "https://www.facebook.com" },
  { icon: <Instagram />, url: "https://www.instagram.com" },
];

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
          <li className="li-footer">
            <div className="li-div-footer space-y-6 lg:space-y-12">
              <h2 className="md:mt-7">About Us</h2>
              <ul className="flex flex-col gap-2">
                <li className="link-footer">
                  <a href="#">About</a>
                </li>
                <li className="link-footer">
                  <a href="#">Privacy & Policy</a>
                </li>
                <li className="link-footer">
                  <a href="#">Terms & Conditions</a>
                </li>
                <li className="link-footer">
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="li-footer">
            <div className="li-div-footer space-y-6 lg:space-y-12">
              <h2 className="md:mt-7">Navigate</h2>
              <ul className="flex flex-col gap-2">
                <li className="link-footer">
                  <a href="#">How We Work</a>
                </li>
                <li className="link-footer">
                  <a href="#">Services</a>
                </li>
                <li className="link-footer">
                  <a href="#">FAQ</a>
                </li>
                <li className="link-footer">
                  <a href="#">Contact</a>
                </li>
                <li className="link-footer">
                  <a href="#">Free Quote</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="li-footer">
            <div className="li-div-footer space-y-6 lg:space-y-12">
              <h2 className="md:mt-7">Contact Us</h2>
              <ul className="flex flex-col gap-2">
                <li className="link-footer">
                  <a href="#">Ricardo Margain 444</a>
                </li>
                <li className="link-footer">
                  <a href="tel:+52-81-1234-5678">Call: +52 81 1234 5678</a>
                </li>
                <li className="link-footer">
                  <a href="mailto:info@challenge.com">
                    Email: info@challenge.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.whatsapp.com"
                    target="_blank"
                    className="mt-8 py-2 w-full text-white font-semibold text-xl xl:text-lg tracking-wide rounded-md flex justify-center items-center border-3 border-white"
                  >
                    <WhatsApp /> WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
