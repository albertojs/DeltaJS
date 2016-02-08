(function(delta){

	delta.TextBox = function(domId){
		var self = this;

		self.getText = function(){
			return $('#' + domId).val();
		};

		self.setText = function(text){
			$('#' + domId).val(text);
		};

		self.hide = function(){
			$('#' + domId).hide();
		};

		self.show = function(){
			$('#' + domId).show();
		};
	};

	delta.Button = function(domId){
		var self = this;

		self.onClick = function(callback){
			$('#' + domId).click(function(){
				callback();
			});
		};

		self.setText = function(text){
			$('#' + domId).val(text);
		};

		self.hide = function(){
			$('#' + domId).hide();
		};

		self.show = function(){
			$('#' + domId).show();
		};
	};

}(window.delta = window.delta || {}))