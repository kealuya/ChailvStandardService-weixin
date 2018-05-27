var travelDist = require('../../resource/datajs/travelDist.js')
Component({
    properties: {
        seletedNumber: {
            type: Number,
        },

        seletedType: {
            type: String,
        },
        city_value:{
            type:String
        },
        cityType:{
            type:String
        }
    },
    data: {
        original_selItems:[],
        selItems: [],
        inputShowed: false,
        inputVal: "",
        useHeight:0,
        selectShowed: false, 
    },
    //生命周期:attached
    attached:function(){
    },
    //生命周期:ready
    ready: function () {
        var target;
        if (this.data.cityType == "国内" && this.data.seletedType == "city"){
            target = travelDist.totalData.nation.provinceL;
        } else if (this.data.cityType!="国内"){
            target = travelDist.totalData.foreign.continent[this.data.cityType].nationL;
                     
        }else{
            var tar = travelDist.totalData.nation.provinceL[this.data.city_value];
            target = travelDist.totalData.nation.province[tar].distL;
            target = target == "" ? "-" : target;
        }
        var result = target.map(
            (currentValue, index, arr) => {
                var obj = {
                    selItem: currentValue,
                    value: index
                }
                if (index == this.data.seletedNumber) {
                    console.log("生命周期:attached:" + this.data.seletedNumber)
                    obj.checked = true;
                }
                return obj;
            }
        ); 
        console.log("生命周期:ready:" + this.data.seletedNumber)
        //创建节点选择器
        //如果是Page里的不需要加in(this)；in(this)表示组件内
        var query = wx.createSelectorQuery().in(this);
        var usedHeight = 0;
        //选择id
        query.select('#searchView').boundingClientRect();
        query.exec((res) => {
            this.setData({
                selItems: result,
                original_selItems: result,
                useHeight: wx.getSystemInfoSync().windowHeight - res[0].height
            });
        })

    },

    methods: {
        //选择列表方法
        radioChange: function (e) {
            var val = e.detail.value;
            var selItems = this.data.selItems;
            var selectBackObj ={};
            for (var i = 0, len = selItems.length; i < len; ++i) {
                selItems[i].checked = selItems[i].value == val;
                if (selItems[i].checked) {
                    selectBackObj.selItem = selItems[i].selItem;
                    selectBackObj.value = selItems[i].value;
                }
            }

            this.setData({
                selItems: selItems
            },()=>{
                //var myEventDetail = {} // detail对象，提供给事件监听函数
                //var myEventOption = {} // 触发事件的选项
                this.triggerEvent('selectBack', selectBackObj);
            });
        },
        //搜索框方法
        showInput: function () {
            this.setData({
                inputShowed: true
            });
        },
        hideInput: function () {
            this.setData({
                inputVal: "",
                inputShowed: false
            });
        },
        clearInput: function () {
            this.setData({
                inputVal: ""
            });
        },
        inputTyping: function (e) {
            var inputVal = e.detail.value;
            var patt1 = new RegExp(inputVal);
            var result = [];
            this.data.original_selItems.map(
                (currentValue, index, arr) => {
                    if (patt1.test(currentValue.selItem)) {
                        result.push(currentValue);
                    }
                }
            ); 
            var selectShowed = result.length > 0 ? false : true;
            this.setData({
                inputVal: inputVal,
                selItems: result,
                selectShowed: selectShowed
            });
        },

    },

})