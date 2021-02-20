import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import styles from './index.module.less';

function HeaderBar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>简书</div>
      <div className={styles.nav}>
        <span className={styles.left}>
          <NavLink to='/' exact activeClassName={classnames(styles.active)}>
            首页
          </NavLink>
        </span>
        <span className={styles.left}>
          <NavLink to='/download' activeClassName={styles.active}>
            下载
          </NavLink>
        </span>
        <span className={styles.right}>
          <NavLink to='/login' activeClassName={styles.active}>
            登录
          </NavLink>
        </span>
        <span className={styles.right}>
          <NavLink to='/aa' activeClassName={styles.active}>
            Aa
          </NavLink>
        </span>

        <div className={styles.search}>
          <input className={styles.input} type='text' placeholder='请输入' />
          <i className={classnames('iconfont icon-sousuo', styles.icon)}></i>
        </div>
      </div>
      <div>
        <span className={styles['register-button']}>注册</span>
        <span className={styles['write-button']}>写文章</span>
      </div>
    </div>
  );
}

export default HeaderBar;
