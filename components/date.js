import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      <h5 className="text-sm text-neutral-300">
        {format(date, "LLLL d, yyyy")}
      </h5>
    </time>
  );
}
