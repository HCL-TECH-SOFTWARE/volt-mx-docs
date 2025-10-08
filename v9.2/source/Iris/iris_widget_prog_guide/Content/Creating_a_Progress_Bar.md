                              


Creating a Progress Bar
=======================

Creating a progress bar using just color
----------------------------------------

Create a form in Volt MX Iris, and add a slider to it. Choose a completely transparent bitmap for the sliderImage property. Next set the enable property of the slider to false. Set the Left background type to Single Color, and the Left Background color to blue. Do the same for the Right background, but set it to gray.

For the sake of demonstration add a button to the form, and set the onClick event of the button to call the following code:

```

count = 0;

function frmHomeBtn1CallBack(eventObj) {
	voltmx.timer.schedule("mytimer12", timerFunc, 1, true);
}

function timerFunc(){
	count += 10;
	if (count == 100) {
		// We have two sliders in the form.
		frmHome.slider.selectedValue = count;
		frmHome.slider.setEnabled(false);
	} else {
		//invalidate the timer
	}
}
```

Creating a progress bar using an image
--------------------------------------

Create a slider in Iris, and choose a completely transparent bitmap for the thumbImage property. Next set the enable property of the slider to false. Create an image and set the Left image to it.

Create a second image and set the right hand image to it.

For the sake of demonstration add a button to the form, and set the onClick event of the button to call the following code:

```

count = 0;

function frmHomeBtn1CallBack(eventObj) {
	voltmx.timer.schedule("mytimer12", timerFunc, 1, true);
}

function timerFunc(){
	count += 10;
	if (count == 100) 
		frmHome.slider.selectedValue = count;
		frmHome.slider.setEnabled(false);
	} else {
		//invalidate the timer
	}
}
```

