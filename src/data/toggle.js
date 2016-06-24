'use strict';
var value = 'Toggle'
var data = {
	id:"toggle",
	content:'<div class="section-item-w">\
						<div class="section-h1-title">'+value+'</div>\
						<div class="section-p">A toggle technically is the same thing as an HTML checkbox input, except it looks different and is easier to use on a touch device. Ionic prefers to wrap the checkbox input with the <label> in order to make the entire toggle easy to tap or drag.</div>\
						<div class="section-p">Toggles can also have <span class="section-highlight">colors</span> assigned to them, such as <span class="section-highlight">toggle-assertive</span> to assign the assertive color.</div>\
						<div class="highlight">\
							<div class="highlight-bar"></div>\
							<div class="highlight-copy" target-id="toggle">复制</div>\
							<pre>\
								<code class="language-html" data-lang="html">&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-item list-item-file"</span>&gt;<br/>&nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"toggle"</span>&gt;<br/> &nbsp;&lt;i <span class="highlight-blue">class=</span><span class="highlight-red">"icon-toggle-cirtal"</span>&gt;&lt;/i&gt;<br/>&nbsp;&lt;/div&gt;<br/>&nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-item-w"</span>&gt;<br/> &nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-item-val ellipsis"</span>&gt;0102&lt;/div&gt;<br/>&nbsp;&lt;/div&gt;<br/>&lt;/div&gt;<br/>&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-item list-item-file"</span>&gt;<br/>&nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"toggle active"</span>&gt;<br/> &nbsp;&lt;i <span class="highlight-blue">class=</span><span class="highlight-red">"icon-toggle-cirtal"</span>&gt;&lt;/i&gt;<br/>&nbsp;&lt;/div&gt;<br/>&nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-item-w"</span>&gt;<br/> &nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-item-val ellipsis"</span>&gt;0102&lt;/div&gt;<br/>&nbsp;&lt;/div&gt;<br/>&lt;/div&gt;</code>\
							</pre>\
						</div>\
					</div>',
	val:value,
	root:true,
	html:'<div class="html-radio">\
					<div class="list">\
						<div class="list-h"></div>\
						<div class="list-w">\
							<div class="list-block">\
								<div class="list-block-h"></div>\
								<div class="list-block-w">\
									<div class="list-item list-item-file">\
										<div class="toggle">\
											<i class="icon-toggle-cirtal"></i>\
										</div>\
										<div class="list-item-w">\
											<div class="list-item-val ellipsis">0102</div>\
										</div>\
									</div>\
									<div class="list-item list-item-file">\
										<div class="toggle active">\
											<i class="icon-toggle-cirtal"></i>\
										</div>\
										<div class="list-item-w">\
											<div class="list-item-val ellipsis">0102</div>\
										</div>\
									</div>\
								</div>\
							</div>\
						</div>\
					</div>\
				</div>',
	sourceCode:'<div&nbsp;class="list-item&nbsp;list-item-file"><br/>&nbsp;<div&nbsp;class="toggle"><br/>&nbsp;&nbsp;<i&nbsp;class="icon-toggle-cirtal"></i><br/>&nbsp;</div><br/>&nbsp;<div&nbsp;class="list-item-w"><br/>&nbsp;&nbsp;<div&nbsp;class="list-item-val&nbsp;ellipsis">0102</div><br/>&nbsp;</div><br/></div><br/><div&nbsp;class="list-item&nbsp;list-item-file"><br/>&nbsp;<div&nbsp;class="toggle&nbsp;active"><br/>&nbsp;&nbsp;<i&nbsp;class="icon-toggle-cirtal"></i><br/>&nbsp;</div><br/>&nbsp;<div&nbsp;class="list-item-w"><br/>&nbsp;&nbsp;<div&nbsp;class="list-item-val&nbsp;ellipsis">0102</div><br/>&nbsp;</div><br/></div>'
}

export default data;