'use strict';
var value = 'Drop Down Select'
var data = {
	id:"drop-down-select",
	content:'<div class="section-item-w">\
						<div class="section-h2-title">'+value+'</div>\
						<div class="section-p">Use the  <span class="section-highlight">list card</span>   classname to create a card with lists.</div>\
						<div class="highlight">\
							<div class="highlight-bar"></div>\
							<div class="highlight-copy" target-id="drop-down-select">复制</div>\
							<pre>\
								<code class="language-html" data-lang="html">&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"select-list specail"</span>&gt;<br/>&nbsp;&lt;ul <span class="highlight-blue">class=</span><span class="highlight-red">"select-list-w"</span>&gt;<br/> &nbsp;&lt;li <span class="highlight-blue">class=</span><span class="highlight-red">"select-list-item"</span>&gt;<br/>  &nbsp;&lt;i <span class="highlight-blue">class=</span><span class="highlight-red">"fa fa-check"</span>&gt;&lt;/i&gt;<br/>  &nbsp;&lt;span&gt;选择1&lt;/span&gt;<br/> &nbsp;&lt;/li&gt;<br/> &nbsp;&lt;li <span class="highlight-blue">class=</span><span class="highlight-red">"select-list-item active"</span>&gt;<br/>  &nbsp;&lt;i <span class="highlight-blue">class=</span><span class="highlight-red">"fa fa-check"</span>&gt;&lt;/i&gt;<br/>  &nbsp;&lt;span&gt;选择2&lt;/span&gt;<br/> &nbsp;&lt;/li&gt;<br/> &nbsp;&lt;li <span class="highlight-blue">class=</span><span class="highlight-red">"select-list-item"</span>&gt;<br/>  &nbsp;&lt;i <span class="highlight-blue">class=</span><span class="highlight-red">"fa fa-check"</span>&gt;&lt;/i&gt;<br/>  &nbsp;&lt;span&gt;选择3&lt;/span&gt;<br/> &nbsp;&lt;/li&gt;<br/> &nbsp;&lt;li <span class="highlight-blue">class=</span><span class="highlight-red">"select-list-item"</span>&gt;<br/>  &nbsp;&lt;i <span class="highlight-blue">class=</span><span class="highlight-red">"fa fa-check"</span>&gt;&lt;/i&gt;<br/>  &nbsp;&lt;span&gt;选择4&lt;/span&gt;<br/> &nbsp;&lt;/li&gt;<br/>&nbsp;&lt;/ul&gt;<br/>&lt;/div&gt;</code>\
							</pre>\
						</div>\
					</div>',
	val:value,
	parent_id:"select",
	html:'<div class="html-select">\
					<div class="list">\
						<div class="list-h"></div>\
						<div class="list-w">\
							<div class="list-block">\
								<div class="list-block-h"></div>\
								<div class="list-block-w">\
									<div class="list-item list-item-icon">\
										<i class="icon icon-chart"></i>\
										<div class="list-item-w">\
											<i class="fa fa-cog"></i>\
											<div class="list-item-val ellipsis">设置</div>\
										</div>\
									</div>\
								</div>\
							</div>\
						</div>\
						<div class="select-list specail">\
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
				</div>',
	sourceCode:'<div&nbsp;class="select-list&nbsp;specail"><br/>&nbsp;<ul&nbsp;class="select-list-w"><br/>&nbsp;&nbsp;<li&nbsp;class="select-list-item"><br/>&nbsp;&nbsp;&nbsp;<i&nbsp;class="fa&nbsp;fa-check"></i><br/>&nbsp;&nbsp;&nbsp;<span>选择1</span><br/>&nbsp;&nbsp;</li><br/>&nbsp;&nbsp;<li&nbsp;class="select-list-item&nbsp;active"><br/>&nbsp;&nbsp;&nbsp;<i&nbsp;class="fa&nbsp;fa-check"></i><br/>&nbsp;&nbsp;&nbsp;<span>选择2</span><br/>&nbsp;&nbsp;</li><br/>&nbsp;&nbsp;<li&nbsp;class="select-list-item"><br/>&nbsp;&nbsp;&nbsp;<i&nbsp;class="fa&nbsp;fa-check"></i><br/>&nbsp;&nbsp;&nbsp;<span>选择3</span><br/>&nbsp;&nbsp;</li><br/>&nbsp;&nbsp;<li&nbsp;class="select-list-item"><br/>&nbsp;&nbsp;&nbsp;<i&nbsp;class="fa&nbsp;fa-check"></i><br/>&nbsp;&nbsp;&nbsp;<span>选择4</span><br/>&nbsp;&nbsp;</li><br/>&nbsp;</ul><br/></div>'
}

export default data;