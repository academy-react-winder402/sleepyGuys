export const calculateTimePassed = (start: string, end: string) => {
  const startDate: any = new Date(start);
  const endDate: any = new Date(end);

  const diffInMillis = endDate - startDate;

  const diffInMinutes = Math.floor(diffInMillis / 1000 / 60);

  const hours = Math.floor(diffInMinutes / 60);
  return `${hours} ساعت`;
};
