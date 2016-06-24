'use strict';
var value = 'Radio'
var data = {
	id:"radio",
	content:'<div class="section-item-w">\
						<div class="section-h1-title">'+value+'</div>\
						<div class="section-p">Radio buttons let the user select one option in a set of options, unlike a checkbox which allows for multiple selections.</div>\
						<div class="highlight">\
							<div class="highlight-bar"></div>\
							<div class="highlight-copy" target-id="radio">复制</div>\
							<pre>\
								<code class="language-html" data-lang="html">&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-item list-item-file"</span>&gt;<br/>&nbsp;&lt;i <span class="highlight-blue">class=</span><span class="highlight-red">"radio"</span> name="id"&gt;&lt;/i&gt;<br/>&nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-item-w"</span>&gt;<br/> &nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-item-val ellipsis"</span>&gt;0102&lt;/div&gt;<br/>&nbsp;&lt;/div&gt;<br/>&lt;/div&gt;<br/>&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-item list-item-file"</span>&gt;<br/>&nbsp;&lt;i <span class="highlight-blue">class=</span><span class="highlight-red">"radio active"</span> name="id"&gt;&lt;/i&gt;<br/>&nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-item-w"</span>&gt;<br/> &nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-item-val ellipsis"</span>&gt;01012312312&lt;/div&gt;<br/>&nbsp;&lt;/div&gt;<br/>&lt;/div&gt;</code>\
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
										<i class="radio" name="id"></i>\
										<div class="list-item-w">\
											<div class="list-item-val ellipsis">0102</div>\
										</div>\
									</div>\
									<div class="list-item list-item-file">\
										<i class="radio active" name="id"></i>\
										<div class="list-item-w">\
											<div class="list-item-val ellipsis">01012312312</div>\
										</div>\
									</div>\
								</div>\
							</div>\
						</div>\
					</div>\
				</div>',
	sourceCode:'<div&nbsp;class="list-item&nbsp;list-item-file"><br/>&nbsp;<i&nbsp;class="radio"&nbsp;name="id"></i><br/>&nbsp;<div&nbsp;class="list-item-w"><br/>&nbsp;&nbsp;<div&nbsp;class="list-item-val&nbsp;ellipsis">0102</div><br/>&nbsp;</div><br/></div><br/><div&nbsp;class="list-item&nbsp;list-item-file"><br/>&nbsp;<i&nbsp;class="radio&nbsp;active"&nbsp;name="id"></i><br/>&nbsp;<div&nbsp;class="list-item-w"><br/>&nbsp;&nbsp;<div&nbsp;class="list-item-val&nbsp;ellipsis">01012312312</div><br/>&nbsp;</div><br/></div>'
}

export default data;