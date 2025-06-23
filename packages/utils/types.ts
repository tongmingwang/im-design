const toString = Object.prototype.toString;

export const isNumber = (value: any) =>
  toString.call(value) === '[object Number]';
export const isString = (value: any) =>
  toString.call(value) === '[object String]';
export const isBoolean = (value: any) =>
  toString.call(value) === '[object Boolean]';
export const isFunction = (value: any) =>
  toString.call(value) === '[object Function]';
export const isArray = (value: any) =>
  toString.call(value) === '[object Array]';
export const isObject = (value: any) =>
  toString.call(value) === '[object Object]';
export const isDate = (value: any) => toString.call(value) === '[object Date]';
