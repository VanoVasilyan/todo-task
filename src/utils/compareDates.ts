import dayjs from 'dayjs';
import { ETaskStatus } from '../types/tasks';

export const compareDates = (date: Date) => {
    const today = dayjs();
    const inputDate = dayjs(date);
    if (inputDate.isBefore(today, 'day') || inputDate.isSame(today, 'day')) {
        return ETaskStatus.OVERDUE;
    } else if (inputDate.isAfter(today, 'day')) {
        return ETaskStatus.PENDING;
    }
}
