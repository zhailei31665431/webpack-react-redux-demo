
'use strict';

import { combineReducers } from 'redux';
import { MoveScroll ,ChangeView } from './action';
import _ from 'underscore';

const oldData = [
	  	{id:'1',content:'',val:1,html:'<div class=""><script>alert("1")</script>123123</div>'},
	  	{id:'1-1',content:'',val:'1-1',parent_id:'1',html:'<div class="">测试内容1-1</div>'},
	  	{id:'2',content:'',val:2,html:'<div class="">测试内容2</div>'},
	  	{id:'3',content:'',val:3,html:'<div class="">测试内容3</div>'},
	  	{id:'4',content:'',val:4,html:'<div class="">测试内容4</div>'},
	  	{id:'5',content:'',val:5,html:'<div class="">测试内容5</div>'},
	  	{id:'6',content:'',val:6,html:'<div class="">测试内容6</div>'},
	  	{id:'7',content:'',val:7,html:'<div class="">测试内容7</div>'},
	  ];

let listData = Object.assign({},oldData);
listData[0].active = true;
let sidbarList = Object.assign({},listData)
_.each(sidbarList,function(item,index){
	if(item['parent_id']){
		let bbb = _.findWhere(sidbarList,{id:item['parent_id']});
		item['add'] = true;
		if(bbb["child"]){
			bbb["child"].push(item)
		}else{
			bbb['child'] = [item]
		}
	}
})

sidbarList = _.filter(sidbarList,function(item){
	return !item['add'];
})

let data = {
    showView:listData[0]["id"],
	  scrollTop:0,
	  fixPhone:false,
	  fixSidbar:false,
	  list:listData,
	  sidbarList:sidbarList,
	  phoneHtml:listData[0]['html']
  };

function App(state = data,action){
	switch(action.type){
		case MoveScroll:
			let html = ''
			let sidbarList = Object.assign({},oldData);
			_.each(sidbarList,function(item){
				item.child = null;
				item.active = false;
				if(item['id'] == action['id']){
					html = item['html']
					item.active = true;
				}
			})
			_.each(sidbarList,function(item,index){
				if(item['parent_id']){
					var bbb = _.findWhere(sidbarList,{id:item['parent_id']});
					item['add'] = true;
					if(bbb["child"]){
						bbb["child"].push(item)
					}else{
						bbb['child'] = [item]
					}
				}
			})
			sidbarList = _.filter(sidbarList,function(item){
				return !item['add'];
			})
			return Object.assign({}, state,{
          		scrollTop:action['top'],
          		fixPhone:action['top']>111?true:false,
          		fixSidbar:action['top']>111?true:false,
          		sidbarList:sidbarList,
          		phoneHtml:html
      			})
		case ChangeView:
		default:
			return state;
	}
}

export default App;