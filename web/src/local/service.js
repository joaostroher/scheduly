export const SERVICE_LS = 'persistScheduly:Service';

export const getServiceLS = () =>
  JSON.parse(localStorage.getItem(SERVICE_LS));

export function setServiceLS(service) {
  localStorage.setItem(SERVICE_LS, JSON.stringify(service));
}

export function clearService() {
  localStorage.removeItem(SERVICE_LS);
}