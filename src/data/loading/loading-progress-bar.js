'use strict';
var value = 'loading tip'
var data = {
	id:"loading-tip",
	content:'<div class="section-item-w"><div class="section-h2-title">'+value+'</div>\
						<div class="section-p">Use the  <span class="section-highlight">loading tip</span>   classname to create a card with lists.</div>\
						<div class="highlight">\
							<div class="highlight-bar"></div>\
							<div class="highlight-copy"target-id="input-box">复制</div>\
							<pre>\
							<code class="language-html" data-lang="html">&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"html-loading"</span>&gt;<br/>&nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"loading-progress-bar bar"</span>&gt;<br/> &nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"custom-alert-c"</span>&gt;<br/>  &nbsp;&lt;img src="http://www.joywok.com/public/images/avatar/hdr-pic.png"/&gt;<br/>&nbsp;&lt;p&gt;正在载入信息。。。。<br/>&nbsp;&lt;/p&gt;<br/> &nbsp;&lt;/div&gt;<br/>&nbsp;&lt;/div&gt;<br/>&lt;/div&gt;</code>\
							</pre>\
						</div>\
					</div>',
	val:value,
	parent_id:"loading",
	html:'<div class="html-loading">\
						<div class="loading-progress-bar bar">\
							<div class="loading-bar">\
								<img src="http://www.joywok.com/public/images/avatar/hdr-pic.png"/>\
								<p>正在载入信息。。。。</p>\
						</div>\
					</div>\
				</div>',
soureCode:'<div&nbsp;class="html-loading"><br/>&nbsp;<div&nbsp;class="loading-progress-bar&nbsp;bar"><br/>&nbsp;&nbsp;<div&nbsp;class="custom-alert-c"><br/>&nbsp;&nbsp;&nbsp;<img&nbsp;src="http://www.joywok.com/public/images/avatar/hdr-pic.png"/><br/>&nbsp;<p>正在载入信息。。。。<br/>&nbsp;</p><br/>&nbsp;&nbsp;</div><br/>&nbsp;</div><br/></div>'
}

export default data;