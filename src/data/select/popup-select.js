'use strict';
var value = 'Popup Select'
var data = {
	id:"popup-select",
	content:'<div class="section-item-w">\
						<div class="section-h2-title">'+value+'</div>\
						<div class="section-p">Use the  <span class="section-highlight">list card</span>   classname to create a card with lists.</div>\
						<div class="highlight">\
							<div class="highlight-bar"></div>\
							<div class="highlight-copy" target-id="popup-select">复制</div>\
							<pre>\
								<code class="language-html" data-lang="html">&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"select"</span>&gt;<br/>&nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"select-w"</span>&gt;<br/> &nbsp;&lt;span <span class="highlight-blue">class=</span><span class="highlight-red">"select-val"</span>&gt;Select&lt;/span&gt;<br/> &nbsp;&lt;i <span class="highlight-blue">class=</span><span class="highlight-red">"fa fa-angle-down"</span>&gt;&lt;/i&gt;<br/> &nbsp;&lt;i <span class="highlight-blue">class=</span><span class="highlight-red">"fa fa-angle-up"</span>&gt;&lt;/i&gt;<br/>&nbsp;&lt;/div&gt;<br/>&nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"select-list"</span>&gt;<br/> &nbsp;&lt;ul <span class="highlight-blue">class=</span><span class="highlight-red">"select-list-w"</span>&gt;<br/>  &nbsp;&lt;li <span class="highlight-blue">class=</span><span class="highlight-red">"select-list-item"</span>&gt;<br/>   &nbsp;&lt;i <span class="highlight-blue">class=</span><span class="highlight-red">"fa fa-check"</span>&gt;&lt;/i&gt;<br/>   &nbsp;&lt;span&gt;选择1&lt;/span&gt;<br/>  &nbsp;&lt;/li&gt;<br/>  &nbsp;&lt;li <span class="highlight-blue">class=</span><span class="highlight-red">"select-list-item active"</span>&gt;<br/>   &nbsp;&lt;i <span class="highlight-blue">class=</span><span class="highlight-red">"fa fa-check"</span>&gt;&lt;/i&gt;<br/>   &nbsp;&lt;span&gt;选择2&lt;/span&gt;<br/>  &nbsp;&lt;/li&gt;<br/> &nbsp;&lt;/ul&gt;<br/>&nbsp;&lt;/div&gt;<br/>&lt;/div&gt;</code>\
							</pre>\
						</div>\
					</div>',
	val:value,
	parent_id:"select",
	html:'<div class="html-select">\
					<div class="bar bar-header">\
						<div class="select">\
							<div class="select-w">\
								<span class="select-val">Select</span>\
								<i class="fa fa-angle-down"></i>\
								<i class="fa fa-angle-up"></i>\
							</div>\
							<div class="select-list">\
								<ul class="select-list-w">\
									<li class="select-list-item">\
										<i class="fa fa-check"></i>\
										<span>选择1</span>\
									</li>\
									<li class="select-list-item active">\
										<i class="fa fa-check"></i>\
										<span>选择2</span>\
									</li>\
									<li class="select-list-item">\
										<i class="fa fa-check"></i>\
										<span>选择3</span>\
									</li>\
									<li class="select-list-item">\
										<i class="fa fa-check"></i>\
										<span>选择4</span>\
									</li>\
								</ul>\
							</div>\
						</div>\
					</div>\
				</div>',
	sourceCode:'div&nbsp;class="select"><br/>&nbsp;<div&nbsp;class="select-w"><br/>&nbsp;&nbsp;<span&nbsp;class="select-val">Select</span><br/>&nbsp;&nbsp;<i&nbsp;class="fa&nbsp;fa-angle-down"></i><br/>&nbsp;&nbsp;<i&nbsp;class="fa&nbsp;fa-angle-up"></i><br/>&nbsp;</div><br/>&nbsp;<div&nbsp;class="select-list"><br/>&nbsp;&nbsp;<ul&nbsp;class="select-list-w"><br/>&nbsp;&nbsp;&nbsp;<li&nbsp;class="select-list-item"><br/>&nbsp;&nbsp;&nbsp;&nbsp;<i&nbsp;class="fa&nbsp;fa-check"></i><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>选择1</span><br/>&nbsp;&nbsp;&nbsp;</li><br/>&nbsp;&nbsp;&nbsp;<li&nbsp;class="select-list-item&nbsp;active"><br/>&nbsp;&nbsp;&nbsp;&nbsp;<i&nbsp;class="fa&nbsp;fa-check"></i><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span>选择2</span><br/>&nbsp;&nbsp;&nbsp;</li><br/>&nbsp;&nbsp;</ul><br/>&nbsp;</div><br/></div>'
}

export default data;