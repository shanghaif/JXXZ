require.config({
	baseUrl: 'js',
	paths: {
		'mui': 'mui.min',
		'app': 'app',
		'imm': 'immersed',
		'template': 'template'
	}
});

require(['mui', 'template'], function(mui, template) {
	mui.init();
	var _page_id = null;
	mui.plusReady(function() {

		var _self = plus.webview.currentWebview();

		//通知父级可以更新菜单了.
		var _fself = _self.opener();
		mui.fire(_fself, 'updateMenu', {
			page: 1
		});

		//更新菜单.
		window.addEventListener('updateMenu', function(e) {
			var data = e.detail.data; //获取菜单权限数据
			var self = {
				title: data.Name,
				pages: []
			}
			for(var i = 0; i < data.Children.length; i++) {
				var temp = data.Children[i];
				var obj = {
					title: temp.Name,
					url: temp.Path,
					extras: {}
				}
				self.pages.push(obj);
			}
			updatePage(self); //更新页面

		});

		function updatePage(self) {
			document.querySelector("header .mui-title").innerText = self.title;
			_page_id = self.pages[0].url;
			if(self.pages.length > 1) {
				var _dataList = {
					'list': self.pages
				};
				var _html = template('list-tmp', _dataList);
				var _pages = [];
				for(var i = 0; i < self.pages.length; i++) {
					var page = self.pages[i];
					//console.log(JSON.stringify(page));
					var tempPage = mui.preload({
						url: page.url,
						id: page.url,
						styles: {
							top: (86) + 'px',
							bottom: '0px'
						},
						extras: page.extras || {}
					});
					_pages.push(tempPage);
					_self.append(tempPage);
					if(i > 0) {
						plus.webview.hide(tempPage);
					} else {
						plus.webview.show(tempPage);
					}
				}

				//alert(temp);
				document.querySelector(".mui-content").innerHTML = _html;

				mui('#sliderSegmentedControl a').each(function(index, item) {
					var that = this;
					that.addEventListener('tap', function() {
						TabTap(index, item);
					}, false);
				});

				function TabTap(index, item) {
					for (var i = 0; i < _pages.length; i++) {
						if(i != index){
							plus.webview.hide(_pages[i]);
						}else{
							plus.webview.show(_pages[i]);
						}
						
					}
					//_page_id = _pages[index].id;
					//_pages[index].show();
					mui.fire(_pages[index], 'show');
				}
			} else { //单个页面
				var page = self.pages[0];
				var tempPage = mui.preload({
					url: page.url,
					id: page.url,
					styles: {
						top: '45px',
						bottom: '0px'
					},
					extras: page.extras || {}
				});
				_self.append(tempPage);

				//				var sub = mui.openWindow({
				//					url: subpage.url,
				//					id: subpage.url,
				//					styles: {
				//						top: (86) + 'px',
				//						bottom: '0px'
				//					},
				//					extras: subpage.extras || {},
				//					waiting: {
				//						autoShow: false
				//					}
				//				});

				plus.webview.show(self);

			}
		}
		
		
		window.addEventListener('show',function(){
			var childrens = _self.children();
			for (var i = 0; i < childrens.length; i++) {
				var child = childrens[i];
				mui.fire(child,'show');
			}
		});

	});
});