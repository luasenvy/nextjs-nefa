interface NavLinkProps extends React.PropsWithChildren {
  name: string;
  url: string;
}

export default function NavLink({ name, url }: NavLinkProps) {
  return (
    <li className="w-full">
      <a
        className="focus:shadow-outline rounded-lg bg-transparent py-2 text-sm text-[#666666] hover:text-gray-900 focus:outline-none md:px-4"
        href={url}
      >
        {name}
      </a>
    </li>
  );
}
