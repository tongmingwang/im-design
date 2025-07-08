import { withInstall } from '@/utils/install';
import DatePicker from './ImDatePicker.vue';
import TimePicker from './ImTimePicker.vue';
import DateRangePicker from './ImDateRangePicker.vue';

export const ImDatePicker = withInstall('ImDatePicker', DatePicker);
export const ImTimePicker = withInstall('ImTimePicker', TimePicker);
export const ImDateRangePicker = withInstall(
  'ImDateRangePicker',
  DateRangePicker
);
