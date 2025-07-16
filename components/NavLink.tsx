interface NavLinkProps extends React.PropsWithChildren {
  name: string;
  url: string;
}

export default function NavLink({ name, url }: NavLinkProps) {
  return (
    <li className="w-full">
      <a
        className="rounded-lg bg-transparent py-2 text-[#666666] text-sm hover:text-gray-900 focus:shadow-outline focus:outline-none md:px-4"
        href={url}
      >
        {name}
      </a>
    </li>
  );
}
