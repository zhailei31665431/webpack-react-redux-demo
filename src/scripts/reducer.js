
'use strict';

import { combineReducers } from 'redux';
import { MoveScroll ,ChangeView } from './action';
import _ from 'underscore';

const HTMLCONTENT = '<div class="section-item-w">\
						<div class="section-h1-title">Icons</div>\
						<div class="section-h2-title">图标</div>\
						<div class="section-p">出于性能的考虑，所有图标都需要一个基类和对应每个图标的类。把下面的代码放在任何地方都可以正常使用。注意，为了设置正确的内补，务必在图标和文本之间添加一个空格。</div>\
						<div class="section-important">\
							<div class="section-important-border"></div>\
							<div class="section-important-val">\
								<div class="strong">不要和其他组件混合使用</div>\
								<div>图标类不能和其它组件直接联合使用。它们不能在同一个元素上与其他类共同存在。应该创建一个嵌套的标签，并将图标类应用到这个 &lt;span&gt; 标签上。</div>\
							</div>\
						</div>\
						<div class="section-code-show"></div>\
						<div class="highlight">\
							<pre>\
								<code class="language-html" data-lang="html">&lt;div&nbsp;class=""&gt;<br/>&nbsp;&nbsp;&lt;div&nbsp;class=""&gt;123123&lt;/div&gt;<br/>&lt;/div&gt;</code>\
							</pre>\
						</div>\
					</div>'
const oldData = [
			// require('./../data/header/index.js')['default'],
			require('./../data/icon/icon.js')['default'],
			require('./../data/icon/list.js')['default'],
			require('./../data/icon/use.js')['default'],
			require('./../data/color.js')['default'],
			require('./../data/buttons/index.js')['default'],
			require('./../data/buttons/block.js')['default'],
			require('./../data/buttons/icons-buttons.js')['default'],
			require('./../data/buttons/header-buttons.js')['default'],
			require('./../data/input/index.js')['default'],
			require('./../data/input/input-box.js')['default'],
			require('./../data/input/drop-down-input.js')['default'],
			require('./../data/input/input-icon.js')['default'],
			require('./../data/select/index.js')['default'],
			require('./../data/select/popup-select.js')['default'],
			require('./../data/select/drop-down-select.js')['default'],
			require('./../data/list/index.js')['default'],
			require('./../data/list/list-with-value.js')['default'],
			require('./../data/list/list-without-value.js')['default'],
			require('./../data/list/list-with-icon.js')['default'],
			require('./../data/list/list-with-file.js')['default'],
			require('./../data/toggle.js')['default'],
			require('./../data/checkbox.js')['default'],
			require('./../data/radio.js')['default'],
	  	require('./../data/card/card.js')['default'],
	  	require('./../data/card/list-card.js')['default'],
	  	require('./../data/card/top-card-1.js')['default'],
	  	require('./../data/card/top-card-2.js')['default'],
	  	require('./../data/form/index.js')['default'],
	  	require('./../data/form/placeholder-labels.js')['default'],
	  	require('./../data/form/inline-labels.js')['default'],
	  	require('./../data/form/stacked-labels.js')['default'],
	  	require('./../data/tabs/index.js')['default'],
	  	require('./../data/tabs/tabs-1.js')['default'],
	  	require('./../data/tabs/tabs-icon.js')['default'],
	  	require('./../data/tabs/tabs-progress.js')['default'],
	  	require('./../data/ActionSheet/index.js')['default'],
	  	require('./../data/ActionSheet/action-sheet-1.js')['default'],
	  	require('./../data/ActionSheet/action-sheet-2.js')['default'],
	  	require('./../data/ActionSheet/action-sheet-3.js')['default'],
	  	require('./../data/grid/index.js')['default'],
	  ];

let listData = Object.assign({},oldData);
listData[0].active = true;
// console.log(listData[0],'123123');
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

_.each(sidbarList,function(item,index){
	if(index == 0){
		if(item['child'] && item['child'].length!=0){
			item['showChild'] = true
		}
	}
})

let data = {
    showView:listData[0]["id"],
	  scrollTop:0,
	  fixPhone:false,
	  fixSidbar:false,
	  list:listData,
	  sidbarList:sidbarList,
	  phoneHtml:listData[0]['html'],
	  phoneTitle:listData[0]['val']
  };

function App(state = data,action){
	switch(action.type){
		case MoveScroll:
			let html = '',phoneTitle=''
			let sidbarList = Object.assign({},oldData);
			let parent_id = ''
			_.each(sidbarList,function(item){
				item.child = null;
				item.active = false;
				item['showChild'] = false;
				if(item['id'] == action['id']){
					html = item['html'];
					phoneTitle = item['val']
					item.active = true;
					if(item['parent_id']){
						parent_id = item['parent_id']
					}
					if(item['root']){
						parent_id = item['id'];
					}

				}
			})
			_.each(sidbarList,function(item,index){
				if(item['id'] == parent_id){
					item['showChild'] = true;
				}else{
					item['showChild'] = false;
				}
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
          		phoneHtml:html,
          		phoneTitle:phoneTitle
      			})
		case ChangeView:
		default:
			return state;
	}
}

export default App;