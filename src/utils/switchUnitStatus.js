export default function switchUnitStatus(status) {
  switch(status) {
  case 'active':
    return {
      title: 'Доступно',
      color: 'link',
    }
  case 'sold':
    return {
      title: 'Продано',
      color: 'red',
    }
  case 'reserve':
    return {
      title: 'Бронь',
      color: 'gray',
    }
  default:
    return {}
  }
}