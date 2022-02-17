const format = {
  money(amount) {
    let dollarUSLocale = Intl.NumberFormat('en-US'); 
    return dollarUSLocale.format(amount)
  },
  genres(list) {
    return list.join(', ')
  },
  date(date) {
    const splitDate = date.split('-')
    const newDate = splitDate.slice(1)
    newDate.push(splitDate[0])
    return newDate.join('/')
  },
  rating(rating) {
    return `${rating.toFixed(2)} / 10`
  }
}

export default format;