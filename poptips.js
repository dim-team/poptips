/**
 * 应用于dim(develop in modularization)框架的提示组件
 * @author 铁拐李
 * @email JerroldLi@163.com
 * @update 2015.07.13
 */
var PoptipsTpl = __inline('poptips.handlebars');

var Poptips = {
	init: function (options) {
		this.options = options;
        this.render();
	},
	render: function () {
        var _this = this;
        switch (_this.options.action) {
            case 'remove': _this.remove();
                break;
            case 'show': _this.show();
                break;
            default:
                break;
        }
	},
    fadeOut: function (PoptipsInstance) {
        var _this = this;
        if (PoptipsInstance) {
           PoptipsInstance.fadeOut();
        } else if (_this.PoptipsObj) {
            _this.PoptipsObj.fadeOut();
        }
    },
    remove: function (PoptipsInstance) {
        var _this = this;
        if (PoptipsInstance) {
           PoptipsInstance.remove();
        } else if (_this.PoptipsObj) {
            _this.PoptipsObj.remove();
        }
    },
    show: function () {
        var _this = this;
        var container = this.options.container;
        var PoptipsObj = $(PoptipsTpl(this.options));
        this.PoptipsObj = PoptipsObj;
        container.after(PoptipsObj);

        //获取目标节点的位置
        var offset = container.offset();
        var width = container.width();
        var height = container.height();
        //创建弹出浮层，定位在目标节点的位置
        PoptipsObj.css({
            'width': width,
            'height': height,
            'line-height': height + 'px',
            'top': offset.top + height,
            'left': offset.left
        });

        var emObj = $('em', PoptipsObj);
        var spanObj = $('span', PoptipsObj);
        emObj.css({
            'left': width / 2 - 10
        });
        spanObj.css({
            'left': width / 2 - 10
        });

        PoptipsObj.show();
        if (this.options.autoHide) {
            setTimeout(function () {
                _this.fadeOut(PoptipsObj);
            }, 2000);
            setTimeout(function () {
                _this.remove(PoptipsObj);
            }, 3000);
        }
    }
};

module.exports = Poptips;