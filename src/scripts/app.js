'use strict'

import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { connect } from 'react-redux';

import _ from 'underscore';

import { moveScroll ,changeView } from './action';

function htmlencode(s){
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(s));
  var content = div.innerHTML;
  $(div).remove()
  return content;
}

class SidbarItem extends Component{
	render(){
		let child,self=this;
		let {onSidbarClick} = this.props;
		if(this.props.data.child){
			child = <ul className="sidbar-item-child-list">
										{_.map(this.props.data.child, function (p) {
										  return <SidbarItem key={p['id']} data={p}  onSidbarClick={onSidbarClick}/>;
										})}
									</ul>
		}
		return (
				<li className={"sidbar-item"+(this.props.data.active?' active':'')+(this.props.data['showChild']?' show-child':'')}>
					<div className="sidbar-item-show" onClick ={e=>{e.preventDefault();onSidbarClick(this.props.data['id'])}}>
						<div className="sidbar-item-show-bg"></div>
						<div className="sidbar-item-show-val">{this.props.data['val']}</div>
					</div>
					{child?child:''}
				</li>
			)
	}
}

class Sidbar extends Component{
	render(){
		let self = this;
		let {onSidbarClick} = this.props;
		return (
				<ul className={"sidbar"+(this.props.fixSidbar?' fix':'')}>
					{_.map(this.props.list, function (p) {
					  return <SidbarItem key={p['id']} data={p} onSidbarClick={onSidbarClick}/>;
					})}
				</ul>
			)
	}
}


class ListItem extends Component{
	render(){
		let {id,content} = this.props.data;
		return (
				<div className={"section-item"+(' section-item-'+id)} data-active-key={id}>
					<div ref="container"className="yyyyy" dangerouslySetInnerHTML={{__html:content}}>
					</div>
				</div>
			)
	}
	componentDidMount(){
	}
}

class List extends Component{
	render(){
		return (
				<div className="main-c">
					{_.map(this.props.list, function (p) {
						return <ListItem key={p['id']} data={p}></ListItem>;
					})}
				</div>
			)
	}
	componentDidMount(){
		
	}
}
class Phone extends Component{
	render(){
		// console.log(this.props.phoneTitle,'123')
		return (
				<div className={'phone'+(this.props.fixPhone?' fix':'')}>
					<div className="phone-title">{this.props.phoneTitle}</div>
					<div className="phone-container" dangerouslySetInnerHTML={{__html:this.props.phoneHtml}}>
					</div>
				</div>
			)
	}
}

class Controller extends Component{
	render(){
		let {showView, scrollTop, list,sidbarList,fixPhone,fixSidbar,onSidbarClick,phoneHtml,phoneTitle} = this.props;
		return (
				<div>
					<Sidbar list={sidbarList} fixSidbar={fixSidbar} onSidbarClick={onSidbarClick}></Sidbar>
					<div className="main">
						<List list={list}></List>
						<Phone fixPhone={fixPhone} phoneTitle={phoneTitle} phoneHtml={phoneHtml}></Phone>
					</div>
				</div>
			)
	}
	componentDidMount(){
		let { moveScroll ,list } = this.props;
		$(document).on('scroll',function(){
			console.log('走了么');
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
			var ItemList = _.filter($('.section-item'),function(item){
				if(($(item).offset().top>=scrollTop && $(item).offset().top<scrollTop+clientHeight/2) || ($(item).offset().top+$(item).height()>=scrollTop && $(item).offset().top+$(item).height()<scrollTop+clientHeight/2)){
					return item
				}

			})
			if(ItemList.length==0){
			}else{
				ItemList = ItemList[ItemList.length-1];
				var id = $(ItemList).attr('data-active-key');
				moveScroll(id,scrollTop)
			}
			// console.log(ItemList,'123')
		})

		$('.copy-aa').on('click',function(){
			var sourceCode = $('.textarea').val();
			sourceCode = sourceCode.replace(/\n/gi,"<br/>");
			sourceCode = sourceCode.replace(/\s/gi,"&nbsp;");
			sourceCode = sourceCode.replace(/'/gi,"\\'");
			console.log(sourceCode,'sourceCode');

			var a = htmlencode($('.textarea').val());
			a = a.replace(/\n/gi,'<br/>');
			a = a.replace(/'/gi,"\\'");
			a = a.replace(/\s&gt;/gi,'&nbsp;&gt;');
			a = a.replace(/\s&lt;/gi,'&nbsp;&lt;');
			a = a.replace(/(\bclass=)("(\w+-*\s*\w*)+")/gi,'<span class="highlight-blue">$1</span><span class="highlight-red">$2</span>');
			console.log(a);
		})

		$('.header-ul-c .header-ul-val').click(function(){
			$('.header-ul-c').hasClass("active")?$('.header-ul-c').removeClass('active'):$('.header-ul-c').addClass('active')
		})
		setTimeout(function(){
			var clipboard = new Clipboard('.highlight-copy',{
				text:function(trigger){
					var data = _.findWhere(list,{id:$(trigger).attr('target-id')});
					var html = data['sourceCode'];
					html = html.replace(/<br\/>/gi,'\n');
					html = html.replace(/&nbsp;/gi,' ');
					html = html.replace(/\'/gi,"'");
		      return html;
		    }
			});
			clipboard.on('success', function(e) {
			  swal({title:'已拷贝到剪切板!',timer:1000})
			  e.clearSelection();
			});
		},200)

		setTimeout(function(){
			$(document).trigger('scroll');
		},1000)
	}
}


function event(dispatch){
	return {
		onSidbarClick: (id) => {
			let scrollTop = $('.section-item-'+id).offset().top;
			$('body').stop().animate({scrollTop:scrollTop-80},300);
		},
		moveScroll:(id,top)=>{
			dispatch(moveScroll(id,top))
		}

	}
}

function select(state) {
  return state
}

export default connect(select,event)(Controller)