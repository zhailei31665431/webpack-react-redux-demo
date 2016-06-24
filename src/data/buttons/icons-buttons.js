'use strict';

var value = 'Icons Buttons'

var data = {
	id:"icons-blocks",
	content:'<div class="section-item-w">\
						<div class="section-h2-title">'+value+'</div>\
						<div class="section-p">Use the  <span class="section-highlight">block button</span>  classname to create a card with lists.</div>\
						<div class="highlight">\
							<div class="highlight-bar"></div>\
							<div class="highlight-copy"target-id="icons-blocks">复制</div>\
							<pre>\
								<code class="language-html" data-lang="html">&lt;button type="button" <span class="highlight-blue">class=</span><span class="highlight-red">"btn btn1"</span>&gt;<br/>&nbsp;&lt;i <span class="highlight-blue">class=</span><span class="highlight-red">"icon icon-chart"</span>&gt;&lt;/i&gt;<br/>&lt;/button&gt;</code>\
							</pre>\
						</div>\
					</div>',
	val:value,
	parent_id:"Buttons",
	html:'<div class="icons-buttons">\
					<button type="button" class="btn btn1">\
						<i class="icon icon-chart"></i>\
					</button>\
					<button type="button" class="btn btn1">\
						<i class="icon icon-like"></i>\
					</button>\
					<button type="button" class="btn btn1">\
						<i class="icon icon-dept"></i>\
					</button>\
					<button type="button" class="btn btn1">\
						<i class="icon icon-close"></i>\
					</button>\
				</div>',
	sourceCode:'<button&nbsp;type="button"&nbsp;class="btn&nbsp;btn1"><br/>&nbsp;<i&nbsp;class="icon&nbsp;icon-chart"></i><br/></button>'
}

export default data;