export type PartOfDay = 'morning' | 'afternoon' | 'evening' | 'night'

const getPartOfDay = (date: Date | number): PartOfDay => {
  
  let hours;
  
  if (typeof date === 'number') {
    hours = date;
  } else {
    hours = date.getHours();
  }

  if (hours < 12 && hours >= 3) {
    return 'morning'
  }

  if (hours >= 12 && hours < 18) {
    return 'afternoon'
  }

  if (hours >=18 && hours < 21) {
    return 'evening'
  }

  return 'night'

} 

export default getPartOfDay;