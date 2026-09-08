// Currency Formatter for Indian Rupee (INR - ₹)
export const formatPrice = (amount) => {
  if (amount === null || amount === undefined || isNaN(amount)) return '₹0.00';
  return `₹${Number(amount).toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
};

export const formatINR = (amount) => {
  if (amount === null || amount === undefined || isNaN(amount)) return '₹0';
  return `₹${Number(amount).toLocaleString('en-IN')}`;
};

export default formatPrice;
