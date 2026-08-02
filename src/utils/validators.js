// trim and remove < > " { } from user text
export const sanitizeInputText = (text) => {
  if (!text) return '';
  return text.trim().replace(/[<>"{}]/g, '');
};

export const validateNumericRange = (value, min, max) => {
  const n = parseFloat(value);
  if (isNaN(n)) return false;
  return n >= min && n <= max;
};
