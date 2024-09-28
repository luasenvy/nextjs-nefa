import CheckCircleRounded from "@mui/icons-material/CheckCircleRounded";

interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

export default function ListItem({ title, children }: ListItemProps) {
  return (
    <li className="space-y-2">
      <div className="flex items-center space-x-2">
        <CheckCircleRounded className="text-[#0c66ee]" />
        <span>{title}</span>
      </div>
      {children}
    </li>
  );
}
