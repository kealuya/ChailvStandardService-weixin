// pages/showChailv/showChailv.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollLeft: 0,
    windowHeight: 400,
    proList: [{
        id: '0',
        proUrl: '../resource/image/1.jpg',
        page: '1/4',
        proUrl_2: '../resource/image/1-1.gif',
        mode: 'aspectFit',
        nodes: [{
          name: "div",
          attrs: {
            class: "headFont1",
            style: 'clear:both;'
          },
          children: [{
            name: "li",
            attrs: {
              // style: "margin-top:30px;"
            },
            children: [{
              type: "text",
              text: '差旅费由供应商垫资，不占用本学校的现金流，相当于免息贷款45天！'
            }],
          }, {
            name: "li",
            attrs: {
              // style: "margin-top:30px;"
            },
            children: [{
              type: "text",
              text: '可与商旅平台月度统一对公开票（所有费用一张发票），免去财务处审票、贴票烦恼。'
            }],
          }, {
            name: "li",
            attrs: {
              // style: "margin-top:30px;"
            },
            children: [{
              type: "text",
              text: '无需员工个人垫资，杜绝丢票、漏票现象，从此告别贴票、填单等繁琐报销流程。'
            }],
          }]
        }],
        selected: 'selected'
      },
      {
        id: '1',
        proUrl: '../resource/image/2.jpg',
        page: '2/4',
        proUrl_2: '../resource/image/对接图.jpg',
        mode: 'widthFix',
        nodes: [{
          name: "div",
          attrs: {
            class: "headFont1",
            style: 'clear:both;'
          },
          children: [{
            name: "li",
            attrs: {
              // style: "margin-top:10px;"
            },
            children: [{
              type: "text",
              text: '全面对接高校财务、网上报销系统，购票同步冻结项目差旅额度。'
            }],
          }, {
            name: "li",
            attrs: {
              // style: "margin-top:10px;"
            },
            children: [{
              type: "text",
              text: '财务处一键生成报销单+行程单，自动对账，账务自动制单，账务管理一气呵成。'
            }],
          }],
        }],
        // proUrl_3: '../resource/image/2-2.png',
        // mode_2: 'widthFix',
        // nodes2: [{
        //   name: "div",
        //   attrs: {
        // 		class: "headFont1",
        // 		style: 'clear:both;'
        //   },
        //   children: [{
        //     name: "li",
        //     attrs: {
        //       // style: "margin-top:10px;"
        //     },
        //     children: [{
        //       type: "text",
        //       text: '自动化、集成化差旅管理平台，便于学校对于商旅资源集中采购'
        //     }],
        //   }],
        // }],
      },
      {
        id: '2',
        proUrl: '../resource/image/3.jpg',
        page: '3/4',
        proUrl_2: '../resource/image/差旅自动提示加违规.jpg',
        mode: 'aspectFit',
        nodes: [{
          name: "div",
          attrs: {
            class: "headFont1",
            style: 'clear:both;'
          },
          children: [{
            name: "li",
            attrs: {
              // style: "margin-top:30px;"
            },
            children: [{
              type: "text",
              text: '购票时超标线路醒目提示，并标明出行人所对应职级的差旅标准。'
            }],
          }, {
            name: "li",
            attrs: {
              // style: "margin-top:30px;"
            },
            children: [{
              type: "text",
              text: '自动提醒，自动比价，智能协助选票，免去多平台择票的费时费力。'
            }],
          }, {
            name: "li",
            attrs: {
              // style: "margin-top:30px;"
            },
            children: [{
              type: "text",
              text: '差旅标准提示完全符合国家颁布的【差旅住宿费和伙食补助费标准表】，确保出行合法合规。'
            }],
          }],
        }],
      },
      {
        id: '3',
        proUrl: '../resource/image/4.jpg',
        page: '4/4',
        proUrl_2: '',
        mode: '',
        nodes: [{
          name: "div",
          attrs: {
            style: 'display: flex;align-items:center;'
          },
          children: [{
            name: 'div',
            attrs: {
              class: 'headFont2 iconfont icon-jt_feiji',
              style: 'float:left;color: black;'
            },
            children: [{
              type: 'text',
              text: '机票'
            }]
          }]
        }, {
          name: "div",
          attrs: {
            class: "headFont1",
            style: 'clear:both;'
          },
          children: [{
            name: "li",
            attrs: {
              // style: "margin-top:30px;"
            },
            children: [{
              type: "text",
              text: '33家国内航空'
            }],
          }, {
            name: "li",
            attrs: {
              // style: "margin-top:30px;"
            },
            children: [{
              type: "text",
              text: '130家国际航空'
            }],
          }, {
            name: "li",
            attrs: {
              // style: "margin-top:30px;"
            },
            children: [{
              type: "text",
              text: '30分钟出票,国内1MIN'
            }],
          }, {
            name: "li",
            attrs: {
              // style: "margin-top:30px;"
            },
            children: [{
              type: "text",
              text: '实现在线退票改签'
            }],
          }, {
            name: "li",
            attrs: {
              // style: "margin-top:30px;"
            },
            children: [{
              type: "text",
              text: '在线值机选座'
            }],
          }, {
            name: "li",
            attrs: {
              // style: "margin-top:30px;"
            },
            children: [{
              type: "text",
              text: '航班动态实时提醒'
            }],
          }],
        }, {
          name: "div",
          attrs: {
            style: 'display: flex;align-items:center;'
          },
          children: [{
            name: 'div',
            attrs: {
              class: 'headFont2 iconfont icon-huochepiao',
              style: 'float:left;color: black;'
            },
            children: [{
              type: 'text',
              text: '火车票'
            }]
          }]
        }, {
          name: "div",
          attrs: {
            class: "headFont1",
            style: 'clear:both;'
          },
          children: [{
            name: "li",
            attrs: {
              // style: "margin-top:30px;"
            },
            children: [{
              type: "text",
              text: '支持免输验证码'
            }],
          }, {
            name: "li",
            attrs: {
              // style: "margin-top:30px;"
            },
            children: [{
              type: "text",
              text: '支持先占座后出票'
            }],
          }, {
            name: "li",
            attrs: {
              // style: "margin-top:30px;"
            },
            children: [{
              type: "text",
              text: '支持电子票、配送票'
            }],
          }, {
            name: "li",
            attrs: {
              // style: "margin-top:30px;"
            },
            children: [{
              type: "text",
              text: '在线操作改签、退票'
            }],
          }],
        }, {
          name: "div",
          attrs: {
            style: 'display: flex;align-items:center;'
          },
          children: [{
            name: 'div',
            attrs: {
              class: 'headFont2 iconfont icon-swticonjiudian1',
              style: 'float:left;color: black;'
            },
            children: [{
              type: 'text',
              text: '酒店'
            }]
          }]
        }, {
          name: "div",
          attrs: {
            class: "headFont1",
            style: 'clear:both;'
          },
          children: [{
            name: "li",
            attrs: {
              // style: "margin-top:30px;"
            },
            children: [{
              type: "text",
              text: '实时房态，及时确认'
            }],
          }, {
            name: "li",
            attrs: {
              // style: "margin-top:30px;"
            },
            children: [{
              type: "text",
              text: '指定酒店优先推荐'
            }],
          }, {
            name: "li",
            attrs: {
              // style: "margin-top:30px;"
            },
            children: [{
              type: "text",
              text: '134个国家30000余家会员酒店查询及预订'
            }],
          }, {
            name: "li",
            attrs: {
              // style: "margin-top:30px;"
            },
            children: [{
              type: "text",
              text: '对标同行，全网低价'
            }],
          }],
        }],
      },
    ],
    chooseSize: false,
    animationData: {},
    autoScroll: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '差旅服务平台介绍'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function(e) {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          //动态根据手机分辨率来计算内容的高度（屏幕总高度-顶部筛选栏的高度）
          contentHeight: (res.windowHeight - 72 * res.screenWidth / 750),
          contentHeight1: (res.windowHeight - 72 * res.screenWidth / 750) * 0.18,
          contentHeight2: (res.windowHeight - 72 * res.screenWidth / 750) * 0.08
        });
      }
    })
  },
  chooseSezi: function(e) {
    // 用that取代this，防止不必要的情况发生
    var that = this;
    var halfHeight = that.data.contentHeight * 0.72;
    // 创建一个动画实例
    var animation = wx.createAnimation({
      // 动画持续时间
      duration: 500,
      // 定义动画效果，当前是匀速
      timingFunction: 'linear'
    })
    // 将该变量赋值给当前动画
    that.animation = animation
    var chooseSize = that.data.chooseSize;
    var autoScroll = that.data.autoScroll;
    var index = e.currentTarget.dataset.index * 1;
    var a = autoScroll * index;
    // 先在y轴偏移，然后用step()完成一个动画
    if (chooseSize) {
      animation.translateY(0).step()
    } else {
      animation.translateY(-1 * halfHeight).step()
    }
    if (chooseSize) {
      that.setData({
        // 通过export()方法导出数据
        animationData: animation.export(),
        // 改变view里面的Wx：if
        chooseSize: false,
        scrollLeft: autoScroll * index,
      })
    } else {
      // 用setData改变当前动画
      that.setData({
        // 通过export()方法导出数据
        animationData: animation.export(),
        // 改变view里面的Wx：if
        chooseSize: true,
        scrollLeft: autoScroll * index,
      })
    }

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
  // autoScroll: function (e) {
  // 	var that = this;
  // 	var autoScroll = that.data.autoScroll;
  // 	that.setData({
  // 		scrollLeft: autoScroll
  // 	})
  // },
  getSelectItem: function(e) {
    var that = this;
    var itemWidth = e.detail.scrollWidth / that.data.proList.length; //每个商品的宽度
    var scrollLeft = e.detail.scrollLeft; //滚动宽度
    var curIndex = Math.round(scrollLeft / itemWidth); //通过Math.round方法对滚动大于一半的位置进行进位

    var hasChange = that.data.proList[curIndex].selected;
    var chooseSize = that.data.chooseSize;

    for (var i = 0, len = that.data.proList.length; i < len; ++i) {
      that.data.proList[i].selected = false;
    }

    that.data.proList[curIndex].selected = true;

    //console.log(that.data.proList);
    that.setData({
      proList: that.data.proList,
      giftNo: this.data.proList[curIndex].id,
      autoScroll: itemWidth,
    });
  },

  handletouchmove: function(event) {
    // console.log(event)
		var that = this;
		var chooseSize = that.data.chooseSize;
		if (that.data.flag !== 0) {
      return
    }
    let currentX = event.touches[0].pageX;
    let currentY = event.touches[0].pageY;
		let tx = currentX - that.data.lastX;
		let ty = currentY - that.data.lastY;
    let text = "";
    //左右方向滑动
    if (Math.abs(tx) < Math.abs(ty)) {
			if (ty < 0 && !chooseSize) {
        text = "向上滑动";
				that.data.flag = 3;
				that.chooseSezi(event);

			} else if (ty > 0 && chooseSize) {
        text = "向下滑动";
				that.data.flag = 4
				that.chooseSezi(event);
      }

    }

    //将当前坐标进行保存以进行下一次计算
		that.data.lastX = currentX;
		that.data.lastY = currentY;
		that.setData({
      text: text,
    });
  },


	handletouchstart: function (event) {
		// console.log(event)
		this.data.lastX = event.touches[0].pageX;
		this.data.lastY = event.touches[0].pageY;
	},
	handletouchend: function (event) {
		this.data.flag = 0
		this.setData({
			text: "没有滑动",
		});
	}
})