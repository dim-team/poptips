/**
 * 应用于dim(develop in modularization)框架的提示组件
 * @author 铁拐李
 * @email JerroldLi@163.com
 * @update 2015.07.13
 */
var PoptipsTpl = __inline('poptips.handlebars');

var Poptips = {
	init: function (options) {
		if (!this.status) {
			this.options = options;
			this.render();
		}
		
	},
	render: function () {
		var PoptipsObj = $(PoptipsTpl()); 
		this.PoptipsObj = PoptipsObj;
		this.options.container.append(PoptipsObj);
		this.status = 1;
		this.bindEvents();
	},
	bindEvents: function() {
		$('.tips').on('focus', function() {
            console.log('focus');
            this.title = this.t;
            $('.popTips').fadeOut();//隐藏浮层
        }).on('blur', function(event) {
            console.log('blur');
            event.stopPropagation();
            //获取div的位置
            var offset = $(this).offset();
            var width = $(this).width();
            var height = $(this).height();
            //创建弹出浮层，定位在div的位置
            var $popTips = $('tpl');
            $popTips.css({
                'width': width,
                'height': height,
                'line-height': height + 'px',
                'top': offset.top + height,
                'left': offset.left
            });
            $(this).after($popTips)
            $popTips.fadeIn();
        });
	} 
};

module.exports = Poptips;