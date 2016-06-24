'use strict';
var value = 'Stacked Labels'
var data = {
	id:"stacked-labels",
	content:'<div class="section-item-w">\
						<div class="section-h2-title">'+value+'</div>\
						<div class="section-p">Use the  <span class="section-highlight"> placeholder</span>   classname to create a card with lists.</div>\
						<div class="highlight">\
							<div class="highlight-bar"></div>\
							<div class="highlight-copy"target-id="stacked-labels">复制</div>\
							<pre>\
								<code class="language-html" data-lang="html">&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"form-item break-line"</span>&gt;<br/>&nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"form-item-w"</span>&gt;<br/> &nbsp;&lt;label&gt;账户&lt;/label&gt;<br/> &nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"form-item-c"</span>&gt;<br/>  &nbsp;&lt;input type="text" placeholder="账户"/&gt;<br/> &nbsp;&lt;/div&gt;<br/>&nbsp;&lt;/div&gt;<br/>&lt;/div&gt;<br/>&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"form-item break-line"</span>&gt;<br/>&nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"form-item-w"</span>&gt;<br/> &nbsp;&lt;label&gt;密码&lt;/label&gt;<br/> &nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"form-item-c"</span>&gt;<br/>  &nbsp;&lt;input type="text" placeholder="密码"/&gt;<br/> &nbsp;&lt;/div&gt;<br/>&nbsp;&lt;/div&gt;<br/>&lt;/div&gt;</code>\
							</pre>\
						</div>\
					</div>',
	val:value,
	parent_id:"form",
	html:'<div class="html-form">\
					<div class="form">\
						<div class="form-w">\
							<div class="form-block">\
								<div class="form-block-w">\
									<div class="form-item break-line">\
										<div class="form-item-w">\
											<label>账户</label>\
											<div class="form-item-c">\
												<input type="text" placeholder="账户"/>\
											</div>\
										</div>\
									</div>\
									<div class="form-item break-line">\
										<div class="form-item-w">\
											<label>密码</label>\
											<div class="form-item-c">\
												<input type="text" placeholder="密码"/>\
											</div>\
										</div>\
									</div>\
								</div>\
							</div>\
						</div>\
					</div>\
				</div>',
	sourceCode:'<div&nbsp;class="form-item&nbsp;break-line"><br/>&nbsp;<div&nbsp;class="form-item-w"><br/>&nbsp;&nbsp;<label>账户</label><br/>&nbsp;&nbsp;<div&nbsp;class="form-item-c"><br/>&nbsp;&nbsp;&nbsp;<input&nbsp;type="text"&nbsp;placeholder="账户"/><br/>&nbsp;&nbsp;</div><br/>&nbsp;</div><br/></div><br/><div&nbsp;class="form-item&nbsp;break-line"><br/>&nbsp;<div&nbsp;class="form-item-w"><br/>&nbsp;&nbsp;<label>密码</label><br/>&nbsp;&nbsp;<div&nbsp;class="form-item-c"><br/>&nbsp;&nbsp;&nbsp;<input&nbsp;type="text"&nbsp;placeholder="密码"/><br/>&nbsp;&nbsp;</div><br/>&nbsp;</div><br/></div>'
}

export default data;