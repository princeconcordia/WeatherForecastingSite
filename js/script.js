         $(document).ready(function() {
         	var base_url = "https://api.openweathermap.org/data/2.5/weather?q=";
         	var unit = "metric"
         	var params = "&lang=en&units="+ unit +"&appid=";
         	var key = "d502e99e83688021b3515b49b4190e82";
         	var d = new Date();
         	
         	var city = "Tokyo";
         	var url_city = base_url + city + params + key;

			$('#btn_Tokyo').click(function(){
             $("#weather_image").attr("src","img/sun_cloud.png");
         		getWeather(base_url + 'Tokyo' + params + key);
			});

         $('#btn_Yokohama').click(function(){
            $("#weather_image").attr("src","img/storm.png");
               getWeather(base_url + 'Yokohama' + params + key);
         });

         $('#btn_Kyoto').click(function(){
            $("#weather_image").attr("src","img/cloudy.png");
               getWeather(base_url + 'Kyoto' + params + key);
         });

         $('#btn_Osaka').click(function(){
            $("#weather_image").attr("src","img/cloudy.png");
               getWeather(base_url + 'Osaka' + params + key);
         });

         $('#btn_Sapporo').click(function(){
            $("#weather_image").attr("src","img/sun.png");
               getWeather(base_url + 'Sapporo' + params + key);
         });

         $('#btn_Nagoya').click(function(){
            $("#weather_image").attr("src","img/sun_cloud.png");
               getWeather(base_url + 'Nagoya' + params + key);
         });

         var today = new Date();
         var date = 'Year '+today.getFullYear()+' Month '+(today.getMonth()+1)+' Day '+today.getDate();
         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
         var dateTime = date+' '+time;



         	function getWeather(url_city){
	         	$.ajax({
				    url: url_city,
				    type: "GET",
				    success: function (response) {
				        // handle the response
				        console.log(response);

				        $('#w_description').text(response.weather[0].description);
				        $('#datetime').text(dateTime);
				        $('#wind').text(response.wind.speed);
				        $('#humidity').text(response.main.humidity);
				        $('#temp').text(response.main.temp+" Celcius");
                    $('#city').text(response.name);
				        
				    },
				    error: function (xhr, status) {
				        // handle errors
				    }
				});
			}

         $.ajax({
                url: url_city,
                type: "GET",
                success: function (response) {
                    // handle the response
                    console.log(response);

                    $('#w_description').text(response.weather[0].description);
                    $('#datetime').text(dateTime);
                    $('#wind').text(response.wind.speed);
                    $('#humidity').text(response.main.humidity);
                    $('#temp').text(response.main.temp+" Celcius");
                    $('#city').text(response.name);
                    
                },
                error: function (xhr, status) {
                    // handle errors
                }
            });

         });