export const formatDate = (dateString:string) =>{
    const date = new Date(dateString)
    const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  
  const daySuffix = getDaySuffix(day);

  return `${day}${daySuffix} ${month}, ${year}`;
}

function getDaySuffix(day:number) {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }