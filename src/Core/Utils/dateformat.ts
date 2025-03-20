type dateObjType = {
  YYYY: number;
  MM: number;
  DD: number;
  HH: number;
  mm: number;
  ss: number;
}

export default function dateFormat(date: Date = new Date(), format: string): string {
  const dateObj: dateObjType = {
    YYYY: date.getFullYear(),
    MM: date.getUTCMonth() + 1,
    DD: date.getDate(),
    HH: date.getHours(),
    mm: date.getMinutes(),
    ss: date.getSeconds(),
  };

  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (match: string) => {
    return dateObj[match as keyof dateObjType].toString().padStart(2, '0');
  });
}
