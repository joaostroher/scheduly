export const SINGSCHEDULE_LS = 'persistScheduly:SingSchedule';

export const getSingScheduleLS = () =>
  JSON.parse(localStorage.getItem(SINGSCHEDULE_LS));

export function setSingScheduleLS(personage) {
  localStorage.setItem(SINGSCHEDULE_LS, JSON.stringify(personage));
}

export function clearSingSchedule() {
  localStorage.removeItem(SINGSCHEDULE_LS);
}
