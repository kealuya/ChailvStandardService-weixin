// pages/testPage/testPage.js
var travelDist = require('../resource/datajs/travelDist.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        icon: "../resource/icon/ic_launcher.png",
        image:"../resource/image/16pic_4924482_b.jpg",
        countries: [],
        countryIndex: 0,
        city: "北京",
        city_value: "0",
        cityType: "国内",
        local: "全区",
        local_value: "0",
        localType: ""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var countries = travelDist.totalData.foreign.continenL;
        countries.splice(0, 0, "国内");
        this.setData({
            countries: countries
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

    }
})