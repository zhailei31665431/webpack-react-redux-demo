'use strict';

var data = {
	id:"use-icon",
	content:'<div class="section-item-w">\
						<div class="section-h2-title">如何使用</div>\
						<div class="section-p"出于性能的考虑，所有图标都需要一个基类和对应每个图标的类。把下面的代码放在任何地方都可以正常使用。注意，为了设置正确的内补，务必在图标和文本之间添加一个空格。</div>\
						<div class="section-important">\
							<div class="section-important-border"></div>\
							<div class="section-important-val">\
								<div class="strong">不要和其他组件混合使用</div>\
								<div>图标类不能和其它组件直接联合使用。它们不能在同一个元素上与其他类共同存在。应该创建一个嵌套的标签，并将图标类应用到这个 <span> 标签上。</div>\
							</div>\
						</div>\
						<div class="section-important">\
							<div class="section-important-border"></div>\
							<div class="section-important-val">\
								<div class="strong">只对内容为空的元素起作用</div>\
								<div>图标类只能应用在不包含任何文本内容或子元素的元素上。</div>\
							</div>\
						</div>\
						<div class="section-important">\
							<div class="section-important-border"></div>\
							<div class="section-important-val">\
								<div class="strong">改变图标字体文件的位置</div>\
								<div>Bootstrap 假定所有的图标字体文件全部位于 ../fonts/ 目录内，相对于预编译版 CSS 文件的目录。如果修改了图标字体文件的位置，通过下面列出的任何一种方式来更新 CSS 文件：</div>\
								<div>在 Less 源码文件中修改 @icon-font-path 和/或 @icon-font-name 变量。<br/>利用 Less 编译器提供的 相对 URL 地址选项。<br/>修改预编译 CSS 文件中的 url() 地址。</div>\
								<div>根据你自身的情况选择一种方式即可</div>\
							</div>\
						</div>\
					</div>',
	val:"如何使用",
	parent_id:"Icons",
	html:"list-card"
}

export default data;