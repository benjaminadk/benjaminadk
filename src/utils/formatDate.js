import { format, addDays } from 'date-fns'

export default date => format(addDays(new Date(date), 1), 'MMMM do, yyyy')
