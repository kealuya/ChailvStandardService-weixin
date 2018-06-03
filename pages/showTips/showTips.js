// pages/showTips/showTips.js
var travelTip = require('../resource/datajs/travelTip.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        wx.setNavigationBarTitle({
            title: '差旅标准查询'
        })
        var contentArray = [];
        var content = {};
        var title = '';
        switch (options.type) {
            case 'tip':
                var tips = travelTip.totalTips.tips;
                for (var i = 0; i < tips.q.length; i++) {
                    content = {};
                    content.q = (i + 1) + '. ' + tips.q[i];
                    content.a = tips.a[i];
                    contentArray.push(content);
                }
                title = '小贴士';
                break;
            case 'goupiao':
                var goupiao;
                if (options.cityType == '国内') {
                    goupiao = travelTip.totalTips.goupiao.ac;
                } else {
                    goupiao = travelTip.totalTips.goupiao.af;

                }

                for (var i = 0; i < goupiao.length; i++) {
                    content = {};
                    content.q = goupiao[i];
                    content.a = "";
                    contentArray.push(content);
                }
                title = '购票注意事项';
                break;
            case 'zhusu':
                var goupiao = travelTip.totalTips.goupiao.af;
                title = '住宿注意事项';
                break;
            default:
                ;
        }
        this.setData({
            contentArray: contentArray,
            title: title
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})