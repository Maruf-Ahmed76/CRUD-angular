const ngApp = angular.module('crudApp',[]);
ngApp.controller('crudCtrl', function crudObj() {
	this.users = [
		{ name:'shanto', email:'ishanto@ninjas.com' },
		{ name: 'maruf', email:'maruf@ninjas.com' }
		//server side handle by data base
	];
	this.addUser = {};
	this.checkedUser = {};
	this.returnUsers = [];
	this.curdAlert = '';
	this.alertType = '';
	this.editPer = true;
	this.addNewUser = function () { 
		if( this.addUser.name != undefined && this.addUser.email != undefined ){

			this.users.push( this.addUser );
			this.alert('User added Succesfully!', 'alert-success');

		}
		this.addUser = { };
		
	 }
	 this.editUser = function ( user , a) { 
		
		this.checkedUser = user;
		this.curdAlert = '';
		for(let returnUser in user){
			this.returnUsers.push( user[returnUser] );
		}

	  }
	  this.setEdit = function () { 
		//serverdSide phph,node.js/django/ajax
		this.alert('User edited Succesfully!', 'alert-info');
	   }
	   this.deleteUser = function () { 
			this.users.splice(this.users.indexOf(this.checkedUser), 1);
			this.alert('User Deleted Succesfully!', 'alert-danger');
		}
		this.editCancel = function ( ) { 
			this.checkedUser.name = this.returnUsers[0];
			this.checkedUser.email = this.returnUsers[1];
		 }
		this.alert =  function ( message,type ){
			this.curdAlert = message;
			this.alertType = type;
		 }

 });

