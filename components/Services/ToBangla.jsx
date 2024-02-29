export const toBanglaNumber = (number) => {
  const banglaNumbers = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

  // Check if the number is not an integer
  if (!Number.isInteger(number)) {
    // Split the number into integer and fractional parts
    const [integerPart, fractionalPart] = number.toString().split(".");

    // Convert the integer part to Bangla
    const banglaInteger = integerPart
      .split("")
      .map((digit) => banglaNumbers[digit])
      .join("");

    // If there's a fractional part, convert it as well
    const banglaFractional = fractionalPart
      ? "." +
        fractionalPart
          .split("")
          .map((digit) => banglaNumbers[digit])
          .join("")
      : "";

    // Combine the integer and fractional parts
    return banglaInteger + banglaFractional;
  }

  // If the input is an integer, convert it to Bangla
  return number
    .toString()
    .split("")
    .map((digit) => banglaNumbers[digit])
    .join("");
};

export const formatToBanglaDate = (dateString) => {
  try {
    if (dateString != null) {
      const date = new Date(dateString);
  
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
  
      const formattedDate = new Intl.DateTimeFormat("bn-BD", options).format(
        date
      );
  
      return formattedDate;
    }

  } catch (error) {
    return null;
  }
  
};

export const convertNumbersToBangla = (inputString) => {
  if (typeof inputString !== "string") {
    throw new Error("Input must be a string");
  }

  const banglaNumbers = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

  return inputString.replace(/\d/g, (match) => {
    return match
      .split("")
      .map((digit) => banglaNumbers[parseInt(digit, 10)])
      .join("");
  });
};
