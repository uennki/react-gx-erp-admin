import React from 'react';
import styles from './index.module.less';

function HeaderBar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>简书</div>
      <div className={styles.nav}>
        <span className={styles.left}>首页</span>
        <span className={styles.left}>下载</span>
        <span className={styles.right}>登录</span>
        <span className={styles.right}>Aa</span>
        <input className={styles.input} type='text' placeholder='请输入' />
      </div>
      <div className={styles.login}>
        <span>注册</span>
        <span>写文章</span>
      </div>
    </div>
  );
}

export default HeaderBar;
