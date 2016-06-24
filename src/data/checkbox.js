'use strict';
var value = 'Checkbox'
var data = {
	id:"checkbox",
	content:'<div class="section-item-w">\
						<div class="section-h1-title">'+value+'</div>\
						<div class="section-p">Checkboxes allow the user to select a number of items in a set of choices. A good use for a checkbox list would be a filter list to apply multiple filters to a search.</div>\
						<div class="section-p">Checkboxes can also have <span class="section-highlight">colors</span> assigned to them, such as <span class="section-highlight">checkbox-assertive</span> to assign the assertive color.</div>\
						<div class="highlight">\
							<div class="highlight-bar"></div>\
							<div class="highlight-copy" target-id="checkbox">复制</div>\
							<pre>\
								<code class="language-html" data-lang="html">&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-item list-item-file"</span>&gt;<br/>&nbsp;&lt;img <span class="highlight-blue">class=</span><span class="highlight-red">"pic"</span> src="http://www.joywok.com/public/images/avatar/hdr-pic.png"/&gt;<br/>&nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"checkbox"</span>/&gt;&lt;/div&gt;<br/>&nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-item-w"</span>&gt;<br/> &nbsp;&lt;div <span class="highlight-blue">class=</span><span class="highlight-red">"list-item-val ellipsis"</span>&gt;0102&lt;/div&gt;<br/>&nbsp;&lt;/div&gt;<br/>&lt;/div&gt;</code>\
							</pre>\
						</div>\
					</div>',
	val:value,
	root:true,
	html:'<div class="html-checbox">\
					<div class="list">\
						<div class="list-h"></div>\
						<div class="list-w">\
							<div class="list-block">\
								<div class="list-block-h"></div>\
								<div class="list-block-w">\
									<div class="list-item list-item-file">\
										<img class="pic" src="http://www.joywok.com/public/images/avatar/hdr-pic.png"/>\
										<div class="checkbox"/></div>\
										<div class="list-item-w">\
											<div class="list-item-val ellipsis">0102</div>\
										</div>\
									</div>\
									<div class="list-item list-item-file">\
										<img class="pic" src="http://www.joywok.com/public/images/avatar/hdr-pic.png"/>\
										<div class="checkbox active"/></div>\
										<div class="list-item-w">\
											<div class="list-item-val ellipsis">0102</div>\
										</div>\
									</div>\
								</div>\
							</div>\
						</div>\
					</div>\
				</div>',
	sourceCode:'<div&nbsp;class="list-item&nbsp;list-item-file"><br/>&nbsp;<img&nbsp;class="pic"&nbsp;src="http://www.joywok.com/public/images/avatar/hdr-pic.png"/><br/>&nbsp;<div&nbsp;class="checkbox"/></div><br/>&nbsp;<div&nbsp;class="list-item-w"><br/>&nbsp;&nbsp;<div&nbsp;class="list-item-val&nbsp;ellipsis">0102</div><br/>&nbsp;</div><br/></div>'
}

export default data;