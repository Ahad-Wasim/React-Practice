var React = require('react');
var Thumbnail = require('./Thumbnail');

module.exports = React.createClass({
			render:function(){
				var list = this.props.thumbNailData.map(function(eachObject){
					return <Thumbnail {...eachObject} />
				})

				return <div>
							{list}
					  </div>;

			}
		});