import dayjs from "dayjs";

export default class DateService {
  static toDate(epoch) {
    return dayjs(epoch).format('D MMM YYYY');
  }
}
