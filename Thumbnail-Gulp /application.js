var Badge = React.createClass({displayName: "Badge",
			render:function(){
				return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
					 		this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
					 	)
			}
		});
	var Thumbnail = React.createClass({displayName: "Thumbnail",
			render:function(){
				return React.createElement("div", {className: "col-md-4"}, 
					     React.createElement("div", {className: "thumbnail"}, 
      				        React.createElement("img", {src: this.props.imageUrl}), 
      					    React.createElement("div", {className: "caption"}, 
        				      React.createElement("h3", null, this.props.header), 
        					    React.createElement("p", null, " ", this.props.paragraph), 
        					    React.createElement("p", null, 
        						    React.createElement(Badge, {title: this.props.title, number: this.props.number})
        					    )
      				        )
   					     )
   					   )
			}
		});
var ThumbnailList = React.createClass({displayName: "ThumbnailList",
			render:function(){
				var list = this.props.thumbNailData.map(function(eachObject){
					return React.createElement(Thumbnail, React.__spread({},  eachObject))
				})

				return React.createElement("div", null, 
							list
					  );

			}
		});
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