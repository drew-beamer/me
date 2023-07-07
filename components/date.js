import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>
    <h5 className="text-neutral-300 text-sm">{format(date, 'LLLL d, yyyy')}</h5>
  </time>;
}