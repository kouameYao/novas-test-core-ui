import { format, isToday, isYesterday, subDays } from 'date-fns';
import { fr, Locale } from 'date-fns/locale';

export function formatDate(
  dateString: string | undefined,
  lang: string = 'fr'
): string {
  if (!dateString) return '-';

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return '-';

  const now = new Date();
  const dayBeforeYesterday = subDays(now, 2);

  const hoursMinutes = format(date, 'HH:mm', { locale: fr as Locale });

  if (isToday(date)) {
    return `Aujourd'hui, ${hoursMinutes}`;
  } else if (isYesterday(date)) {
    return `Hier, ${hoursMinutes}`;
  } else if (
    format(date, 'yyyy-MM-dd') === format(dayBeforeYesterday, 'yyyy-MM-dd')
  ) {
    return `Avant-hier, ${hoursMinutes}`;
  } else if (date.getFullYear() === now.getFullYear()) {
    return format(date, 'd MMMM, HH:mm', { locale: fr as Locale });
  } else {
    return format(date, 'd MMMM yyyy, HH:mm', { locale: fr as Locale });
  }
}
