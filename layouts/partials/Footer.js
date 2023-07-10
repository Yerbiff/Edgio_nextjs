import config from "@config/config.json";
import menu from "@config/menu.json";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import Logo from "@components/Logo";

const Footer = () => {
  const { copyright } = config.params;
  return (

<footer class="bg-white rounded-lg shadow light:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
                <Logo/>
        {/* footer menu */}
        <ul className="mb-8 space-x-4">
          {menu.footer.map((menu) => (
            <li className="inline-block" key={menu.name}>
              <Link href={menu.url} className="p-4 text-light hover:text-black">
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* copyright */}
        
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto light:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center light:text-gray-400">{markdownify(copyright, "p", "text-light")} All Rights Reserved.</span>
    </div>
</footer>
  );
};

export default Footer;
