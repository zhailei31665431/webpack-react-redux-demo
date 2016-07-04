'use strict';
var value = 'Alert'
var id = "alert"
var data = {
	id:id,
	content:'<div class="section-item-w">\
						<div class="section-h2-title">'+value+'</div>\
						<div class="section-p">Use the   <span class="section-highlight">action sheet-3</span>   classname to create a card with lists.</div>\
						<div class="highlight">\
							<div class="highlight-bar"></div>\
							<div class="highlight-copy" target-id="'+id+'">复制</div>\
							<pre>\
								<code class="language-html" data-lang="html">&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"custom-alert custom-confirm"</span>&gt;<br/>&nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"custom-alert-bg"</span>&gt;&lt;/div&gt;<br/>&nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"custom-alert-w"</span>&gt;<br/> &nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"custom-alert-close"</span>&gt;<br/>  &nbsp;&lt;i <span class="highlight-blue">class=</span><span class="highlight-red">"fa fa-close"</span>&gt;&lt;/i&gt;<br/> &nbsp;&lt;/div&gt;<br/> &nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"custom-alert-c"</span>&gt;<br/>  &nbsp;&lt;img src="http://www.joywok.com/public/images/avatar/hdr-pic.png"/&gt;<br/>  &nbsp;&lt;h1&gt;申请说明&lt;/h1&gt;<br/>  &nbsp;&lt;p&gt;请提供工号、姓名、用途、具体要求如&lt;br/&gt;税前税后，年收入还是月收入等相&lt;br/&gt;关信息；于工作日内给徐璠发&lt;br/&gt;邮件(跨区除外)预约取件&lt;/p&gt;<br/> &nbsp;&lt;/div&gt;<br/> &nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"custom-alert-btn"</span>&gt;<br/>  &nbsp;&lt;button type="button" <span class="highlight-blue">class=</span><span class="highlight-red">"btn btn1"</span>&gt;我知道了&lt;/button&gt;<br/> &nbsp;&lt;/div&gt;<br/>&nbsp;&lt;/div&gt;<br/>&lt;/div&gt;</code>\
							</pre>\
						</div>\
					</div>',
	val:value,
	parent_id:"dialog",
	html:'<div class="html-alert">\
					<div class="custom-alert">\
						<div class="custom-alert-bg"></div>\
						<div class="custom-alert-w">\
							<div class="custom-alert-close">\
								<i class="fa fa-close"></i>\
							</div>\
							<div class="custom-alert-c">\
								<img src="http://www.joywok.com/public/images/avatar/hdr-pic.png"/>\
								<h1>申请说明</h1>\
								<p>请提供工号、姓名、用途、具体要求如<br/>\
										税前税后，年收入还是月收入等相<br/>\
										关信息；于工作日内给徐璠发<br/>\
										邮件(跨区除外)预约取件\
								</p>\
							</div>\
							<div class="custom-alert-btn">\
								<button type="button" class="btn btn1">我知道了</button>\
							</div>\
						</div>\
					</div>\
				</div>',
	sourceCode:'<div&nbsp;class="custom-alert&nbsp;custom-confirm"><br/>&nbsp;<div&nbsp;class="custom-alert-bg"></div><br/>&nbsp;<div&nbsp;class="custom-alert-w"><br/>&nbsp;&nbsp;<div&nbsp;class="custom-alert-close"><br/>&nbsp;&nbsp;&nbsp;<i&nbsp;class="fa&nbsp;fa-close"></i><br/>&nbsp;&nbsp;</div><br/>&nbsp;&nbsp;<div&nbsp;class="custom-alert-c"><br/>&nbsp;&nbsp;&nbsp;<img&nbsp;src="http://www.joywok.com/public/images/avatar/hdr-pic.png"/><br/>&nbsp;&nbsp;&nbsp;<h1>申请说明</h1><br/>&nbsp;&nbsp;&nbsp;<p>请提供工号、姓名、用途、具体要求如<br/>税前税后，年收入还是月收入等相<br/>关信息；于工作日内给徐璠发<br/>邮件(跨区除外)预约取件</p><br/>&nbsp;&nbsp;</div><br/>&nbsp;&nbsp;<div&nbsp;class="custom-alert-btn"><br/>&nbsp;&nbsp;&nbsp;<button&nbsp;type="button"&nbsp;class="btn&nbsp;btn1">我知道了</button><br/>&nbsp;&nbsp;</div><br/>&nbsp;</div><br/></div>'
}

export default data;