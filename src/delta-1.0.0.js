(function(delta){

	delta.Label = function(domId){
		var self = this;

		self.setText = function(text){
			$('#' + domId).text(text);
		};

		self.getText = function(){
			return $('#' + domId).text();
		};

		self.hide = function(miliseconds){
			$('#' + domId).hide(miliseconds);
		};

		self.show = function(miliseconds){
			$('#' + domId).show(miliseconds);
		};

		self.toggle = function(miliseconds){
			$('#' + domId).toggle(miliseconds);	
		}
	};

	delta.Panel = function(domId){
		var self = this;

		self.hide = function(miliseconds){
			$('#' + domId).hide(miliseconds);
		};

		self.show = function(miliseconds){
			$('#' + domId).show(miliseconds);
		};

		self.toggle = function(miliseconds){
			$('#' + domId).toggle(miliseconds);	
		}
	};

	delta.TextBox = function(domId){
		var self = this;

		self.getText = function(){
			return $('#' + domId).val();
		};

		self.setText = function(text){
			$('#' + domId).val(text);
		};

		self.hide = function(miliseconds){
			$('#' + domId).hide(miliseconds);
		};

		self.show = function(miliseconds){
			$('#' + domId).show(miliseconds);
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

		self.hide = function(miliseconds){
			$('#' + domId).hide(miliseconds);
		};

		self.show = function(miliseconds){
			$('#' + domId).show(miliseconds);
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
					data: JSON.stringify(data),
					type: "POST",
					contentType: "application/json",
					success: successCallback,
					error: errorCallback})
		};
	};

}(window.delta = window.delta || {}))