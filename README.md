#Bootstrap device detector

***

In some cases we need to know currect device to perform some task. Say load 100 items on large device(lg) or load 20 items on mobile device(xs). This plugin will tell you what device currently it is. It also detect browser resize event to trigger device change event only if you provide a call back function!


## Installation

#### HTML HEAD:
```
<script src="js/deviceNow.min.js"></script>
```

#### JavaScript: (instant detection)
```
<script type="text/javascript">
        $(function () {
        	//returns "xs", "sm", "md" or "lg"
           var currentDevice=jQuery().deviceNow();

           if("lg"==currentDevice){
           		//do something for large device
           }else if("xs"==currentDevice){
           		//do something for mobile device
           }
        });
</script>
```

#### JavaScript: (with callback when device changes)
```
<script type="text/javascript">
        $(function () {
        	
        	jQuery().deviceNow(function(device){

	              alert("Current device changed to:"+device);

	              if("lg"==device){
		           		//do something for large device
		          }else if("xs"==device){
		           		//do something for mobile device
		          }
	        });

        });
</script>
```

<p>As simple as it is!</p>
