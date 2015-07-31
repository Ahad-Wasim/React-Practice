var React = require('react');
var ThumbnailList = require('./Thumbnail_List');

var options = {
				thumbNailData:[{ 
					title:'Inbox',
					number:25,
					imageUrl: 'http://facebook.github.io/react/img/logo.svg',
					header: "React JS",
					paragraph: 'Ahad Wasim React JS Project'
				},{
					title:'Inbox',
					number:32,
					imageUrl: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400',
					header: "Gulp",
					paragraph: 'Ahad Wasim Gulp Project'
				}
		]};





		var element = React.createElement(ThumbnailList,options)

		React.render(element,document.querySelector('.row'));