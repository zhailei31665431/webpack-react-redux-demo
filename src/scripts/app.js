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
				<li className={"sidbar-item"+(this.props.data.active?' active':'')}>
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
		let {id} = this.props.data;
		return (
				<div className={"section-item"+(' section-item-'+id)} data-active-key={id}>
					<div className="section-item-w">
						<div className="section-h1-title">Icons</div>
						<div className="section-h2-title">图标</div>
						<div className="section-p">出于性能的考虑，所有图标都需要一个基类和对应每个图标的类。把下面的代码放在任何地方都可以正常使用。注意，为了设置正确的内补，务必在图标和文本之间添加一个空格。</div>
						<div className="section-important">
							<div className="section-important-border"></div>
							<div className="section-important-val">
								<div className="strong">不要和其他组件混合使用</div>
								<div>图标类不能和其它组件直接联合使用。它们不能在同一个元素上与其他类共同存在。应该创建一个嵌套的标签，并将图标类应用到这个 &lt;span&gt; 标签上。</div>
							</div>
						</div>
						<div className="section-code-show"></div>
						<div className="highlight"><pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"dropup"</span><span className="nt">&gt;</span>
							  <span className="nt">&lt;button</span> <span className="na">className=</span><span className="s">"btn btn-default dropdown-toggle"</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">id=</span><span className="s">"dropdownMenu2"</span> <span className="na">data-toggle=</span><span className="s">"dropdown"</span> <span className="na">aria-haspopup=</span><span className="s">"true"</span> <span className="na">aria-expanded=</span><span className="s">"false"</span><span className="nt">&gt;</span>
							    Dropup
							    <span className="nt">&lt;span</span> <span className="na">className=</span><span className="s">"caret"</span><span className="nt">&gt;&lt;/span&gt;</span>
							  <span className="nt">&lt;/button&gt;</span>
							  <span className="nt">&lt;ul</span> <span className="na">className=</span><span className="s">"dropdown-menu"</span> <span className="na">aria-labelledby=</span><span className="s">"dropdownMenu2"</span><span className="nt">&gt;</span>
							    <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Action<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
							    <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Another action<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
							    <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Something else here<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
							    <span className="nt">&lt;li&gt;&lt;a</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Separated link<span className="nt">&lt;/a&gt;&lt;/li&gt;</span>
							  <span className="nt">&lt;/ul&gt;</span>
							<span className="nt">&lt;/div&gt;</span></code></pre></div>
					</div>
				</div>
			)
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
}
class Phone extends Component{
	render(){
		return (
				<div className={'phone'+(this.props.fixPhone?' fix':'')}>
					<div className="phone-container" dangerouslySetInnerHTML={{__html:htmlencode(this.props.phoneHtml)}}>
					</div>
				</div>
			)
	}
}

class Controller extends Component{
	render(){
		let {showView, scrollTop, list,sidbarList,fixPhone,fixSidbar,onSidbarClick,phoneHtml} = this.props;
		return (
				<div>
					<Sidbar list={sidbarList} fixSidbar={fixSidbar} onSidbarClick={onSidbarClick}></Sidbar>
					<section className="main">
						<List list={list}></List>
						<Phone fixPhone={fixPhone} phoneHtml={phoneHtml}></Phone>
					</section>
				</div>
			)
	}
	componentDidMount(){
		let { moveScroll } = this.props;
		setTimeout(function(){
			$(document).on('scroll',function(){
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				var ItemList = _.filter($('.section-item'),function(item){
					if(scrollTop>=$(item).offset().top-30 && scrollTop<($(item).offset().top+$(item).height()-20)){
						return item
					}
				})
				if(ItemList.length==0){
					ItemList = $('.section-item').eq(0);
				}else{
					ItemList = ItemList[0];
				}
				var id = $(ItemList).attr('data-active-key');
				moveScroll(id,scrollTop)
			})
			$(document).trigger('scroll')
		},100)

		$('.header-ul-c .header-ul-val').click(function(){
			$('.header-ul-c').hasClass("active")?$('.header-ul-c').removeClass('active'):$('.header-ul-c').addClass('active')
		})
	}
}

function event(dispatch){
	return {
		onSidbarClick: (id) => {
			let scrollTop = $('.section-item-'+id).offset().top;
			$('body').stop().animate({scrollTop:scrollTop},300);
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