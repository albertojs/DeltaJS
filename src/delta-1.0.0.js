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

		self.clear = function(){
			$('#' + domId).val('');
		};

		self.focus = function(){
			$('#' + domId).focus();
		};

		self.onKeyPress = function(callback){
			$('#' + domId).keypress(function(){
				callback();
			});
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

		self.focus = function(){
			$('#' + domId).focus();
		};
	};

	delta.Client = function(){
		var self = this;

		self.get = function(url, successCallback, errorCallback)
		{
			$.ajax({
					url: url, 
					type: "GET",
					success: successCallback,
					error: errorCallback})
		};

		self.post = function(data, url, successCallback, errorCallback)
		{
			$.ajax({
					url: url,
					data: data, 
					type: "POST",
					success: successCallback,
					error: errorCallback})
		};
	};

}(window.delta = window.delta || {}))