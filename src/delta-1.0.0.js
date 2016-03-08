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
		};
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
		};
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

		self.toggle = function(miliseconds){
			$('#' + domId).toggle(miliseconds);	
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

		self.toggle = function(miliseconds){
			$('#' + domId).toggle(miliseconds);	
		};

		self.focus = function(){
			$('#' + domId).focus();
		};
	};

	delta.CheckBox = function(domId){
		var self = this;

		self.isChecked = function(){
			return $('#' + domId).prop('checked');
		};

		self.show = function(miliseconds){
			$('#' + domId).show(miliseconds);
		};

		self.hide = function(miliseconds){
			$('#' + domId).hide(miliseconds);
		};

		self.toggle = function(miliseconds){
			$('#' + domId).toggle(miliseconds);	
		};

		self.check = function(){
			$('#' + domId).prop('checked', true);	
		};

		self.unCheck = function(){
			$('#' + domId).prop('checked', false);	
		};

		self.focus = function(){
			$('#' + domId).focus();
		};

		self.onChange = function(callback){
			$('#' + domId).change(function(){
				callback();
			});
		};
	};

	delta.RadioButton = function(domId){
		var self = this;

		self.hide = function(miliseconds){
			$('#' + domId).hide(miliseconds);
		};

		self.show = function(miliseconds){
			$('#' + domId).show(miliseconds);
		};

		self.check = function(){
			$('#' + domId).prop('checked', true);	
		};

		self.unCheck = function(){
			$('#' + domId).prop('checked', false);	
		};

		self.focus = function(){
			$('#' + domId).focus();
		};

		self.toggle = function(miliseconds){
			$('#' + domId).toggle(miliseconds);	
		};

		self.isChecked = function(){
			return $('#' + domId).prop('checked');
		};

		self.onChange = function(callback){
			$('#' + domId).change(function(){
				callback();
			});
		};
	};

	delta.DropDownList = function(domId){
		var self = this;

		self.hide = function(miliseconds){
			$('#' + domId).hide(miliseconds);
		};

		self.show = function(miliseconds){
			$('#' + domId).show(miliseconds);
		};

		self.toggle = function(miliseconds){
			$('#' + domId).toggle(miliseconds);	
		};

		self.focus = function(){
			$('#' + domId).focus();
		};

		self.onChange = function(callback){
			$('#' + domId).change(function(){
				callback();
			});
		};

		self.setSelectedIndex = function(index){
			$('#' + domId).prop('selectedIndex', index);
		};

		self.getSelectedIndex = function(){
			return $('#' + domId).prop('selectedIndex');
		};

		self.setSelectedValue = function(value){
			$('#' + domId).val(value);
		};

		self.getSelectedValue = function(){
			return $('#' + domId).val();
		};

		self.setSelectedText = function(text){
			$('#' + domId + ' option:contains(' + text + ')').attr('selected', true);
		};

		self.getSelectedText = function(){
			return $('#' + domId + ' option:selected').text();
		};

	};

	delta.Client = function(){
		var self = this;

		self.get = function(url, successCallback, errorCallback)
		{
			$.ajax({
					url: url, 
					type: "GET",
					success: function(response) {
		            	successCallback(JSON.parse(response));
		        	},
					error: function (response) {
		            	errorCallback(JSON.parse(response));
		        	}
				});
		};

		self.post = function(data, url, successCallback, errorCallback)
		{
			$.ajax({
					url: url,
					data: JSON.stringify(data),
					type: "POST",
					contentType: "application/json",
					success: function(response) {
		            	successCallback(JSON.parse(response));
		        	},
					error: function (response) {
		            	errorCallback(JSON.parse(response));
		        	}
				});
		};
	};
}(window.delta = window.delta || {}))