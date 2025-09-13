
import Link from 'next/link';
import { Pages } from '@/features/arrays/types';


const HeaderLinks = () => {
  return (
    <nav
      data-testid="header-links"
      className="md:flex grow basis-[50%] text-[#E3E3E3] charter justify-end m-2 hidden"
    >
      {Pages.map((item, index) => {
        return (
          <Link
            href={`/${item.replace(/^the /i, "")}`}
            className="hover:underline m-2 uppercase text-xl font-bold"
            key={index}
          >
            {item}
          </Link>
        );
      })}
    </nav>
  );
};


export default HeaderLinks;