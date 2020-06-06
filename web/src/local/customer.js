export const CUSTOMER_LS = 'persistScheduly:Customer';

export const getCustomerLS = () =>
  JSON.parse(localStorage.getItem(CUSTOMER_LS));

export function setCustomerLS(customer) {
  localStorage.setItem(CUSTOMER_LS, JSON.stringify(customer));
}
