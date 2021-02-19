import React, {
  useEffect,
  useState,
  useRef,
  useReducer,
  useCallback,
  useMemo,
  useContext,
  useDebugValue,
  useImperativeHandle,
  useLayoutEffect,
} from 'react';
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import classnames from 'classnames';

import { useStore, useDispatch, useSelector } from 'react-redux';
// import { logoutAction, loginAction } from '../store/login/actionCreators';

export default function Home() {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const match = useRouteMatch();
  const store = useStore();
  const dispatch = useDispatch();

  const state = useSelector((state: any) => {
    return state;
  });

  useEffect(() => {
    fetch('/api/hello').then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div>
      {/* <h1 className={classnames(style.blue)}>Home Page</h1>
      <button onClick={() => dispatch(loginAction())}>login</button>
      <button onClick={() => dispatch(logoutAction())}>logout</button> */}

      <div>{JSON.stringify(state)}</div>
    </div>
  );
}
