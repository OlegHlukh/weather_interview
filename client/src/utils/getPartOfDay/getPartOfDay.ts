export type PartOfDay = 'morning' | 'afternoon' | 'evening' | 'night'

const getPartOfDay = (date: Date | number): PartOfDay => {
  
  let hours;
  
  if (typeof date === 'number') {
    hours = date;
  } else {
    hours = date.getHours();
  }

  console.log(hours);
  


  if (hours <= 12) {
    return 'morning'
  }

  if (hours > 12 && hours < 18) {
    return 'afternoon'
  }

  if (hours >=18 && hours < 21) {
    return 'evening'
  }

  if (hours >= 21) {
    return 'night'
  }

  return 'afternoon';
} 

export default getPartOfDay;