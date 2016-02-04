(function(delta){

	delta.TextBox = function(domId){
		var self = this;

		self.getText = function(){
			return $('#' + domId).val();
		};

		self.setText = function(text){
			$('#' + domId).val(text);
		};
	};

	delta.Button = function(domId){
		var self = this;

		self.onClick = function(callback){
			$('#' + domId).click(function(){
				callback();
			});
		};
	};

}(window.delta = window.delta || {}))