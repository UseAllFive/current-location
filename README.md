# Documentation

## Example usage

```javascript
window.currentLocation.init({
	"success": function(position) {
		//-- Do something with position object
	}
});
```

## Options

| Option        	 | Type          | Arguments  | Default                 |
|--------------------|---------------|------------|-------------------------|
| success       	 | function      | position   | log position in console |
| error         	 | function      | err 	      | log error in console    |
| enableHighAccuracy | boolean       |      	  |	false                   |
| timeout       	 | number        |            | Infinity                |
| maximumAge      	 | number        |  	      | 0                       |
