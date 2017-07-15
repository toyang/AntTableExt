// this file is not used if use https://github.com/ant-design/babel-plugin-import
const ENV = process.env.NODE_ENV;
if (ENV !== 'production' &&
    ENV !== 'test' &&
    typeof console !== 'undefined' &&
    console.warn &&
    typeof window !== 'undefined') {
    console.warn('You are using a whole package of antd, ' +
        'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.');
}
export { default as Button } from './button';
export { default as Checkbox } from './checkbox';
export { default as Dropdown } from './dropdown';
export { default as Icon } from './icon';
export { default as Input } from './input';
export { default as LocaleProvider } from './locale-provider';
export { default as Menu } from './menu';
export { default as Pagination } from './pagination';
export { default as Radio } from './radio';
export { default as Select } from './select';
export { default as Spin } from './spin';
export { default as Table } from './table';
export { default as Tooltip } from './tooltip';
