var travelVehicle = {
	"data": [{
		"火车": "软席（软座、软卧）",
		"高铁/动车": "商务座",
		"全列软席": "一等软座",
		"飞机": "头等舱",
		"轮船": "一等舱"
	}, {
		"火车": "软席（软座、软卧）",
		"高铁/动车": "一等座",
		"全列软席": "一等软座",
		"飞机": "经济舱",
		"轮船": "二等舱"
	}, {
		"火车": "硬席（硬座、硬卧）",
		"高铁/动车": "二等座",
		"全列软席": "二等软座",
		"飞机": "经济舱",
		"轮船": "三等舱"
	}],
	"dataFor":[{
		"火车":"软席（软座、软卧）",
	    "高铁/动车":"商务座",
	    "全列软席":"一等软座",
	    "飞机":"头等舱",
	    "轮船":"一等舱",
	}, {
		"火车":"软席（软座、软卧）",
		"高铁/动车":"一等座",
		"全列软席":"一等软座",
		"飞机":"公务舱",
		"轮船":"二等舱"
	}, {"火车":"硬席（硬座、硬卧）",
		"高铁/动车":"二等座",
		"全列软席":"二等软座",
		"飞机":"经济舱",
		"轮船":"三等舱"
	}],
	"type": ["火车", "高铁/动车", "全列软席", "飞机", "轮船"]
};

var currencyRateMap = {
	"港币": ["HKD", "0.85", "Apr 18, 2018 6:41:17 PM"],
	"美元": ["USD", "6.5408", "Apr 18, 2018 6:41:17 PM"],
	"日元": ["JPY", "0.0502", "Apr 18, 2018 6:41:17 PM"],
	"英镑": ["GBP", "9.7864", "Apr 18, 2018 6:41:17 PM"],
	"欧元": ["EUR", "6.97", "Apr 18, 2018 6:41:17 PM"]
};

var jobGrade = {
	"data": [{
		"id": "0",
		"name": "部级"
	}, {
		"id": "1",
		"name": "司局级"
	}, {
		"id": "2",
		"name": "普通"
	}]
};

var totalData = {
	"foreign": {
		"continenL": [
            "国内",
			"亚洲",
			"非洲",
			"欧洲",
			"美洲",
			"大洋州及太平洋岛屿"
		],
		"continent": {
			"亚洲": {
				"蒙古": {
					"-": {
						"timeLag": 0.0,
						"money": [
							90,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"nationL": [
					"蒙古",
					"朝鲜",
					"韩国",
					"日本",
					"缅甸",
					"巴基斯坦",
					"斯里兰卡",
					"马尔代夫",
					"孟加拉",
					"伊拉克",
					"阿拉伯联合酋长国",
					"也门",
					"阿曼",
					"伊朗",
					"科威特",
					"沙特阿拉伯",
					"巴林",
					"以色列",
					"巴勒斯坦",
					"文莱",
					"印度",
					"不丹",
					"越南",
					"柬埔寨",
					"老挝",
					"马来西亚",
					"菲律宾",
					"印度尼西亚",
					"东帝汶",
					"泰国",
					"新加坡",
					"阿富汗",
					"尼泊尔",
					"黎巴嫩",
					"塞浦路斯",
					"约旦",
					"土耳其",
					"叙利亚",
					"卡塔尔",
					"香港",
					"澳门",
					"台湾"
				],
				"朝鲜": {
					"-": {
						"timeLag": 1.0,
						"money": [
							90,
							40,
							30
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"韩国": {
					"济州": {
						"timeLag": 1.0,
						"money": [
							180,
							70,
							35
						],
						"currency": "美元"
					},
					"釜山": {
						"timeLag": 1.0,
						"money": [
							180,
							70,
							35
						],
						"currency": "美元"
					},
					"首尔": {
						"timeLag": 1.0,
						"money": [
							180,
							70,
							35
						],
						"currency": "美元"
					},
					"其他城市": {
						"timeLag": 1.0,
						"money": [
							150,
							70,
							35
						],
						"currency": "美元"
					},
					"光州": {
						"timeLag": 1.0,
						"money": [
							160,
							70,
							35
						],
						"currency": "美元"
					},
					"西归浦": {
						"timeLag": 1.0,
						"money": [
							160,
							70,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						"首尔",
						"釜山",
						"济州",
						"光州",
						"西归浦",
						"其他城市"
					]
				},
				"日本": {
					"长崎": {
						"timeLag": 1.0,
						"money": [
							14000,
							10000,
							5000
						],
						"currency": "日元"
					},
					"大阪": {
						"timeLag": 1.0,
						"money": [
							18000,
							10000,
							5000
						],
						"currency": "日元"
					},
					"名古屋": {
						"timeLag": 1.0,
						"money": [
							14000,
							10000,
							5000
						],
						"currency": "日元"
					},
					"福冈": {
						"timeLag": 1.0,
						"money": [
							14000,
							10000,
							5000
						],
						"currency": "日元"
					},
					"京都": {
						"timeLag": 1.0,
						"money": [
							18000,
							10000,
							5000
						],
						"currency": "日元"
					},
					"其他城市": {
						"timeLag": 1.0,
						"money": [
							9000,
							10000,
							5000
						],
						"currency": "日元"
					},
					"札幌": {
						"timeLag": 1.0,
						"money": [
							14000,
							10000,
							5000
						],
						"currency": "日元"
					},
					"东京": {
						"timeLag": 1.0,
						"money": [
							20000,
							10000,
							5000
						],
						"currency": "日元"
					},
					"districtL": [
						"东京",
						"大阪",
						"京都",
						"福冈",
						"札幌",
						"长崎",
						"名古屋",
						"其他城市"
					]
				},
				"缅甸": {
					"-": {
						"timeLag": -1.3,
						"money": [
							90,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"巴基斯坦": {
					"卡拉奇": {
						"timeLag": -2.3,
						"money": [
							135,
							30,
							30
						],
						"currency": "美元"
					},
					"拉合尔": {
						"timeLag": -2.3,
						"money": [
							135,
							30,
							30
						],
						"currency": "美元"
					},
					"其他城市": {
						"timeLag": -2.3,
						"money": [
							60,
							30,
							30
						],
						"currency": "美元"
					},
					"伊斯兰堡": {
						"timeLag": -2.3,
						"money": [
							135,
							30,
							30
						],
						"currency": "美元"
					},
					"奎达": {
						"timeLag": -2.3,
						"money": [
							70,
							30,
							30
						],
						"currency": "美元"
					},
					"districtL": [
						"伊斯兰堡",
						"拉合尔",
						"卡拉奇",
						"奎达",
						"其他城市"
					]
				},
				"斯里兰卡": {
					"-": {
						"timeLag": 0.0,
						"money": [
							110,
							40,
							30
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"马尔代夫": {
					"-": {
						"timeLag": -7.0,
						"money": [
							160,
							50,
							30
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"孟加拉": {
					"-": {
						"money": [
							150,
							50,
							40
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"伊拉克": {
					"-": {
						"timeLag": -5.0,
						"money": [
							170,
							50,
							40
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"阿拉伯联合酋长国": {
					"-": {
						"timeLag": -4.0,
						"money": [
							200,
							50,
							40
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"也门": {
					"萨那": {
						"timeLag": -5.0,
						"money": [
							110,
							50,
							35
						],
						"currency": "美元"
					},
					"其他城市": {
						"timeLag": -5.0,
						"money": [
							80,
							50,
							35
						],
						"currency": "美元"
					},
					"亚丁": {
						"timeLag": -5.0,
						"money": [
							90,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						"萨那",
						"亚丁",
						"其他城市"
					]
				},
				"阿曼": {
					"-": {
						"timeLag": -4.0,
						"money": [
							150,
							50,
							40
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"伊朗": {
					"-": {
						"timeLag": -4.3,
						"money": [
							95,
							50,
							40
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"科威特": {
					"-": {
						"timeLag": -5.0,
						"money": [
							200,
							70,
							40
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"沙特阿拉伯": {
					"吉达": {
						"timeLag": -5.0,
						"money": [
							140,
							70,
							40
						],
						"currency": "美元"
					},
					"其他城市": {
						"timeLag": -5.0,
						"money": [
							120,
							70,
							40
						],
						"currency": "美元"
					},
					"利雅得": {
						"timeLag": -5.0,
						"money": [
							200,
							70,
							40
						],
						"currency": "美元"
					},
					"districtL": [
						"利雅得",
						"吉达",
						"其他城市"
					]
				},
				"巴林": {
					"-": {
						"timeLag": -5.0,
						"money": [
							160,
							55,
							40
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"以色列": {
					"-": {
						"timeLag": -6.0,
						"money": [
							200,
							70,
							40
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"巴勒斯坦": {
					"-": {
						"money": [
							180,
							70,
							40
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"文莱": {
					"-": {
						"timeLag": 0.0,
						"money": [
							130,
							40,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"印度": {
					"新德里": {
						"timeLag": -2.3,
						"money": [
							175,
							50,
							35
						],
						"currency": "美元"
					},
					"加尔各答": {
						"timeLag": -2.3,
						"money": [
							175,
							50,
							35
						],
						"currency": "美元"
					},
					"其他城市": {
						"timeLag": -2.3,
						"money": [
							155,
							50,
							35
						],
						"currency": "美元"
					},
					"孟买": {
						"timeLag": -2.3,
						"money": [
							200,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						"新德里",
						"加尔各答",
						"孟买",
						"其他城市"
					]
				},
				"不丹": {
					"-": {
						"money": [
							160,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"越南": {
					"胡志明市": {
						"timeLag": -1.0,
						"money": [
							80,
							40,
							30
						],
						"currency": "美元"
					},
					"其他城市": {
						"timeLag": -1.0,
						"money": [
							70,
							40,
							30
						],
						"currency": "美元"
					},
					"河内": {
						"timeLag": -1.0,
						"money": [
							90,
							40,
							30
						],
						"currency": "美元"
					},
					"districtL": [
						"河内",
						"胡志明市",
						"其他城市"
					]
				},
				"柬埔寨": {
					"-": {
						"timeLag": -1.0,
						"money": [
							100,
							40,
							30
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"老挝": {
					"-": {
						"timeLag": -1.0,
						"money": [
							90,
							40,
							30
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"马来西亚": {
					"-": {
						"timeLag": -0.5,
						"money": [
							110,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"菲律宾": {
					"-": {
						"timeLag": 0.0,
						"money": [
							130,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"印度尼西亚": {
					"-": {
						"timeLag": -0.3,
						"money": [
							125,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"东帝汶": {
					"-": {
						"money": [
							130,
							40,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"泰国": {
					"清迈": {
						"timeLag": -1.0,
						"money": [
							90,
							50,
							35
						],
						"currency": "美元"
					},
					"孔敬": {
						"timeLag": -1.0,
						"money": [
							90,
							50,
							35
						],
						"currency": "美元"
					},
					"曼谷": {
						"timeLag": -1.0,
						"money": [
							140,
							50,
							35
						],
						"currency": "美元"
					},
					"其他城市": {
						"timeLag": -1.0,
						"money": [
							80,
							50,
							35
						],
						"currency": "美元"
					},
					"宋卡": {
						"timeLag": -1.0,
						"money": [
							110,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						"曼谷",
						"宋卡",
						"清迈",
						"孔敬",
						"其他城市"
					]
				},
				"新加坡": {
					"-": {
						"timeLag": 0.3,
						"money": [
							220,
							55,
							40
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"阿富汗": {
					"-": {
						"timeLag": 0.0,
						"money": [
							100,
							38,
							30
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"尼泊尔": {
					"-": {
						"timeLag": -2.3,
						"money": [
							140,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"黎巴嫩": {
					"-": {
						"timeLag": -6.0,
						"money": [
							150,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"塞浦路斯": {
					"-": {
						"timeLag": -6.0,
						"money": [
							100,
							40,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"约旦": {
					"-": {
						"timeLag": -6.0,
						"money": [
							120,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"土耳其": {
					"安卡拉": {
						"timeLag": -6.0,
						"money": [
							105,
							45,
							30
						],
						"currency": "美元"
					},
					"其他城市": {
						"timeLag": -6.0,
						"money": [
							90,
							45,
							30
						],
						"currency": "美元"
					},
					"伊斯坦布尔": {
						"timeLag": -6.0,
						"money": [
							150,
							45,
							30
						],
						"currency": "美元"
					},
					"districtL": [
						"安卡拉",
						"伊斯坦布尔",
						"其他城市"
					]
				},
				"叙利亚": {
					"-": {
						"timeLag": -6.0,
						"money": [
							110,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"卡塔尔": {
					"-": {
						"timeLag": -5.0,
						"money": [
							160,
							60,
							40
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"香港": {
					"-": {
						"timeLag": 0.0,
						"money": [
							1500,
							500,
							300
						],
						"currency": "港币"
					},
					"districtL": [
						""
					]
				},
				"澳门": {
					"-": {
						"timeLag": 0.0,
						"money": [
							1200,
							500,
							300
						],
						"currency": "港币"
					},
					"districtL": [
						""
					]
				},
				"台湾": {
					"-": {
						"money": [
							150,
							60,
							40
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				}
			},
			"非洲": {
				"马达加斯加": {
					"塔那那利佛": {
						"timeLag": -5.0,
						"money": [
							130,
							38,
							30
						],
						"currency": "美元"
					},
					"塔马塔夫": {
						"timeLag": -5.0,
						"money": [
							100,
							38,
							30
						],
						"currency": "美元"
					},
					"其他城市": {
						"timeLag": -5.0,
						"money": [
							90,
							38,
							30
						],
						"currency": "美元"
					},
					"districtL": [
						"塔那那利佛",
						"塔马塔夫",
						"其他城市"
					]
				},
				"nationL": [
					"马达加斯加",
					"喀麦隆",
					"多哥",
					"科特迪瓦",
					"摩洛哥",
					"阿尔及利亚",
					"卢旺达",
					"几内亚",
					"埃塞俄比亚",
					"厄立特里亚",
					"莫桑比克",
					"塞舌尔",
					"肯尼亚",
					"利比亚",
					"安哥拉",
					"赞比亚",
					"几内亚比绍",
					"突尼斯",
					"布隆迪",
					"莱索托",
					"津巴布韦",
					"尼日利亚",
					"毛里求斯",
					"索马里",
					"苏丹",
					"贝宁",
					"马里",
					"乌干达",
					"塞拉里昂",
					"吉布提",
					"塞内加尔",
					"冈比亚",
					"加蓬",
					"中非",
					"布基纳法索",
					"毛里塔尼亚",
					"尼日尔",
					"乍得",
					"赤道几内亚",
					"加纳",
					"坦桑尼亚",
					"刚果（金）",
					"刚果（布）",
					"埃及",
					"圣多美和普林西比",
					"博茨瓦纳",
					"南非",
					"纳米比亚",
					"斯威士兰",
					"利比里亚",
					"佛得角",
					"科摩罗",
					"南苏丹",
					"马拉维"
				],
				"喀麦隆": {
					"-": {
						"timeLag": -7.0,
						"money": [
							120,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"多哥": {
					"-": {
						"timeLag": -8.0,
						"money": [
							110,
							48,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"科特迪瓦": {
					"-": {
						"timeLag": -6.0,
						"money": [
							120,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"摩洛哥": {
					"-": {
						"timeLag": -6.0,
						"money": [
							130,
							50,
							40
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"阿尔及利亚": {
					"-": {
						"timeLag": -8.0,
						"money": [
							180,
							55,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"卢旺达": {
					"-": {
						"money": [
							130,
							32,
							30
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"几内亚": {
					"-": {
						"timeLag": -8.0,
						"money": [
							130,
							55,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"埃塞俄比亚": {
					"-": {
						"timeLag": -5.0,
						"money": [
							210,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"厄立特里亚": {
					"-": {
						"money": [
							110,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"莫桑比克": {
					"-": {
						"timeLag": -6.0,
						"money": [
							170,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"塞舌尔": {
					"-": {
						"timeLag": -4.0,
						"money": [
							240,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"肯尼亚": {
					"-": {
						"timeLag": -5.0,
						"money": [
							195,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"利比亚": {
					"-": {
						"timeLag": -6.0,
						"money": [
							160,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"安哥拉": {
					"-": {
						"timeLag": -7.0,
						"money": [
							400,
							60,
							40
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"赞比亚": {
					"-": {
						"timeLag": -6.0,
						"money": [
							150,
							45,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"几内亚比绍": {
					"-": {
						"money": [
							135,
							45,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"突尼斯": {
					"-": {
						"timeLag": -7.0,
						"money": [
							100,
							40,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"布隆迪": {
					"-": {
						"timeLag": -6.0,
						"money": [
							150,
							40,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"莱索托": {
					"-": {
						"timeLag": -6.0,
						"money": [
							100,
							35,
							30
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"津巴布韦": {
					"-": {
						"timeLag": -6.0,
						"money": [
							120,
							45,
							33
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"尼日利亚": {
					"拉各斯": {
						"timeLag": -7.0,
						"money": [
							300,
							60,
							35
						],
						"currency": "美元"
					},
					"阿布贾": {
						"timeLag": -7.0,
						"money": [
							270,
							60,
							35
						],
						"currency": "美元"
					},
					"其他城市": {
						"timeLag": -7.0,
						"money": [
							250,
							60,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						"阿布贾",
						"拉各斯",
						"其他城市"
					]
				},
				"毛里求斯": {
					"-": {
						"timeLag": -4.0,
						"money": [
							155,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"索马里": {
					"-": {
						"timeLag": -5.0,
						"money": [
							180,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"苏丹": {
					"-": {
						"timeLag": -6.0,
						"money": [
							130,
							40,
							32
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"贝宁": {
					"-": {
						"timeLag": -7.0,
						"money": [
							150,
							35,
							30
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"马里": {
					"-": {
						"timeLag": -8.0,
						"money": [
							150,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"乌干达": {
					"-": {
						"timeLag": -5.0,
						"money": [
							170,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"塞拉里昂": {
					"-": {
						"money": [
							155,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"吉布提": {
					"-": {
						"timeLag": -5.0,
						"money": [
							160,
							60,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"塞内加尔": {
					"-": {
						"timeLag": -8.0,
						"money": [
							165,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"冈比亚": {
					"-": {
						"timeLag": -8.0,
						"money": [
							170,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"加蓬": {
					"-": {
						"timeLag": -7.0,
						"money": [
							180,
							60,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"中非": {
					"-": {
						"money": [
							140,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"布基纳法索": {
					"-": {
						"timeLag": -8.0,
						"money": [
							140,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"毛里塔尼亚": {
					"-": {
						"money": [
							130,
							55,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"尼日尔": {
					"-": {
						"timeLag": -8.0,
						"money": [
							145,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"乍得": {
					"-": {
						"timeLag": -7.0,
						"money": [
							220,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"赤道几内亚": {
					"-": {
						"money": [
							200,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"加纳": {
					"-": {
						"timeLag": -8.0,
						"money": [
							200,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"坦桑尼亚": {
					"达累斯萨拉姆": {
						"timeLag": -5.0,
						"money": [
							180,
							50,
							35
						],
						"currency": "美元"
					},
					"桑给巴尔": {
						"timeLag": -5.0,
						"money": [
							210,
							50,
							35
						],
						"currency": "美元"
					},
					"其他城市": {
						"timeLag": -5.0,
						"money": [
							160,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						"达累斯萨拉姆",
						"桑给巴尔",
						"其他城市"
					]
				},
				"刚果（金）": {
					"-": {
						"money": [
							220,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"刚果（布）": {
					"-": {
						"money": [
							170,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"埃及": {
					"-": {
						"timeLag": -6.0,
						"money": [
							170,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"圣多美和普林西比": {
					"-": {
						"timeLag": -8.0,
						"money": [
							170,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"博茨瓦纳": {
					"-": {
						"timeLag": -6.0,
						"money": [
							170,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"南非": {
					"比勒陀尼亚": {
						"timeLag": 2.0,
						"money": [
							170,
							50,
							35
						],
						"currency": "美元"
					},
					"其他城市": {
						"timeLag": 2.0,
						"money": [
							130,
							50,
							35
						],
						"currency": "美元"
					},
					"开普敦": {
						"timeLag": 2.0,
						"money": [
							210,
							50,
							35
						],
						"currency": "美元"
					},
					"德班": {
						"timeLag": 2.0,
						"money": [
							150,
							50,
							35
						],
						"currency": "美元"
					},
					"约翰内斯堡": {
						"timeLag": 2.0,
						"money": [
							170,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						"比勒陀尼亚",
						"约翰内斯堡",
						"开普敦",
						"德班",
						"其他城市"
					]
				},
				"纳米比亚": {
					"-": {
						"timeLag": -7.0,
						"money": [
							140,
							35,
							30
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"斯威士兰": {
					"-": {
						"timeLag": -6.0,
						"money": [
							150,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"利比里亚": {
					"-": {
						"timeLag": -8.0,
						"money": [
							195,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"佛得角": {
					"-": {
						"money": [
							120,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"科摩罗": {
					"-": {
						"money": [
							120,
							40,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"南苏丹": {
					"-": {
						"money": [
							160,
							40,
							32
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"马拉维": {
					"-": {
						"timeLag": -6.0,
						"money": [
							130,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				}
			},
			"欧洲": {
				"罗马尼亚": {
					"布加勒斯特": {
						"timeLag": -6.0,
						"money": [
							120,
							45,
							40
						],
						"currency": "美元"
					},
					"其他城市": {
						"timeLag": -6.0,
						"money": [
							80,
							50,
							40
						],
						"currency": "美元"
					},
					"康斯坦察": {
						"timeLag": -6.0,
						"money": [
							90,
							50,
							40
						],
						"currency": "美元"
					},
					"districtL": [
						"布加勒斯特",
						"康斯坦察",
						"其他城市"
					]
				},
				"nationL": [
					"罗马尼亚",
					"马其顿",
					"斯洛文尼亚",
					"波黑",
					"克罗地亚",
					"阿尔巴尼亚",
					"保加利亚",
					"俄罗斯",
					"立陶宛",
					"拉脱维亚",
					"爱沙尼亚",
					"乌克兰",
					"阿塞拜疆",
					"亚美尼亚",
					"格鲁吉亚",
					"吉尔吉斯斯坦",
					"塔吉克斯坦",
					"土库曼斯坦",
					"乌兹别克斯坦",
					"白俄罗斯",
					"哈萨克斯坦",
					"摩尔多瓦",
					"波兰",
					"德国",
					"荷兰",
					"意大利",
					"比利时",
					"奥地利",
					"希腊",
					"法国",
					"西班牙",
					"卢森堡",
					"爱尔兰",
					"葡萄牙",
					"芬兰",
					"捷克",
					"斯洛伐克",
					"匈牙利",
					"瑞典",
					"丹麦",
					"挪威",
					"瑞士",
					"冰岛",
					"马耳他",
					"塞尔维亚",
					"黑山",
					"英国"
				],
				"马其顿": {
					"-": {
						"money": [
							120,
							50,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"斯洛文尼亚": {
					"-": {
						"timeLag": -7.0,
						"money": [
							90,
							30,
							25
						],
						"currency": "欧元"
					},
					"districtL": [
						""
					]
				},
				"波黑": {
					"-": {
						"money": [
							100,
							40,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"克罗地亚": {
					"-": {
						"money": [
							120,
							40,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"阿尔巴尼亚": {
					"-": {
						"timeLag": -7.0,
						"money": [
							150,
							35,
							30
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"保加利亚": {
					"-": {
						"timeLag": -6.0,
						"money": [
							110,
							45,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"俄罗斯": {
					"哈巴罗夫斯克": {
						"timeLag": -5.0,
						"money": [
							200,
							45,
							40
						],
						"currency": "美元"
					},
					"莫斯科": {
						"timeLag": -5.0,
						"money": [
							285,
							45,
							40
						],
						"currency": "美元"
					},
					"叶卡捷琳堡": {
						"timeLag": -5.0,
						"money": [
							170,
							45,
							40
						],
						"currency": "美元"
					},
					"其他城市": {
						"timeLag": -5.0,
						"money": [
							140,
							45,
							40
						],
						"currency": "美元"
					},
					"圣彼得堡": {
						"timeLag": -5.0,
						"money": [
							170,
							45,
							40
						],
						"currency": "美元"
					},
					"伊尔库茨克": {
						"timeLag": -5.0,
						"money": [
							150,
							45,
							40
						],
						"currency": "美元"
					},
					"districtL": [
						"莫斯科",
						"哈巴罗夫斯克",
						"叶卡捷琳堡",
						"圣彼得堡",
						"伊尔库茨克",
						"其他城市"
					]
				},
				"立陶宛": {
					"-": {
						"timeLag": -5.0,
						"money": [
							120,
							45,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"拉脱维亚": {
					"-": {
						"timeLag": -5.0,
						"money": [
							90,
							35,
							25
						],
						"currency": "欧元"
					},
					"districtL": [
						""
					]
				},
				"爱沙尼亚": {
					"-": {
						"timeLag": -5.0,
						"money": [
							90,
							35,
							25
						],
						"currency": "欧元"
					},
					"districtL": [
						""
					]
				},
				"乌克兰": {
					"基辅": {
						"timeLag": -5.0,
						"money": [
							100,
							45,
							40
						],
						"currency": "美元"
					},
					"其他城市": {
						"timeLag": -5.0,
						"money": [
							80,
							45,
							40
						],
						"currency": "美元"
					},
					"敖德萨": {
						"timeLag": -5.0,
						"money": [
							130,
							45,
							40
						],
						"currency": "美元"
					},
					"districtL": [
						"基辅",
						"敖德萨",
						"其他城市"
					]
				},
				"阿塞拜疆": {
					"-": {
						"timeLag": -5.0,
						"money": [
							150,
							45,
							40
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"亚美尼亚": {
					"-": {
						"timeLag": -6.0,
						"money": [
							120,
							45,
							40
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"格鲁吉亚": {
					"-": {
						"timeLag": 0.0,
						"money": [
							150,
							45,
							40
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"吉尔吉斯斯坦": {
					"比什凯克": {
						"money": [
							230,
							45,
							40
						],
						"currency": "美元"
					},
					"其他城市": {
						"money": [
							80,
							45,
							40
						],
						"currency": "美元"
					},
					"districtL": [
						"比什凯克",
						"其他城市"
					]
				},
				"塔吉克斯坦": {
					"-": {
						"timeLag": -5.0,
						"money": [
							210,
							45,
							40
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"土库曼斯坦": {
					"-": {
						"timeLag": -5.0,
						"money": [
							120,
							45,
							40
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"乌兹别克斯坦": {
					"其他城市": {
						"timeLag": -5.0,
						"money": [
							90,
							40,
							32
						],
						"currency": "美元"
					},
					"撒马尔罕": {
						"timeLag": -5.0,
						"money": [
							100,
							40,
							32
						],
						"currency": "美元"
					},
					"塔什干": {
						"timeLag": -5.0,
						"money": [
							120,
							40,
							32
						],
						"currency": "美元"
					},
					"districtL": [
						"塔什干",
						"撒马尔罕",
						"其他城市"
					]
				},
				"白俄罗斯": {
					"-": {
						"timeLag": -6.0,
						"money": [
							180,
							45,
							40
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"哈萨克斯坦": {
					"阿斯塔纳": {
						"timeLag": -5.0,
						"money": [
							160,
							45,
							40
						],
						"currency": "美元"
					},
					"其他城市": {
						"timeLag": -5.0,
						"money": [
							140,
							45,
							40
						],
						"currency": "美元"
					},
					"阿拉木图": {
						"timeLag": -5.0,
						"money": [
							200,
							45,
							40
						],
						"currency": "美元"
					},
					"districtL": [
						"阿斯塔纳",
						"阿拉木图",
						"其他城市"
					]
				},
				"摩尔多瓦": {
					"-": {
						"timeLag": -5.0,
						"money": [
							90,
							45,
							40
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"波兰": {
					"革但斯克": {
						"timeLag": -7.0,
						"money": [
							130,
							50,
							40
						],
						"currency": "美元"
					},
					"其他城市": {
						"timeLag": -7.0,
						"money": [
							120,
							50,
							40
						],
						"currency": "美元"
					},
					"华沙": {
						"timeLag": -7.0,
						"money": [
							150,
							50,
							40
						],
						"currency": "美元"
					},
					"districtL": [
						"华沙",
						"革但斯克",
						"其他城市"
					]
				},
				"德国": {
					"法兰克福": {
						"timeLag": -7.0,
						"money": [
							180,
							60,
							38
						],
						"currency": "欧元"
					},
					"柏林": {
						"timeLag": -7.0,
						"money": [
							150,
							60,
							38
						],
						"currency": "欧元"
					},
					"汉堡": {
						"timeLag": -7.0,
						"money": [
							150,
							60,
							38
						],
						"currency": "欧元"
					},
					"其他城市": {
						"timeLag": -7.0,
						"money": [
							120,
							60,
							38
						],
						"currency": "欧元"
					},
					"慕尼黑": {
						"timeLag": -7.0,
						"money": [
							130,
							60,
							38
						],
						"currency": "欧元"
					},
					"districtL": [
						"柏林",
						"汉堡",
						"慕尼黑",
						"法兰克福",
						"其他城市"
					]
				},
				"荷兰": {
					"其他城市": {
						"timeLag": -7.0,
						"money": [
							130,
							60,
							38
						],
						"currency": "欧元"
					},
					"阿姆斯特丹": {
						"timeLag": -7.0,
						"money": [
							170,
							60,
							38
						],
						"currency": "欧元"
					},
					"海牙": {
						"timeLag": -7.0,
						"money": [
							150,
							60,
							38
						],
						"currency": "欧元"
					},
					"districtL": [
						"海牙",
						"阿姆斯特丹",
						"其他城市"
					]
				},
				"意大利": {
					"罗马": {
						"timeLag": -7.0,
						"money": [
							160,
							65,
							38
						],
						"currency": "欧元"
					},
					"佛罗伦萨": {
						"timeLag": -7.0,
						"money": [
							120,
							65,
							38
						],
						"currency": "欧元"
					},
					"米兰": {
						"timeLag": -7.0,
						"money": [
							140,
							65,
							38
						],
						"currency": "欧元"
					},
					"其他城市": {
						"timeLag": -7.0,
						"money": [
							110,
							65,
							38
						],
						"currency": "欧元"
					},
					"districtL": [
						"罗马",
						"米兰",
						"佛罗伦萨",
						"其他城市"
					]
				},
				"比利时": {
					"-": {
						"timeLag": -7.0,
						"money": [
							160,
							60,
							38
						],
						"currency": "欧元"
					},
					"districtL": [
						""
					]
				},
				"奥地利": {
					"-": {
						"timeLag": -7.0,
						"money": [
							140,
							60,
							38
						],
						"currency": "欧元"
					},
					"districtL": [
						""
					]
				},
				"希腊": {
					"-": {
						"timeLag": -6.0,
						"money": [
							110,
							55,
							35
						],
						"currency": "欧元"
					},
					"districtL": [
						""
					]
				},
				"法国": {
					"巴黎": {
						"timeLag": -8.0,
						"money": [
							150,
							60,
							40
						],
						"currency": "欧元"
					},
					"里昂": {
						"timeLag": -8.0,
						"money": [
							130,
							60,
							40
						],
						"currency": "欧元"
					},
					"其他城市": {
						"timeLag": -8.0,
						"money": [
							120,
							60,
							40
						],
						"currency": "欧元"
					},
					"马赛": {
						"timeLag": -8.0,
						"money": [
							130,
							60,
							40
						],
						"currency": "欧元"
					},
					"尼斯": {
						"timeLag": -8.0,
						"money": [
							130,
							60,
							40
						],
						"currency": "欧元"
					},
					"斯特拉斯堡": {
						"timeLag": -8.0,
						"money": [
							130,
							60,
							40
						],
						"currency": "欧元"
					},
					"districtL": [
						"巴黎",
						"马赛",
						"斯特拉斯堡",
						"尼斯",
						"里昂",
						"其他城市"
					]
				},
				"西班牙": {
					"-": {
						"timeLag": -8.0,
						"money": [
							125,
							60,
							38
						],
						"currency": "欧元"
					},
					"districtL": [
						""
					]
				},
				"卢森堡": {
					"-": {
						"timeLag": -7.0,
						"money": [
							160,
							55,
							38
						],
						"currency": "欧元"
					},
					"districtL": [
						""
					]
				},
				"爱尔兰": {
					"-": {
						"timeLag": -4.3,
						"money": [
							120,
							60,
							38
						],
						"currency": "欧元"
					},
					"districtL": [
						""
					]
				},
				"葡萄牙": {
					"-": {
						"timeLag": -8.0,
						"money": [
							130,
							60,
							38
						],
						"currency": "欧元"
					},
					"districtL": [
						""
					]
				},
				"芬兰": {
					"-": {
						"timeLag": -6.0,
						"money": [
							145,
							60,
							40
						],
						"currency": "欧元"
					},
					"districtL": [
						""
					]
				},
				"捷克": {
					"-": {
						"timeLag": -7.0,
						"money": [
							160,
							45,
							50
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"斯洛伐克": {
					"-": {
						"timeLag": -7.0,
						"money": [
							90,
							35,
							30
						],
						"currency": "欧元"
					},
					"districtL": [
						""
					]
				},
				"匈牙利": {
					"-": {
						"timeLag": -7.0,
						"money": [
							180,
							45,
							45
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"瑞典": {
					"-": {
						"timeLag": -7.0,
						"money": [
							280,
							80,
							50
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"丹麦": {
					"-": {
						"timeLag": -7.0,
						"money": [
							200,
							80,
							50
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"挪威": {
					"-": {
						"timeLag": -7.0,
						"money": [
							200,
							80,
							50
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"瑞士": {
					"-": {
						"timeLag": -7.0,
						"money": [
							200,
							70,
							50
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"冰岛": {
					"-": {
						"timeLag": -9.0,
						"money": [
							200,
							65,
							50
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"马耳他": {
					"-": {
						"timeLag": -7.0,
						"money": [
							90,
							38,
							25
						],
						"currency": "欧元"
					},
					"districtL": [
						""
					]
				},
				"塞尔维亚": {
					"-": {
						"money": [
							120,
							40,
							30
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"黑山": {
					"-": {
						"money": [
							90,
							30,
							22
						],
						"currency": "欧元"
					},
					"districtL": [
						""
					]
				},
				"英国": {
					"伦敦": {
						"timeLag": -8.0,
						"money": [
							160,
							45,
							35
						],
						"currency": "英镑"
					},
					"爱丁堡": {
						"timeLag": -8.0,
						"money": [
							140,
							45,
							35
						],
						"currency": "英镑"
					},
					"曼彻斯特": {
						"timeLag": -8.0,
						"money": [
							140,
							45,
							35
						],
						"currency": "英镑"
					},
					"其他城市": {
						"timeLag": -8.0,
						"money": [
							125,
							45,
							35
						],
						"currency": "英镑"
					},
					"districtL": [
						"伦敦",
						"曼彻斯特",
						"爱丁堡",
						"其他城市"
					]
				}
			},
			"美洲": {
				"美国": {
					"夏威夷": {
						"timeLag": -13.0,
						"money": [
							195,
							55,
							45
						],
						"currency": "美元"
					},
					"旧金山": {
						"timeLag": -13.0,
						"money": [
							250,
							55,
							45
						],
						"currency": "美元"
					},
					"洛杉矶": {
						"timeLag": -13.0,
						"money": [
							200,
							55,
							45
						],
						"currency": "美元"
					},
					"华盛顿": {
						"timeLag": -13.0,
						"money": [
							210,
							55,
							45
						],
						"currency": "美元"
					},
					"其他城市": {
						"timeLag": -13.0,
						"money": [
							160,
							55,
							45
						],
						"currency": "美元"
					},
					"波士顿": {
						"timeLag": -13.0,
						"money": [
							230,
							55,
							45
						],
						"currency": "美元"
					},
					"休斯顿": {
						"timeLag": -13.0,
						"money": [
							180,
							55,
							45
						],
						"currency": "美元"
					},
					"芝加哥": {
						"timeLag": -13.0,
						"money": [
							220,
							55,
							45
						],
						"currency": "美元"
					},
					"纽约": {
						"timeLag": -13.0,
						"money": [
							245,
							55,
							45
						],
						"currency": "美元"
					},
					"districtL": [
						"华盛顿",
						"旧金山",
						"休斯顿",
						"波士顿",
						"纽约",
						"芝加哥",
						"洛杉矶",
						"夏威夷",
						"其他城市"
					]
				},
				"nationL": [
					"美国",
					"加拿大",
					"墨西哥",
					"巴西",
					"牙买加",
					"特立尼达和多巴哥",
					"厄瓜多尔",
					"阿根廷",
					"乌拉圭",
					"智利",
					"哥伦比亚",
					"巴巴多斯",
					"圭亚那",
					"古巴",
					"巴拿马",
					"格林纳达",
					"安提瓜和巴布达",
					"秘鲁",
					"玻利维亚",
					"尼加拉瓜",
					"苏里南",
					"委内瑞拉",
					"海地",
					"波多黎各",
					"多米尼加",
					"多米尼克",
					"巴哈马",
					"圣卢西亚",
					"阿鲁巴岛",
					"哥斯达黎加"
				],
				"加拿大": {
					"渥太华": {
						"timeLag": -13.0,
						"money": [
							210,
							55,
							45
						],
						"currency": "美元"
					},
					"蒙特利尔": {
						"timeLag": -13.0,
						"money": [
							210,
							55,
							45
						],
						"currency": "美元"
					},
					"卡尔加里": {
						"timeLag": -13.0,
						"money": [
							210,
							55,
							45
						],
						"currency": "美元"
					},
					"多伦多": {
						"timeLag": -13.0,
						"money": [
							210,
							55,
							45
						],
						"currency": "美元"
					},
					"其他城市": {
						"timeLag": -13.0,
						"money": [
							190,
							55,
							45
						],
						"currency": "美元"
					},
					"温哥华": {
						"timeLag": -13.0,
						"money": [
							240,
							55,
							45
						],
						"currency": "美元"
					},
					"districtL": [
						"渥太华",
						"多伦多",
						"卡尔加里",
						"蒙特利尔",
						"温哥华",
						"其他城市"
					]
				},
				"墨西哥": {
					"蒂华纳": {
						"timeLag": -15.0,
						"money": [
							120,
							50,
							45
						],
						"currency": "美元"
					},
					"其他城市": {
						"timeLag": -15.0,
						"money": [
							100,
							50,
							45
						],
						"currency": "美元"
					},
					"墨西哥": {
						"timeLag": -15.0,
						"money": [
							150,
							50,
							45
						],
						"currency": "美元"
					},
					"districtL": [
						"墨西哥",
						"蒂华纳",
						"其他城市"
					]
				},
				"巴西": {
					"里约热内卢": {
						"timeLag": -11.0,
						"money": [
							260,
							50,
							45
						],
						"currency": "美元"
					},
					"其他城市": {
						"timeLag": -11.0,
						"money": [
							150,
							50,
							45
						],
						"currency": "美元"
					},
					"圣保罗": {
						"timeLag": -11.0,
						"money": [
							240,
							50,
							45
						],
						"currency": "美元"
					},
					"巴西利亚": {
						"timeLag": -11.0,
						"money": [
							160,
							50,
							45
						],
						"currency": "美元"
					},
					"districtL": [
						"巴西利亚",
						"圣保罗",
						"里约热内卢",
						"其他城市"
					]
				},
				"牙买加": {
					"-": {
						"timeLag": -12.0,
						"money": [
							160,
							50,
							45
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"特立尼达和多巴哥": {
					"-": {
						"timeLag": -12.0,
						"money": [
							180,
							50,
							45
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"厄瓜多尔": {
					"-": {
						"timeLag": -13.0,
						"money": [
							120,
							40,
							32
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"阿根廷": {
					"-": {
						"timeLag": -11.0,
						"money": [
							130,
							50,
							45
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"乌拉圭": {
					"-": {
						"timeLag": -10.3,
						"money": [
							135,
							50,
							45
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"智利": {
					"阿里卡": {
						"timeLag": -13.0,
						"money": [
							110,
							47,
							45
						],
						"currency": "美元"
					},
					"圣地亚哥": {
						"timeLag": -13.0,
						"money": [
							135,
							47,
							45
						],
						"currency": "美元"
					},
					"安托法加斯塔": {
						"timeLag": -13.0,
						"money": [
							110,
							47,
							45
						],
						"currency": "美元"
					},
					"其他城市": {
						"timeLag": -13.0,
						"money": [
							100,
							47,
							45
						],
						"currency": "美元"
					},
					"伊基克": {
						"timeLag": -13.0,
						"money": [
							120,
							47,
							45
						],
						"currency": "美元"
					},
					"districtL": [
						"圣地亚哥",
						"伊基克",
						"安托法加斯塔",
						"阿里卡",
						"其他城市"
					]
				},
				"哥伦比亚": {
					"卡塔赫纳": {
						"timeLag": 0.0,
						"money": [
							120,
							40,
							35
						],
						"currency": "美元"
					},
					"波哥大": {
						"timeLag": 0.0,
						"money": [
							190,
							40,
							35
						],
						"currency": "美元"
					},
					"麦德林": {
						"timeLag": 0.0,
						"money": [
							110,
							40,
							35
						],
						"currency": "美元"
					},
					"其他城市": {
						"timeLag": 0.0,
						"money": [
							100,
							40,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						"波哥大",
						"麦德林",
						"卡塔赫纳",
						"其他城市"
					]
				},
				"巴巴多斯": {
					"-": {
						"timeLag": -12.0,
						"money": [
							250,
							60,
							45
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"圭亚那": {
					"-": {
						"timeLag": -11.0,
						"money": [
							160,
							50,
							45
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"古巴": {
					"-": {
						"timeLag": -13.0,
						"money": [
							135,
							40,
							37
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"巴拿马": {
					"-": {
						"timeLag": -13.0,
						"money": [
							135,
							45,
							45
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"格林纳达": {
					"-": {
						"timeLag": -14.0,
						"money": [
							190,
							45,
							45
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"安提瓜和巴布达": {
					"-": {
						"timeLag": -12.0,
						"money": [
							150,
							60,
							45
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"秘鲁": {
					"-": {
						"timeLag": -13.0,
						"money": [
							140,
							40,
							40
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"玻利维亚": {
					"-": {
						"timeLag": -12.0,
						"money": [
							110,
							36,
							30
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"尼加拉瓜": {
					"-": {
						"timeLag": -14.0,
						"money": [
							120,
							45,
							45
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"苏里南": {
					"-": {
						"timeLag": -11.3,
						"money": [
							110,
							50,
							45
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"委内瑞拉": {
					"-": {
						"timeLag": -12.3,
						"money": [
							230,
							45,
							45
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"海地": {
					"-": {
						"timeLag": -13.0,
						"money": [
							180,
							45,
							43
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"波多黎各": {
					"-": {
						"timeLag": -12.0,
						"money": [
							150,
							45,
							45
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"多米尼加": {
					"-": {
						"money": [
							150,
							45,
							45
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"多米尼克": {
					"-": {
						"money": [
							120,
							45,
							45
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"巴哈马": {
					"-": {
						"timeLag": -13.0,
						"money": [
							220,
							45,
							45
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"圣卢西亚": {
					"-": {
						"timeLag": -12.0,
						"money": [
							200,
							45,
							45
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"阿鲁巴岛": {
					"-": {
						"money": [
							200,
							45,
							45
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"哥斯达黎加": {
					"-": {
						"timeLag": -14.0,
						"money": [
							120,
							45,
							40
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				}
			},
			"大洋州及太平洋岛屿": {
				"澳大利亚": {
					"布里斯班": {
						"timeLag": 2.0,
						"money": [
							180,
							60,
							50
						],
						"currency": "美元"
					},
					"堪培拉": {
						"timeLag": 2.0,
						"money": [
							180,
							60,
							50
						],
						"currency": "美元"
					},
					"悉尼": {
						"timeLag": 2.0,
						"money": [
							200,
							60,
							50
						],
						"currency": "美元"
					},
					"其他城市": {
						"timeLag": 2.0,
						"money": [
							160,
							60,
							50
						],
						"currency": "美元"
					},
					"帕斯": {
						"timeLag": 2.0,
						"money": [
							180,
							60,
							50
						],
						"currency": "美元"
					},
					"墨尔本": {
						"timeLag": 2.0,
						"money": [
							200,
							60,
							50
						],
						"currency": "美元"
					},
					"districtL": [
						"堪培拉",
						"帕斯",
						"布里斯班",
						"墨尔本",
						"悉尼",
						"其他城市"
					]
				},
				"nationL": [
					"澳大利亚",
					"新西兰",
					"萨摩亚",
					"斐济",
					"巴布亚新几内亚",
					"密克罗尼西亚",
					"马绍尔群岛",
					"瓦努阿图",
					"基里巴斯",
					"汤加",
					"帕劳",
					"库克群岛",
					"所罗门群岛",
					"法属留尼汪",
					"法属波利尼西亚"
				],
				"新西兰": {
					"-": {
						"timeLag": 4.0,
						"money": [
							180,
							60,
							45
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"萨摩亚": {
					"-": {
						"money": [
							170,
							47,
							45
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"斐济": {
					"苏瓦": {
						"timeLag": 4.0,
						"money": [
							190,
							45,
							50
						],
						"currency": "美元"
					},
					"其他城市": {
						"timeLag": 4.0,
						"money": [
							110,
							45,
							50
						],
						"currency": "美元"
					},
					"楠迪": {
						"timeLag": 4.0,
						"money": [
							120,
							45,
							50
						],
						"currency": "美元"
					},
					"districtL": [
						"苏瓦",
						"楠迪",
						"其他城市"
					]
				},
				"巴布亚新几内亚": {
					"-": {
						"timeLag": 2.0,
						"money": [
							350,
							55,
							50
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"密克罗尼西亚": {
					"-": {
						"money": [
							120,
							40,
							30
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"马绍尔群岛": {
					"-": {
						"money": [
							120,
							55,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"瓦努阿图": {
					"-": {
						"money": [
							150,
							55,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"基里巴斯": {
					"-": {
						"money": [
							195,
							55,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"汤加": {
					"-": {
						"timeLag": 4.0,
						"money": [
							160,
							60,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"帕劳": {
					"-": {
						"money": [
							180,
							60,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"库克群岛": {
					"-": {
						"timeLag": -18.3,
						"money": [
							180,
							60,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"所罗门群岛": {
					"-": {
						"timeLag": 3.0,
						"money": [
							200,
							60,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"法属留尼汪": {
					"-": {
						"money": [
							140,
							60,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				},
				"法属波利尼西亚": {
					"-": {
						"money": [
							240,
							60,
							35
						],
						"currency": "美元"
					},
					"districtL": [
						""
					]
				}
			}
		}
	},
	"nation": {
		"provinceL": [
			"北京",
			"天津",
			"河北",
			"山西",
			"内蒙古",
			"辽宁",
			"大连",
			"吉林",
			"黑龙江",
			"上海",
			"江苏",
			"浙江",
			"宁波",
			"安徽",
			"福建",
			"厦门",
			"江西",
			"山东",
			"青岛",
			"河南",
			"湖北",
			"湖南",
			"广东",
			"深圳",
			"广西",
			"海南",
			"重庆",
			"四川",
			"贵州",
			"云南",
			"西藏",
			"陕西",
			"甘肃",
			"青海",
			"宁夏",
			"新疆"
		],
		"province": {
			"北京": {
				"全市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						1100,
						650,
						500
					],
					"isBusy": 0
				},
				"distL": [
					"全市"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				}
			},
			"天津": {
				"6个中心城区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						380
					],
					"isBusy": 0
				},
				"distL": [
					"6个中心城区",
					"滨海新区",
					"东丽区",
					"西青区",
					"津南区",
					"北辰区",
					"武清区",
					"宝坻区",
					"静海区",
					"蓟县",
					"宁河区"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				},
				"滨海新区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						380
					],
					"isBusy": 0
				},
				"东丽区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						380
					],
					"isBusy": 0
				},
				"西青区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						380
					],
					"isBusy": 0
				},
				"津南区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						380
					],
					"isBusy": 0
				},
				"北辰区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						380
					],
					"isBusy": 0
				},
				"武清区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						380
					],
					"isBusy": 0
				},
				"宝坻区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						380
					],
					"isBusy": 0
				},
				"静海区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						380
					],
					"isBusy": 0
				},
				"蓟县": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						380
					],
					"isBusy": 0
				},
				"宁河区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						600,
						350,
						320
					],
					"isBusy": 0
				}
			},
			"河北": {
				"石家庄市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						450,
						350
					],
					"isBusy": 0
				},
				"distL": [
					"石家庄市",
					"张家口市",
					"秦皇岛市",
					"廊坊市",
					"承德市",
					"保定市",
					"其他地区"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				},
				"张家口市": {
					"busyDate": "7-9月、11-3月",
					"busyMoney": [
						1200,
						675,
						525
					],
					"money": [
						800,
						450,
						350
					],
					"isBusy": 1
				},
				"秦皇岛市": {
					"busyDate": "7-8月",
					"busyMoney": [
						1200,
						680,
						500
					],
					"money": [
						800,
						450,
						350
					],
					"isBusy": 1
				},
				"廊坊市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						450,
						350
					],
					"isBusy": 0
				},
				"承德市": {
					"busyDate": "7-9月",
					"busyMoney": [
						1000,
						580,
						580
					],
					"money": [
						800,
						450,
						350
					],
					"isBusy": 1
				},
				"保定市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						450,
						350
					],
					"isBusy": 0
				},
				"其他地区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						450,
						310
					],
					"isBusy": 0
				}
			},
			"山西": {
				"太原市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						350
					],
					"isBusy": 0
				},
				"distL": [
					"太原市",
					"大同市",
					"晋城市",
					"临汾市",
					"阳泉市",
					"长治市",
					"晋中市",
					"其他地区"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				},
				"大同市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						350
					],
					"isBusy": 0
				},
				"晋城市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						350
					],
					"isBusy": 0
				},
				"临汾市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						330
					],
					"isBusy": 0
				},
				"阳泉市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						310
					],
					"isBusy": 0
				},
				"长治市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						310
					],
					"isBusy": 0
				},
				"晋中市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						310
					],
					"isBusy": 0
				},
				"其他地区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						400,
						240
					],
					"isBusy": 0
				}
			},
			"内蒙古": {
				"呼和浩特市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						460,
						350
					],
					"isBusy": 0
				},
				"distL": [
					"呼和浩特市",
					"其他地区",
					"海拉尔市",
					"满洲里市",
					"阿尔山市",
					"二连浩特市",
					"额济纳旗"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				},
				"其他地区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						460,
						320
					],
					"isBusy": 0
				},
				"海拉尔市": {
					"busyDate": "7-9月",
					"busyMoney": [
						1200,
						690,
						480
					],
					"money": [
						800,
						460,
						320
					],
					"isBusy": 1
				},
				"满洲里市": {
					"busyDate": "7-9月",
					"busyMoney": [
						1200,
						690,
						480
					],
					"money": [
						800,
						460,
						320
					],
					"isBusy": 1
				},
				"阿尔山市": {
					"busyDate": "7-9月",
					"busyMoney": [
						1200,
						690,
						480
					],
					"money": [
						800,
						460,
						320
					],
					"isBusy": 1
				},
				"二连浩特市": {
					"busyDate": "7-9月",
					"busyMoney": [
						1000,
						580,
						400
					],
					"money": [
						800,
						460,
						320
					],
					"isBusy": 1
				},
				"额济纳旗": {
					"busyDate": "9-10月",
					"busyMoney": [
						1200,
						690,
						480
					],
					"money": [
						800,
						460,
						320
					],
					"isBusy": 1
				}
			},
			"辽宁": {
				"沈阳市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						350
					],
					"isBusy": 0
				},
				"distL": [
					"沈阳市",
					"其他地区"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				},
				"其他地区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						330
					],
					"isBusy": 0
				}
			},
			"大连": {
				"全市": {
					"busyDate": "7-9月",
					"busyMoney": [
						960,
						590,
						420
					],
					"money": [
						800,
						490,
						350
					],
					"isBusy": 1
				},
				"distL": [
					"全市"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				}
			},
			"吉林": {
				"长春市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						450,
						350
					],
					"isBusy": 0
				},
				"distL": [
					"长春市",
					"吉林市",
					"延边州",
					"长白山管理区",
					"其他地区"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				},
				"吉林市": {
					"busyDate": "7-9月",
					"busyMoney": [
						960,
						540,
						420
					],
					"money": [
						800,
						450,
						350
					],
					"isBusy": 1
				},
				"延边州": {
					"busyDate": "7-9月",
					"busyMoney": [
						960,
						540,
						420
					],
					"money": [
						800,
						450,
						350
					],
					"isBusy": 1
				},
				"长白山管理区": {
					"busyDate": "7-9月",
					"busyMoney": [
						960,
						540,
						420
					],
					"money": [
						800,
						450,
						350
					],
					"isBusy": 1
				},
				"其他地区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						750,
						400,
						300
					],
					"isBusy": 0
				}
			},
			"黑龙江": {
				"哈尔滨市": {
					"busyDate": "7-9月",
					"busyMoney": [
						960,
						540,
						420
					],
					"money": [
						800,
						450,
						350
					],
					"isBusy": 1
				},
				"distL": [
					"哈尔滨市",
					"其他地区",
					"牡丹江市",
					"伊春市",
					"大兴安岭地区",
					"黑河市",
					"佳木斯市"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				},
				"其他地区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						750,
						450,
						300
					],
					"isBusy": 0
				},
				"牡丹江市": {
					"busyDate": "6-8月",
					"busyMoney": [
						900,
						540,
						360
					],
					"money": [
						750,
						450,
						300
					],
					"isBusy": 1
				},
				"伊春市": {
					"busyDate": "6-8月",
					"busyMoney": [
						900,
						540,
						360
					],
					"money": [
						750,
						450,
						300
					],
					"isBusy": 1
				},
				"大兴安岭地区": {
					"busyDate": "6-8月",
					"busyMoney": [
						900,
						540,
						360
					],
					"money": [
						750,
						450,
						300
					],
					"isBusy": 1
				},
				"黑河市": {
					"busyDate": "6-8月",
					"busyMoney": [
						900,
						540,
						360
					],
					"money": [
						750,
						450,
						300
					],
					"isBusy": 1
				},
				"佳木斯市": {
					"busyDate": "6-8月",
					"busyMoney": [
						900,
						540,
						360
					],
					"money": [
						750,
						450,
						300
					],
					"isBusy": 1
				}
			},
			"上海": {
				"全市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						1100,
						600,
						500
					],
					"isBusy": 0
				},
				"distL": [
					"全市"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				}
			},
			"江苏": {
				"南京市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						900,
						490,
						380
					],
					"isBusy": 0
				},
				"distL": [
					"南京市",
					"苏州市",
					"无锡市",
					"常州市",
					"镇江市",
					"其他地区"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				},
				"苏州市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						900,
						490,
						380
					],
					"isBusy": 0
				},
				"无锡市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						900,
						490,
						380
					],
					"isBusy": 0
				},
				"常州市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						900,
						490,
						380
					],
					"isBusy": 0
				},
				"镇江市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						900,
						490,
						380
					],
					"isBusy": 0
				},
				"其他地区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						900,
						490,
						360
					],
					"isBusy": 0
				}
			},
			"浙江": {
				"杭州市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						900,
						500,
						400
					],
					"isBusy": 0
				},
				"distL": [
					"杭州市",
					"其他地区"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				},
				"其他地区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						490,
						340
					],
					"isBusy": 0
				}
			},
			"宁波": {
				"全市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						450,
						350
					],
					"isBusy": 0
				},
				"distL": [
					"全市"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				}
			},
			"安徽": {
				"全省": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						460,
						350
					],
					"isBusy": 0
				},
				"distL": [
					"全省"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				}
			},
			"福建": {
				"福州市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						900,
						480,
						380
					],
					"isBusy": 0
				},
				"distL": [
					"福州市",
					"泉州市",
					"平潭综合实验区",
					"其他地区"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				},
				"泉州市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						900,
						480,
						380
					],
					"isBusy": 0
				},
				"平潭综合实验区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						900,
						480,
						380
					],
					"isBusy": 0
				},
				"其他地区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						900,
						480,
						350
					],
					"isBusy": 0
				}
			},
			"厦门": {
				"全市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						900,
						500,
						400
					],
					"isBusy": 0
				},
				"distL": [
					"全市"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				}
			},
			"江西": {
				"全省": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						470,
						350
					],
					"isBusy": 0
				},
				"distL": [
					"全省"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				}
			},
			"山东": {
				"济南市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						380
					],
					"isBusy": 0
				},
				"distL": [
					"济南市",
					"淄博市",
					"枣庄市",
					"东营市",
					"烟台市",
					"潍坊市",
					"济宁市",
					"泰安市",
					"威海市",
					"日照市",
					"其他地区"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				},
				"淄博市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						380
					],
					"isBusy": 0
				},
				"枣庄市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						380
					],
					"isBusy": 0
				},
				"东营市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						380
					],
					"isBusy": 0
				},
				"烟台市": {
					"busyDate": "7-9月",
					"busyMoney": [
						960,
						570,
						450
					],
					"money": [
						800,
						480,
						380
					],
					"isBusy": 1
				},
				"潍坊市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						380
					],
					"isBusy": 0
				},
				"济宁市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						380
					],
					"isBusy": 0
				},
				"泰安市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						380
					],
					"isBusy": 0
				},
				"威海市": {
					"busyDate": "7-9月",
					"busyMoney": [
						960,
						570,
						450
					],
					"money": [
						800,
						480,
						380
					],
					"isBusy": 1
				},
				"日照市": {
					"busyDate": "7-9月",
					"busyMoney": [
						960,
						570,
						450
					],
					"money": [
						800,
						480,
						380
					],
					"isBusy": 1
				},
				"其他地区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						460,
						360
					],
					"isBusy": 0
				}
			},
			"青岛": {
				"全市": {
					"busyDate": "7-9月",
					"busyMoney": [
						960,
						590,
						450
					],
					"money": [
						800,
						490,
						380
					],
					"isBusy": 1
				},
				"distL": [
					"全市"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				}
			},
			"河南": {
				"郑州市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						900,
						480,
						380
					],
					"isBusy": 0
				},
				"distL": [
					"郑州市",
					"其他地区",
					"洛阳市"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				},
				"其他地区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						330
					],
					"isBusy": 0
				},
				"洛阳市": {
					"busyDate": "4-5月上旬",
					"busyMoney": [
						1200,
						720,
						500
					],
					"money": [
						800,
						480,
						330
					],
					"isBusy": 1
				}
			},
			"湖北": {
				"武汉市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						350
					],
					"isBusy": 0
				},
				"distL": [
					"武汉市",
					"其他地区"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				},
				"其他地区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						320
					],
					"isBusy": 0
				}
			},
			"湖南": {
				"长沙市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						450,
						350
					],
					"isBusy": 0
				},
				"distL": [
					"长沙市",
					"其他地区"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				},
				"其他地区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						450,
						330
					],
					"isBusy": 0
				}
			},
			"广东": {
				"广州市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						900,
						550,
						450
					],
					"isBusy": 0
				},
				"distL": [
					"广州市",
					"珠海市",
					"佛山市",
					"东莞市",
					"中山市",
					"江门市",
					"其他地区"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				},
				"珠海市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						900,
						550,
						450
					],
					"isBusy": 0
				},
				"佛山市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						900,
						550,
						450
					],
					"isBusy": 0
				},
				"东莞市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						900,
						550,
						450
					],
					"isBusy": 0
				},
				"中山市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						900,
						550,
						450
					],
					"isBusy": 0
				},
				"江门市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						900,
						550,
						450
					],
					"isBusy": 0
				},
				"其他地区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						850,
						530,
						420
					],
					"isBusy": 0
				}
			},
			"深圳": {
				"全市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						900,
						550,
						450
					],
					"isBusy": 0
				},
				"distL": [
					"全市"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				}
			},
			"广西": {
				"南宁市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						470,
						350
					],
					"isBusy": 0
				},
				"distL": [
					"南宁市",
					"其他地区",
					"桂林市",
					"北海市"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				},
				"其他地区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						470,
						330
					],
					"isBusy": 0
				},
				"桂林市": {
					"busyDate": "1-2月、\n7-9月",
					"busyMoney": [
						1040,
						610,
						430
					],
					"money": [
						800,
						470,
						330
					],
					"isBusy": 1
				},
				"北海市": {
					"busyDate": "1-2月、\n7-9月",
					"busyMoney": [
						1040,
						610,
						430
					],
					"money": [
						800,
						470,
						330
					],
					"isBusy": 1
				}
			},
			"海南": {
				"海口市": {
					"busyDate": "11-2月",
					"busyMoney": [
						1040,
						650,
						450
					],
					"money": [
						800,
						500,
						350
					],
					"isBusy": 1
				},
				"distL": [
					"海口市",
					"三沙市",
					"儋州市",
					"五指山市",
					"文昌市",
					"琼海市",
					"万宁市",
					"东方市",
					"定安县",
					"屯昌县",
					"澄迈县",
					"临高县",
					"白沙县",
					"昌江县",
					"乐东县",
					"陵水县",
					"保亭县",
					"琼中县",
					"洋浦开发区",
					"三亚市"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				},
				"三沙市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						500,
						350
					],
					"isBusy": 0
				},
				"儋州市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						500,
						350
					],
					"isBusy": 0
				},
				"五指山市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						500,
						350
					],
					"isBusy": 0
				},
				"文昌市": {
					"busyDate": "11-2月",
					"busyMoney": [
						1040,
						650,
						450
					],
					"money": [
						800,
						500,
						350
					],
					"isBusy": 1
				},
				"琼海市": {
					"busyDate": "11-3月",
					"busyMoney": [
						1040,
						650,
						450
					],
					"money": [
						800,
						500,
						350
					],
					"isBusy": 1
				},
				"万宁市": {
					"busyDate": "11-3月",
					"busyMoney": [
						1040,
						650,
						450
					],
					"money": [
						800,
						500,
						350
					],
					"isBusy": 1
				},
				"东方市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						500,
						350
					],
					"isBusy": 0
				},
				"定安县": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						500,
						350
					],
					"isBusy": 0
				},
				"屯昌县": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						500,
						350
					],
					"isBusy": 0
				},
				"澄迈县": {
					"busyDate": "11-2月",
					"busyMoney": [
						1040,
						650,
						450
					],
					"money": [
						800,
						500,
						350
					],
					"isBusy": 1
				},
				"临高县": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						500,
						350
					],
					"isBusy": 0
				},
				"白沙县": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						500,
						350
					],
					"isBusy": 0
				},
				"昌江县": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						500,
						350
					],
					"isBusy": 0
				},
				"乐东县": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						500,
						350
					],
					"isBusy": 0
				},
				"陵水县": {
					"busyDate": "11-3月",
					"busyMoney": [
						1040,
						650,
						450
					],
					"money": [
						800,
						500,
						350
					],
					"isBusy": 1
				},
				"保亭县": {
					"busyDate": "11-3月",
					"busyMoney": [
						1040,
						650,
						450
					],
					"money": [
						800,
						500,
						350
					],
					"isBusy": 1
				},
				"琼中县": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						500,
						350
					],
					"isBusy": 0
				},
				"洋浦开发区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						500,
						350
					],
					"isBusy": 0
				},
				"三亚市": {
					"busyDate": "10-4月",
					"busyMoney": [
						1200,
						720,
						480
					],
					"money": [
						1000,
						600,
						400
					],
					"isBusy": 1
				}
			},
			"重庆": {
				"9个中心城区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						370
					],
					"isBusy": 0
				},
				"distL": [
					"9个中心城区",
					"北部新区",
					"其他地区"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				},
				"北部新区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						370
					],
					"isBusy": 0
				},
				"其他地区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						770,
						450,
						300
					],
					"isBusy": 0
				}
			},
			"四川": {
				"成都市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						900,
						470,
						370
					],
					"isBusy": 0
				},
				"distL": [
					"成都市",
					"阿坝州",
					"甘孜州",
					"绵阳市",
					"乐山市",
					"雅安市",
					"宜宾市",
					"凉山州",
					"德阳市",
					"遂宁市",
					"巴中市",
					"其他地区"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				},
				"阿坝州": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						430,
						330
					],
					"isBusy": 0
				},
				"甘孜州": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						430,
						330
					],
					"isBusy": 0
				},
				"绵阳市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						430,
						320
					],
					"isBusy": 0
				},
				"乐山市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						430,
						320
					],
					"isBusy": 0
				},
				"雅安市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						430,
						320
					],
					"isBusy": 0
				},
				"宜宾市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						430,
						300
					],
					"isBusy": 0
				},
				"凉山州": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						750,
						430,
						330
					],
					"isBusy": 0
				},
				"德阳市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						750,
						430,
						310
					],
					"isBusy": 0
				},
				"遂宁市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						750,
						430,
						310
					],
					"isBusy": 0
				},
				"巴中市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						750,
						430,
						310
					],
					"isBusy": 0
				},
				"其他地区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						750,
						430,
						300
					],
					"isBusy": 0
				}
			},
			"贵州": {
				"贵阳市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						470,
						370
					],
					"isBusy": 0
				},
				"distL": [
					"贵阳市",
					"其他地区"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				},
				"其他地区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						750,
						450,
						300
					],
					"isBusy": 0
				}
			},
			"云南": {
				"昆明市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						900,
						480,
						380
					],
					"isBusy": 0
				},
				"distL": [
					"昆明市",
					"大理州",
					"丽江市",
					"迪庆州",
					"西双版纳州",
					"其他地区"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				},
				"大理州": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						900,
						480,
						380
					],
					"isBusy": 0
				},
				"丽江市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						900,
						480,
						380
					],
					"isBusy": 0
				},
				"迪庆州": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						900,
						480,
						380
					],
					"isBusy": 0
				},
				"西双版纳州": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						900,
						480,
						380
					],
					"isBusy": 0
				},
				"其他地区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						900,
						480,
						330
					],
					"isBusy": 0
				}
			},
			"西藏": {
				"拉萨市": {
					"busyDate": "6-9月",
					"busyMoney": [
						1200,
						750,
						530
					],
					"money": [
						800,
						500,
						350
					],
					"isBusy": 1
				},
				"distL": [
					"拉萨市",
					"其他地区"
				],
				"allowance": {
					"foodMoney": 120,
					"vehicleMoney": 80
				},
				"其他地区": {
					"busyDate": "6-9月",
					"busyMoney": [
						800,
						500,
						350
					],
					"money": [
						500,
						400,
						300
					],
					"isBusy": 1
				}
			},
			"陕西": {
				"西安市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						460,
						350
					],
					"isBusy": 0
				},
				"distL": [
					"西安市",
					"榆林市",
					"延安市",
					"杨凌区",
					"咸阳市",
					"宝鸡市",
					"渭南市",
					"韩城市",
					"其他地区"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				},
				"榆林市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						680,
						350,
						300
					],
					"isBusy": 0
				},
				"延安市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						680,
						350,
						300
					],
					"isBusy": 0
				},
				"杨凌区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						680,
						320,
						260
					],
					"isBusy": 0
				},
				"咸阳市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						600,
						320,
						260
					],
					"isBusy": 0
				},
				"宝鸡市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						600,
						320,
						260
					],
					"isBusy": 0
				},
				"渭南市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						600,
						300,
						260
					],
					"isBusy": 0
				},
				"韩城市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						600,
						300,
						260
					],
					"isBusy": 0
				},
				"其他地区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						600,
						300,
						230
					],
					"isBusy": 0
				}
			},
			"甘肃": {
				"兰州市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						470,
						350
					],
					"isBusy": 0
				},
				"distL": [
					"兰州市",
					"其他地区"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				},
				"其他地区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						700,
						450,
						310
					],
					"isBusy": 0
				}
			},
			"青海": {
				"西宁市": {
					"busyDate": "6-9月",
					"busyMoney": [
						1200,
						750,
						530
					],
					"money": [
						800,
						500,
						350
					],
					"isBusy": 1
				},
				"distL": [
					"西宁市",
					"玉树州",
					"果洛州",
					"海北州",
					"黄南州",
					"海东市",
					"海南州",
					"海西州"
				],
				"allowance": {
					"foodMoney": 120,
					"vehicleMoney": 80
				},
				"玉树州": {
					"busyDate": "5-9月",
					"busyMoney": [
						900,
						525,
						450
					],
					"money": [
						600,
						350,
						300
					],
					"isBusy": 1
				},
				"果洛州": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						600,
						350,
						300
					],
					"isBusy": 0
				},
				"海北州": {
					"busyDate": "5-9月",
					"busyMoney": [
						900,
						525,
						375
					],
					"money": [
						600,
						350,
						250
					],
					"isBusy": 1
				},
				"黄南州": {
					"busyDate": "5-9月",
					"busyMoney": [
						900,
						525,
						375
					],
					"money": [
						600,
						350,
						250
					],
					"isBusy": 1
				},
				"海东市": {
					"busyDate": "5-9月",
					"busyMoney": [
						900,
						450,
						375
					],
					"money": [
						600,
						300,
						250
					],
					"isBusy": 1
				},
				"海南州": {
					"busyDate": "5-9月",
					"busyMoney": [
						900,
						450,
						375
					],
					"money": [
						600,
						300,
						250
					],
					"isBusy": 1
				},
				"海西州": {
					"busyDate": "5-9月",
					"busyMoney": [
						900,
						450,
						300
					],
					"money": [
						600,
						300,
						200
					],
					"isBusy": 1
				}
			},
			"宁夏": {
				"银川市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						470,
						350
					],
					"isBusy": 0
				},
				"distL": [
					"银川市",
					"其他地区"
				],
				"allowance": {
					"foodMoney": 100,
					"vehicleMoney": 80
				},
				"其他地区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						430,
						330
					],
					"isBusy": 0
				}
			},
			"新疆": {
				"乌鲁木齐市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						350
					],
					"isBusy": 0
				},
				"distL": [
					"乌鲁木齐市",
					"石河子市",
					"克拉玛依市",
					"昌吉州",
					"伊犁州",
					"阿勒泰地区",
					"博州",
					"吐鲁番市",
					"哈密地区",
					"巴州",
					"和田地区",
					"克州",
					"喀什地区",
					"阿克苏地区",
					"塔城地区"
				],
				"allowance": {
					"foodMoney": 120,
					"vehicleMoney": 80
				},
				"石河子市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						340
					],
					"isBusy": 0
				},
				"克拉玛依市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						340
					],
					"isBusy": 0
				},
				"昌吉州": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						340
					],
					"isBusy": 0
				},
				"伊犁州": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						340
					],
					"isBusy": 0
				},
				"阿勒泰地区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						340
					],
					"isBusy": 0
				},
				"博州": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						340
					],
					"isBusy": 0
				},
				"吐鲁番市": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						340
					],
					"isBusy": 0
				},
				"哈密地区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						340
					],
					"isBusy": 0
				},
				"巴州": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						340
					],
					"isBusy": 0
				},
				"和田地区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						340
					],
					"isBusy": 0
				},
				"克州": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						800,
						480,
						320
					],
					"isBusy": 0
				},
				"喀什地区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						780,
						480,
						300
					],
					"isBusy": 0
				},
				"阿克苏地区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						700,
						450,
						300
					],
					"isBusy": 0
				},
				"塔城地区": {
					"busyMoney": [
						null,
						null,
						null
					],
					"money": [
						700,
						400,
						300
					],
					"isBusy": 0
				}
			}
		}
	}
};
module.exports = {
  travelVehicle: travelVehicle,
  currencyRateMap: currencyRateMap,
  jobGrade: jobGrade,
  totalData: totalData,
}