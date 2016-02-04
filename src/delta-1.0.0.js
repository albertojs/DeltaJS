(function(delta){

	delta.TextBox = function(domId){
		var self = this;

		self.getText = function(){
			return $('#' + domId).val();
		};

		self.setText = function(text){
			return $('#' + domId).val(text);
		};
	};

}(window.delta = window.delta || {}))