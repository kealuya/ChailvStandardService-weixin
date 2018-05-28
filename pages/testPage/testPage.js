// pages/testPage/testPage.js
var travelDist = require('../resource/datajs/travelDist.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    icon1: "../resource/icon/目的地.png",
    icon2: "../resource/icon/出发时间.png",
    icon3: "../resource/icon/到达时间.png",
    icon4: "../resource/icon/职位.png",
    image: "../resource/image/16pic_4924482_b.jpg",
    countries: [],
    countryIndex: 0,
    city: "北京",
    city_value: "0",
    cityType: "国内",
    local: "全区",
    local_value: "0",
    localType: "",
    goDate: "",
    backDate: "",
    jobgrades: ["部级","司局级","普通"],
    jobgradeIndex: 0,
    windowWidth: wx.getSystemInfoSync().windowWidth
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var countries = travelDist.totalData.foreign.continenL;
    countries.splice(0, 0, "国内");
    var myDate = new Date();
    var Year = myDate.getFullYear();
    var Month = myDate.getMonth() + 1;
    Month = Month < 10 ? "0" + Month : Month;
    var Day = myDate.getDate();
    Day = Day < 10 ? "0" + Day : Day;
    var tempDate = Year + "-" + Month + "-" + Day;
    this.setData({
      countries: countries,
      goDate: tempDate,
      backDate: tempDate
    });
    console.log("生命周期函数--监听页面加载");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

    console.log("生命周期函数--监听页面初次渲染完成");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("生命周期函数--监听页面显示");

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

  bindCountryChange: function (e) {
    var country = e.detail.value;
    var city;
    var local;
    var cityType = this.data.countries[country];
    if ("国内" == cityType) {
      city = travelDist.totalData.nation.provinceL[0];
      local = travelDist.totalData.nation.province[city].distL[0];
    } else {
      city = travelDist.totalData.foreign.continent[cityType].nationL[0];
      local = travelDist.totalData.foreign.continent[cityType][city].districtL[0];
      local = local == "" ? "-" : local
    }
    this.setData({
      countryIndex: country,
      city: city,
      city_value: "0",
      cityType: cityType,
      local: local
    })

  },


  setCityForSonPage: function (citySettingJson) {

    var cityType = this.data.cityType;
    var city = citySettingJson.city;
    var city_value = citySettingJson.city_value;
    if ("国内" == this.data.cityType) {
      var local = travelDist.totalData.nation.province[city].distL[0];
    } else {
      var local = travelDist.totalData.foreign.continent[cityType][city].districtL[0];
    }

    this.setData({
      city: city,
      city_value: city_value,
      local: local
    })
  },
  setLocalForSonPage: function (localSettingJson) {
    this.setData({
      local: localSettingJson.local,
      local_value: localSettingJson.local_value
    })

  },

  bindGoDateChange: function (e) {
    var go = e.detail.value;
    var back = this.data.backDate;
    if (go > back) {
      this.setData({
        goDate: go,
        backDate: go
      })
    } else {
      this.setData({
        goDate: go
      })
    }
  },

  bindBackDateChange: function (e) {
    var go = this.data.goDate;
    var back = e.detail.value;
    if (go > back) {
      this.setData({
        goDate: back,
        backDate: back
      })
    } else {
      this.setData({
        backDate: back
      })
    }
  },
  bindJobgradeChange: function (e) {
    this.setData({
      jobgradeIndex : e.detail.value
    });
  },
  bindBtnClick:function(){
     
    var searchLogs = wx.getStorageSync('searchLogs') || []

    if (searchLogs.length == 10) {
      searchLogs.pop();
    }  
    var data = this.data;
    searchLogs.unshift({
      cityType:data.cityType,
      city: data.city,
      local: data.local,
      goDate: data.goDate,
      backDate: data.backDate,
      jobgradeIndex: data.jobgradeIndex,
    })
    wx.setStorageSync('searchLogs', searchLogs)

     wx.navigateTo({
       url: '../showPage/showPage?from=1',
     })

  }
  

})