// pages/showChailv/showChailv.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollLeft: 0,
    windowHeight: 400,
    proList:[
      {
        id:'001',
        proUrl: '../resource/image/16pic_4924482_b.jpg',
        proTitle: 'proTitle1',
        proPrice: 'proPrice1',
        proDec: 'proDec1'
      }, 
      {
        id: '002',
        proUrl: '../resource/image/16pic_4924482_b.jpg',
        proTitle: 'proTitle2',
        proPrice: 'proPrice2',
        proDec: 'proDec2'
      },
      {

        id: '003',
        proUrl: '../resource/image/16pic_4924482_b.jpg',
        proTitle: 'proTitle3',
        proPrice: 'proPrice3',
        proDec: 'proDec3'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  getSelectItem: function(e) {
    var that = this;
    var itemWidth = e.detail.scrollWidth / that.data.proList.length; //每个商品的宽度
    var scrollLeft = e.detail.scrollLeft; //滚动宽度
    var curIndex = Math.round(scrollLeft / itemWidth); //通过Math.round方法对滚动大于一半的位置进行进位
    for (var i = 0, len = that.data.proList.length; i < len; ++i) {
      that.data.proList[i].selected = false;
    }
    that.data.proList[curIndex].selected = true;
    //console.log(that.data.proList);
    that.setData({
      proList: that.data.proList,
      giftNo: this.data.proList[curIndex].id
    });
  },
})