

export const EMAIL_REGEX =
  /^[^<>()[\]\\,;:\%#^\s@\"$&!@]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}))$/i

export const PASSWORD_REGEX = {
  SPECIAL: /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
  LENGTH: /^[a-z0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{12,}$/i,
  DIGIT: /\d/,
  UPPER: /[A-Z]/,
  LOWER: /[a-z]/,
}

export const DATE_FORMAT = 'DD/MM/YYYY'