'use strict';
var value = 'List with Value'
var data = {
	id:"list-with-value",
	content:'<div class="section-item-w">\
						<div class="section-h2-title">'+value+'</div>\
						<div class="section-p">Use the  <span class="section-highlight">list card</span>   classname to create a card with lists.</div>\
						<div class="highlight">\
							<div class="highlight-bar"></div>\
							<div class="highlight-copy"target-id="list-with-value">复制</div>\
							<pre>\
								<code class="language-html" data-lang="html">&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list"</span>&gt;<br/>&nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-h"</span>&gt;&lt;/div&gt;<br/>&nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-w"</span>&gt;<br/> &nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-block"</span>&gt;<br/>  &nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-block-h"</span>&gt;&lt;/div&gt;<br/>  &nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-block-w"</span>&gt;<br/>   &nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-item"</span>&gt;<br/>    &nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-item-w"</span>&gt;<br/>     &nbsp;&lt;label&gt;机构代码&lt;/label&gt;<br/>     &nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-item-val ellipsis"</span>&gt;0102&lt;/div&gt;<br/>    &nbsp;&lt;/div&gt;<br/>   &nbsp;&lt;/div&gt;<br/>   &nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-item"</span>&gt;<br/>    &nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-item-w"</span>&gt;<br/>     &nbsp;&lt;label&gt;机构名称&lt;/label&gt;<br/>     &nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-item-val ellipsis"</span>&gt;南京长江路&lt;/div&gt;<br/>    &nbsp;&lt;/div&gt;<br/>   &nbsp;&lt;/div&gt;<br/>   &nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-item"</span>&gt;<br/>    &nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-item-w"</span>&gt;<br/>     &nbsp;&lt;label&gt;客户姓名&lt;/label&gt;<br/>     &nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-item-val ellipsis"</span>&gt;刘金玉&lt;/div&gt;<br/>    &nbsp;&lt;/div&gt;<br/>   &nbsp;&lt;/div&gt;<br/>  &nbsp;&lt;/div&gt;<br/> &nbsp;&lt;/div&gt;<br/>&nbsp;&lt;/div&gt;<br/>&lt;/div&gt;</code>\
							</pre>\
						</div>\
					</div>',
	val:value,
	parent_id:"list",
	html:'<div class="html-list-1">\
					<div class="list">\
						<div class="list-h"></div>\
						<div class="list-w">\
							<div class="list-block">\
								<div class="list-block-h"></div>\
								<div class="list-block-w">\
									<div class="list-item">\
										<div class="list-item-w">\
											<label>机构代码</label>\
											<div class="list-item-val ellipsis">0102</div>\
										</div>\
									</div>\
									<div class="list-item">\
										<div class="list-item-w">\
											<label>机构名称</label>\
											<div class="list-item-val ellipsis">南京长江路</div>\
										</div>\
									</div>\
									<div class="list-item">\
										<div class="list-item-w">\
											<label>客户姓名</label>\
											<div class="list-item-val ellipsis">刘金玉</div>\
										</div>\
									</div>\
								</div>\
							</div>\
							<div class="list-block">\
								<div class="list-block-h"></div>\
								<div class="list-block-w">\
									<div class="list-item">\
										<div class="list-item-w">\
											<label>证件编号</label>\
											<div class="list-item-val ellipsis">131126********0056</div>\
										</div>\
									</div>\
									<div class="list-item">\
										<div class="list-item-w">\
											<label>手机号码</label>\
											<div class="list-item-val ellipsis">18057114245</div>\
										</div>\
									</div>\
									<div class="list-item">\
										<div class="list-item-w">\
											<label>开户类型</label>\
											<div class="list-item-val ellipsis">新开账户</div>\
										</div>\
									</div>\
									<div class="list-item">\
										<div class="list-item-w">\
											<label>审核类型</label>\
											<div class="list-item-val ellipsis">未判定</div>\
										</div>\
									</div>\
								</div>\
							</div>\
							<div class="list-block">\
								<div class="list-block-h"></div>\
								<div class="list-block-w">\
									<div class="list-item">\
										<div class="list-item-w">\
											<label>记录状态</label>\
											<div class="list-item-val ellipsis">待审核</div>\
										</div>\
									</div>\
									<div class="list-item">\
										<div class="list-item-w">\
											<label>账户情况</label>\
											<div class="list-item-val ellipsis">1,000</div>\
										</div>\
									</div>\
								</div>\
							</div>\
						</div>\
					</div>\
				</div>',
	sourceCode:'<div&nbsp;class="list"><br/>&nbsp;<div&nbsp;class="list-h"></div><br/>&nbsp;<div&nbsp;class="list-w"><br/>&nbsp;&nbsp;<div&nbsp;class="list-block"><br/>&nbsp;&nbsp;&nbsp;<div&nbsp;class="list-block-h"></div><br/>&nbsp;&nbsp;&nbsp;<div&nbsp;class="list-block-w"><br/>&nbsp;&nbsp;&nbsp;&nbsp;<div&nbsp;class="list-item"><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div&nbsp;class="list-item-w"><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label>机构代码</label><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div&nbsp;class="list-item-val&nbsp;ellipsis">0102</div><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><br/>&nbsp;&nbsp;&nbsp;&nbsp;</div><br/>&nbsp;&nbsp;&nbsp;&nbsp;<div&nbsp;class="list-item"><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div&nbsp;class="list-item-w"><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label>机构名称</label><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div&nbsp;class="list-item-val&nbsp;ellipsis">南京长江路</div><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><br/>&nbsp;&nbsp;&nbsp;&nbsp;</div><br/>&nbsp;&nbsp;&nbsp;&nbsp;<div&nbsp;class="list-item"><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div&nbsp;class="list-item-w"><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label>客户姓名</label><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div&nbsp;class="list-item-val&nbsp;ellipsis">刘金玉</div><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><br/>&nbsp;&nbsp;&nbsp;&nbsp;</div><br/>&nbsp;&nbsp;&nbsp;</div><br/>&nbsp;&nbsp;</div><br/>&nbsp;</div><br/></div>'
}

export default data;