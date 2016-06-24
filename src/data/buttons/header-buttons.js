'use strict';

var value = 'Header Buttons'

var data = {
	id:"header-blocks",
	content:'<div class="section-item-w">\
						<div class="section-h2-title">'+value+'</div>\
						<div class="section-p">Use the  <span class="section-highlight">block button</span>  classname to create a card with lists.</div>\
						<div class="highlight">\
							<div class="highlight-bar"></div>\
							<div class="highlight-copy"target-id="header-blocks">复制</div>\
							<pre>\
								<code class="language-html" data-lang="html">&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"bar bar-header"</span>&gt;<br/>&nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"bar-w"</span>&gt;<br/> &nbsp;&lt;button type="button" <span class="highlight-blue">class=</span><span class="highlight-red">"btn"</span>&gt;返回&lt;/button&gt;<br/> &nbsp;&lt;button type="button" <span class="highlight-blue">class=</span><span class="highlight-red">"btn right"</span>&gt;下一步&lt;/button&gt;<br/> &nbsp;&lt;h1 <span class="highlight-blue">class=</span><span class="highlight-red">"ellipsis"</span>&gt;标题&lt;/h1&gt;<br/>&nbsp;&lt;/div&gt;<br/>&lt;/div&gt;</code>\
							</pre>\
						</div>\
					</div>',
	val:value,
	parent_id:"Buttons",
	html:'<div class="header-buttons">\
					<div class="bar bar-header">\
						<div class="bar-w">\
							<button type="button" class="btn">返回</button>\
							<button type="button" class="btn right">下一步</button>\
							<h1 class="ellipsis">标题</h1>\
						</div>\
					</div>\
				</div>',
	sourceCode:'<div&nbsp;class="bar&nbsp;bar-header"><br/>&nbsp;<div&nbsp;class="bar-w"><br/>&nbsp;&nbsp;<button&nbsp;type="button"&nbsp;class="btn">返回</button><br/>&nbsp;&nbsp;<button&nbsp;type="button"&nbsp;class="btn&nbsp;right">下一步</button><br/>&nbsp;&nbsp;<h1&nbsp;class="ellipsis">标题</h1><br/>&nbsp;</div><br/></div>'
}

export default data;