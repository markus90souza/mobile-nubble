/* eslint-disable camelcase */
import { differenceInSeconds, format, parseISO } from 'date-fns'

export const formatRelative = (dateISO: string) => {
  const date = parseISO(dateISO)
  const now = new Date()

  const difference_in_seconds = differenceInSeconds(now, date)

  if (difference_in_seconds < 60) {
    return `${difference_in_seconds} s`
  }

  const difference_in_minutes = Math.round(difference_in_seconds / 60)

  if (difference_in_minutes < 60) {
    return `${difference_in_minutes} m`
  }

  const difference_in_hours = Math.floor(difference_in_minutes / 60)

  if (difference_in_hours < 24) {
    return `${difference_in_hours} h`
  }

  const difference_in_days = Math.floor(difference_in_hours / 24)

  if (difference_in_days < 7) {
    return `${difference_in_days} d`
  }

  const difference_in_weeks = Math.floor(difference_in_days / 7)

  if (difference_in_weeks < 4) {
    return `${difference_in_weeks} sem`
  }

  const difference_in_months = Math.round(difference_in_days / 30)

  if (difference_in_months < 12) {
    return `${difference_in_months} m`
  }

  return format(date, 'dd/MM/yyyy')
}
