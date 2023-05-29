// create a function to unmask Currency $1,000.00 to 1000.00
export const unmaskCurrency = (value: string): string => {
  return value.replace(/[$,]/g, "");
};

// create a function to remove mask Number /\D+/g,''
export const unmaskNumber = (value: string): string => {
  return value.replace(/\D+/g, "");
};

// create a function to mask phone number (123) 456-7890
export const maskPhoneNumber = (value: string): string => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
};
