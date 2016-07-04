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
								<code class="language-html" data-lang="html">&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-item list-item-file"</span>&gt;<br/>&nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"radio-w"</span>&gt;<br/> &nbsp;&lt;input type="radio" id="radio-1" name="radio-1"/&gt;<br/> &nbsp;&lt;label for="radio-1"&gt;&lt;/label&gt;<br/>&nbsp;&lt;/div&gt;<br/>&nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-item-w"</span>&gt;<br/> &nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-item-val ellipsis"</span>&gt;0102&lt;/div&gt;<br/>&nbsp;&lt;/div&gt;<br/>&lt;/div&gt;</code>\
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
										<div class="radio-w">\
											<input type="radio" id="radio-1" name="radio-1"/>\
											<label for="radio-1"></label>\
										</div>\
										<div class="list-item-w">\
											<div class="list-item-val ellipsis">0102</div>\
										</div>\
									</div>\
									<div class="list-item list-item-file">\
										<div class="radio-w">\
											<input type="radio" id="radio-2" name="radio-1"/>\
											<label for="radio-2"></label>\
										</div>\
										<div class="list-item-w">\
											<div class="list-item-val ellipsis">01012312312</div>\
										</div>\
									</div>\
								</div>\
							</div>\
						</div>\
					</div>\
				</div>',
	sourceCode:'<div&nbsp;class="list-item&nbsp;list-item-file"><br/>&nbsp;<div&nbsp;class="radio-w"><br/>&nbsp;&nbsp;<input&nbsp;type="radio"&nbsp;id="radio-1"&nbsp;name="radio-1"/><br/>&nbsp;&nbsp;<label&nbsp;for="radio-1"></label><br/>&nbsp;</div><br/>&nbsp;<div&nbsp;class="list-item-w"><br/>&nbsp;&nbsp;<div&nbsp;class="list-item-val&nbsp;ellipsis">0102</div><br/>&nbsp;</div><br/></div>'
}

export default data;