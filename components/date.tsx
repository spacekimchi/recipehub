import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
	// TODO: figure out how to format this string
	return <time dateTime={dateString}>{dateString}</time>;
}
