// pages/showPage/showPage.js
var travelDist = require('../resource/datajs/travelDist.js');
var travelTip = require('../resource/datajs/travelTip.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchLogs: {},
    chailvInfo: "",
    showHeight: wx.getSystemInfoSync().windowHeight,
    showWidth: wx.getSystemInfoSync().windowWidth,
    msgImage: "../resource/image/msg.png",
    jiaotongList: [],
    zhusuJson: {},
    huoshiList: [],
    buzhuList: [],
    zongjinJson: {},
    now: "",
    job: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '差旅标准查询'
    })

    //从storage里取的最新的请求信息
    var searchLogs = wx.getStorageSync('searchLogs')[0];
    //计算出差时间差
    var sD1 = searchLogs.goDate.split('-');
    var sD2 = searchLogs.backDate.split('-');
    var sDate = new Date(parseInt(sD1[0]), parseInt(sD1[1]) - 1, parseInt(sD1[2]));
    var eDate = new Date(parseInt(sD2[0]), parseInt(sD2[1]) - 1, parseInt(sD2[2]));
    var dateIntervel = parseInt(Math.abs(sDate - eDate) / (1000 * 60 * 60 * 24)) + 1;
    if (searchLogs.cityType == '国内') {

      //计算住宿标准信息,纯粹为了测试，别那么写  json还是放到array里好
      var zhusuInfo = travelDist.totalData.nation.province[searchLogs.city][searchLogs.local];
      var jsonObj = {};
      if (zhusuInfo.isBusy == 0) {
        jsonObj[zhusuInfo.money[searchLogs.jobgradeIndex]] = ' 元/天';
      } else {
        jsonObj[zhusuInfo.money[searchLogs.jobgradeIndex]] = ' 元/天（淡季）';
        jsonObj[zhusuInfo.busyMoney[searchLogs.jobgradeIndex]] = ' 元/天（旺季：' + zhusuInfo.busyDate + '）';
      }

      //计算伙食标准信息
      var huoshiList = [];
      var allowance = travelDist.totalData.nation.province[searchLogs.city]['allowance'];

      var huoshiJson = {
        total: allowance["foodMoney"] * dateIntervel,
        daily: allowance["foodMoney"]
      }

      huoshiList.push(huoshiJson);

      //计算补助标准信息
      var buzhuList = [];
      var buzhuJson = {
        total: allowance["vehicleMoney"] * dateIntervel,
        daily: allowance["vehicleMoney"]
      }
      buzhuList.push(buzhuJson);

      //计算补助总金额信息
      var totalAllowance = (allowance["foodMoney"] + allowance["vehicleMoney"]) * dateIntervel;
      //finalmoney = '补贴总额：' + totalAllowance + '元';

      var zongjinJson = {
        total: totalAllowance,
        city: searchLogs.city,
        dateIntervel: dateIntervel
      }

      //初期化data
      this.setData({
        now: new Date().pattern("MM-dd HH:mm"),
        job: searchLogs.jobgrades[searchLogs.jobgradeIndex],
        searchLogs: searchLogs,
        jiaotongList: travelDist.travelVehicle.data[searchLogs.jobgradeIndex],
        chailvInfo: JSON.stringify(searchLogs),
        zhusuJson: jsonObj,
        huoshiList: huoshiList,
        buzhuList: buzhuList,
        zongjinJson: zongjinJson,
      })
    } else {
      //国外的场合
      var district_TM = travelDist.totalData.foreign.continent[searchLogs.cityType][searchLogs.city][searchLogs.local];
      var gy_dangdishicha = {};
      if (district_TM.timeLag != 0) {
        var dateNow = new Date().getTime() + district_TM.timeLag * 60 * 60 * 1000;
        dateNow = new Date(dateNow).pattern("MM-dd HH:mm");
        gy_dangdishicha = {
          shicha: district_TM.timeLag,
          dateNow: dateNow
        }
      }
      //国外交通标准
      var jiaotongJson = {}
      jiaotongJson[travelDist.travelVehicle.type[3]] =
        travelDist.travelVehicle.dataFor[searchLogs.jobgradeIndex][travelDist.travelVehicle.type[3]];

      //国外住宿标准
      var jsonObj = {};
      jsonObj['' + district_TM.money[0] + ' ' + district_TM.currency] = '/天';

      //国外伙食补贴
      var huoshiList = [];
      var huoshiJson = {
        total: district_TM.money[1] * dateIntervel + district_TM.currency.replace('元', ''),
        daily: district_TM.money[1] + district_TM.currency.replace('元', '')
      }
      huoshiList.push(huoshiJson);

      //国外公杂费补贴
      var buzhuList = [];
      var buzhuJson = {
        total: district_TM.money[2] * dateIntervel + district_TM.currency.replace('元', ''),
        daily: district_TM.money[2] + district_TM.currency.replace('元', '')
      }
      buzhuList.push(buzhuJson);

      //初期化data
      this.setData({
        now: new Date().pattern("MM-dd HH:mm"),
        job: searchLogs.jobgrades[searchLogs.jobgradeIndex],
        searchLogs: searchLogs,
        jiaotongList: jiaotongJson,
        chailvInfo: JSON.stringify(searchLogs),
        zhusuJson: jsonObj,
        huoshiList: huoshiList,
        buzhuList: buzhuList,
        zongjinJson: zongjinJson,
        gy_dangdishicha: gy_dangdishicha
      })
    }


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

  bindBtnClick: () => {
    wx.navigateBack({
      delta: 1
    })
  },
  onShowModal: (e) => {

    var content = '';
    switch (e.currentTarget.id) {
      case 'tip':
        content = travelTip.totalTips.tips;
      case 'goupiao':
        语句;
        break;
      case 'zhusu':
        语句;
      default:
        ;
    }

    wx.showModal({
      title: '',
      showCancel: false,
      content: content,
    })
  }
})