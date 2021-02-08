/// <reference types="react-scripts" />

/* less 模块声明 */
declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}
