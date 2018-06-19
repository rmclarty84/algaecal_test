// Phone Number and Open Hours
$.getJSON('https://www.algaecal.com/wp-json/acf/v3/options/options', function(data) {
  var phone = data.acf.default_phone_number;
  var currentdate = new Date();
  var day = currentdate .getDay();
  var time = currentdate .getHours() + '' +currentdate .getMinutes();

	
var officeDay = data.acf.office_hours[day];
var startTime = data.acf.office_hours[day]['starting_time'];
var closeTime = data.acf.office_hours[day]['closing_time'];	
	
console.log(day,time, officeDay, startTime, closeTime, phone);


if (time >= startTime && time <= closeTime) {
	console.log("We're Open")
	$('.specialist').show();
}
	else {
		console.log("We're Closed")
		$('.specialist').hide();
	}
	$(".def-number").attr("href", "tel:" + phone);
  });				 
				 
$.getJSON('https://www.algaecal.com/wp-json/acf/v3/options/options', function(data) {
	var title = data.acf["7yr_title"];
	var copy = data.acf["7yr_full_copy"];
	var seal = data.acf.seven_year_guarantee_seal;
	$(".modal-title").html(title);
	$(".modal-body").html(copy);
	$(".modal-body").append('<p class="text-center"><img src="' + seal.url + '" alt="7 Year Guarantee" height="" width=""></p>');

});