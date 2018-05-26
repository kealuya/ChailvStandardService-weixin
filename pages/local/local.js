// pages/local/local.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        local: "",
        local_value: 0,
        city_value:0,
        seletedType: "local"
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options);
        this.setData({
            local: options.local,
            local_value: options.local_value,
            city_value: options.city_value
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

    },


    onSelectBack: function (e) {
        console.log(e.detail);
        var pages = getCurrentPages();
        var prevPage = pages[pages.length - 2];  //上一个页面

        //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
        prevPage.setLocalForSonPage({
            local: e.detail.selItem,
            local_value: e.detail.value
        })
        wx.navigateBack({
            delta: 1
        })
    }
})