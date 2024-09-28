interface NavLinkProps extends React.PropsWithChildren {
  name: string;
  url: string;
}

export default function NavLink({ name, url }: NavLinkProps) {
  return (
    <li className="w-full">
      <a
        className="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline"
        href={url}
      >
        {name}
      </a>
    </li>
  );
}
