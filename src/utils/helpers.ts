export const formatPhone = (phone: string) =>
  `+998 ${phone.slice(0, 2)} ${phone.slice(2, 5)}-${phone.slice(
    5,
    7
  )}-${phone.slice(7)}`;
