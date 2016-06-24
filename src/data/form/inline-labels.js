'use strict';
var value = 'Inline Labels'
var data = {
	id:"inline-labels",
	content:'<div class="section-item-w">\
						<div class="section-h2-title">'+value+'</div>\
						<div class="section-p">Use the  <span class="section-highlight"> placeholder</span>   classname to create a card with lists.</div>\
						<div class="highlight">\
							<div class="highlight-bar"></div>\
							<div class="highlight-copy"target-id="inline-labels">复制</div>\
							<pre>\
								<code class="language-html" data-lang="html">&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"form-item"</span>&gt;<br/>&nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"form-item-w"</span>&gt;<br/> &nbsp;&lt;label&gt;账号&lt;/label&gt;<br/> &nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"form-item-c"</span>&gt;<br/>  &nbsp;&lt;input type="text" placeholder="账号"/&gt;<br/> &nbsp;&lt;/div&gt;<br/>&nbsp;&lt;/div&gt;<br/>&lt;/div&gt;<br/>&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"form-item"</span>&gt;<br/>&nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"form-item-w"</span>&gt;<br/> &nbsp;&lt;label&gt;密码&lt;/label&gt;<br/> &nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"form-item-c"</span>&gt;<br/>  &nbsp;&lt;input type="password" placeholder="密码"/&gt;<br/> &nbsp;&lt;/div&gt;<br/>&nbsp;&lt;/div&gt;<br/>&lt;/div&gt;<br/>&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"form-item"</span>&gt;<br/>&nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"form-item-w"</span>&gt;<br/> &nbsp;&lt;label&gt;验证码&lt;/label&gt;<br/> &nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"form-item-c"</span>&gt;<br/>  &nbsp;&lt;input type="text" placeholder="验证码"/&gt;<br/> &nbsp;&lt;/div&gt;<br/>&nbsp;&lt;/div&gt;<br/>&lt;/div&gt;<br/>&lt;button type="button" <span class="highlight-blue">class=</span><span class="highlight-red">"btn btn2 submit"</span>&gt;下一步&lt;/button&gt;</code>\
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
									<div class="form-item">\
										<div class="form-item-w">\
											<label>账号</label>\
											<div class="form-item-c">\
												<input type="text" placeholder="账号"/>\
											</div>\
										</div>\
									</div>\
									<div class="form-item">\
										<div class="form-item-w">\
											<label>密码</label>\
											<div class="form-item-c">\
												<input type="password" placeholder="密码"/>\
											</div>\
										</div>\
									</div>\
									<div class="form-item">\
										<div class="form-item-w">\
											<label>验证码</label>\
											<div class="form-item-c">\
												<input type="text" placeholder="验证码"/>\
											</div>\
										</div>\
									</div>\
									<button type="button" class="btn btn2 submit">下一步</button>\
								</div>\
							</div>\
						</div>\
					</div>\
				</div>',
	sourceCode:'<div&nbsp;class="form-item"><br/>&nbsp;<div&nbsp;class="form-item-w"><br/>&nbsp;&nbsp;<label>账号</label><br/>&nbsp;&nbsp;<div&nbsp;class="form-item-c"><br/>&nbsp;&nbsp;&nbsp;<input&nbsp;type="text"&nbsp;placeholder="账号"/><br/>&nbsp;&nbsp;</div><br/>&nbsp;</div><br/></div><br/><div&nbsp;class="form-item"><br/>&nbsp;<div&nbsp;class="form-item-w"><br/>&nbsp;&nbsp;<label>密码</label><br/>&nbsp;&nbsp;<div&nbsp;class="form-item-c"><br/>&nbsp;&nbsp;&nbsp;<input&nbsp;type="password"&nbsp;placeholder="密码"/><br/>&nbsp;&nbsp;</div><br/>&nbsp;</div><br/></div><br/><div&nbsp;class="form-item"><br/>&nbsp;<div&nbsp;class="form-item-w"><br/>&nbsp;&nbsp;<label>验证码</label><br/>&nbsp;&nbsp;<div&nbsp;class="form-item-c"><br/>&nbsp;&nbsp;&nbsp;<input&nbsp;type="text"&nbsp;placeholder="验证码"/><br/>&nbsp;&nbsp;</div><br/>&nbsp;</div><br/></div><br/><button&nbsp;type="button"&nbsp;class="btn&nbsp;btn2&nbsp;submit">下一步</button>'
}

export default data;