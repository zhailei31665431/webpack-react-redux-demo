'use strict';
// var a = require('./component');

// var b = require('./a.less');


// import { createStore } from 'redux';
/**
 * 这是一个 reducer，形式为 (state, action) => state 的纯函数。
 * 描述了 action 如何把 state 转变成下一个 state。
 *
 * state 的形式取决于你，可以是基本类型、数组、对象、
 * 甚至是 Immutable.js 生成的数据结构。惟一的要点是
 * 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
 *
 * 下面例子使用 `switch` 语句和字符串来做判断，但你可以写帮助类(helper)
 * 根据不同的约定（如方法映射）来判断，只要适用你的项目即可。
 */
/*

 function counter(state = 0, action) {
  switch (action.type) {
	  case 'INCREMENT':
	    return state + 1;
	  case 'DECREMENT':
	    return state - 1;
	  default:
	    return state;
  }
}
// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
let store = createStore(counter);
// 可以手动订阅更新，也可以事件绑定到视图层。
store.subscribe(() =>
  console.log(store.getState())
);
// 改变内部 state 惟一方法是 dispatch 一个 action。
// action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
store.dispatch({ type: 'INCREMENT' });
// 1
store.dispatch({ type: 'INCREMENT' });
// 2
store.dispatch({ type: 'DECREMENT' });
// 1
*/

// function visibilityFilter(state = 'SHOW_ALL', action) {
//   switch (action.type) {
//   case 'SET_VISIBILITY_FILTER':
//     return action.filter;
//   default:
//     return state;
//   }
// }
//
// function todos(state = [], action) {
//   switch (action.type) {
//   case 'ADD_TODO':
//     return [...state, {
//       text: action.text,
//       completed: false
//     }];
//   case 'COMPLETE_TODO':
//     return [
//       ...state.slice(0, action.index),
//       Object.assign({}, state[action.index], {
//         completed: true
//       }),
//       ...state.slice(action.index + 1)
//     ]
//   default:
//     return state;
//   }
// }
//
// import { combineReducers, createStore } from 'redux';
// let reducer = combineReducers({ visibilityFilter, todos });
// let store = createStore(reducer);
// console.log(store)



/*
 * action 类型
 */

const ADD_TODO = 'ADD_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO'
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * 其它的常量
 */

const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action 创建函数
 */

function addTodo(text) {
    return { type: ADD_TODO, text }
}

function completeTodo(index) {
    return { type: COMPLETE_TODO, index }
}

function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class HelloWorld extends Component {
  render(){
    return (
      <h1 className="zhailei">Hello world + 123456</h1>
    )
  }
}
ReactDOM.render(<HelloWorld />, document.getElementById('app'));