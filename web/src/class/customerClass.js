export const CUSTOMER_LS = '@agendario-Customer';

export const getCustomer = () => JSON.parse(localStorage.getItem(CUSTOMER_LS));

export function setCustomer(customer) {
  localStorage.setItem(CUSTOMER_LS, JSON.stringify(customer));
}

export const isAuthenticated = () =>
  JSON.parse(localStorage.getItem(CUSTOMER_LS)) !== null;

export const logout = () => {
  localStorage.removeItem(CUSTOMER_LS);
};
