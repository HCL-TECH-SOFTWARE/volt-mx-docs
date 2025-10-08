                         


Importing Custom Widgets for iOS
--------------------------------

You can create, and integrate third party custom widgets for the iOS platform. To help you do so, Volt MX Iris defines the following:

*   [A custom widget protocol](#custom-widget-protocol-for-ios). Volt MX IrisPlatform defines a custom widget protocol called CWIWidget. The widget protocol consists of mandatory methods that help you initialize, render, define properties, or update properties, for your widget. As part of custom widget implementation, a class must confirm to this protocol, so that the platform can communicate with the custom widget for initialization.
*   [A Volt MX Environment class](#volt-mx-environment-protocol). The Volt MX environment class consists of a property model, which enables you to fetch data from the custom widget protocol and to send data between the application and custom widget protocol.

To successfully define an iOS custom widget into Volt MX Iris, you must do the following:

1.  Create a custom widget class implementation (mandatory). This implementation communicates with Volt MX Iris‘s custom widget protocol _CWIWidget_.
2.  [Create a protocol for the Volt MX Custom Event Delegate (optional)](#event-delegate-protocol). This protocol consists of events to be invoked for the custom widget.

#### Custom Widget Protocol for iOS

The following comprise the widget protocol:

*   **(id) initWithEventDelegate: (id) eventDelegate withVoltMXEnvironment:(id) env**: Initializes any object of the custom widget set. Initializing the Volt MX Environment and Custom Widget instance.
*   **(CGSize)getPreferredSizeForGivenSize:(CGSize)givenSize**: Fetch the preferred size(Height and width) for the widget. The CGSize parameter is the parent width and height of the widget.
*   **(void)setWidgetViewFrame:(CGRect)frame**: Set the position of the custom widget with respect to the parent widget. Provides x, y coordinates, height, and width for the custom widget with reference to the parent widget.
*   **(UIView\*) getWidgetView**: Returns the view defined for the custom widget. This view will be defined in a custom widget class.
*   **(void) modelUpdatedForProperty:(NSString\*) propertyName withOldValue:(id) oValue newValue:(id) nValue;**: Invoked when there are any updates in the end user defined properties.
*   **(void)willBeginLayout** Invoked before the widget is laid out.
*   **(void)didEndLayout** :Invoked after the widget is laid out.
*   **(void)didCreateWidget** Invoked on creation of a widget.
*   **(void)willDestroyWidget** : Invoked when the custom widget is destroyed.

The custom widget protocol provided by Volt MX Iris is as follows:

```
//
//  CWIWidget.h
//  VM
//
//  Created by Amba Babjee Dhanisetti on 19/08/12.
//  Copyright (c) 2012 Volt MX Solutions. All rights reserved.
//

#
import < Foundation / Foundation.h >

@protocol CWIWidget < NSObject >

@required
/***
 Internally, will be used to initialize
 ****/
- (id) initWithEventDelegate: (id) eventDelegate withVoltMXEnvironment: (id) env;

// View related methods
- (UIView * ) getWidgetView;

- (CGSize) getPreferredSizeForGivenSize: (CGSize) givenSize; - (void) setWidgetViewFrame: (CGRect) frame;


@
optional

// Model updates
- (void) modelUpdatedForProperty: (NSString * ) propertyName withOldValue: (id) oValue newValue: (id) nValue;

// Layout related methods
- (void) willBeginLayout; - (void) didEndLayout;

// Widget lifecycle events
- (void) didCreateWidget; - (void) willDestroyWidget;

@
end


// VoltMXEnvironment
/***
1. Forcing the Layout
    -(void) forceLayout;
 
2. Model exposing - Key Value compliant (valueForKey:,setValue:forKey:) - to access properties in model
    VoltMXEnvironmentInstace.model - access the mapped properties
 
3. model class : save/get private data methods
    - (void) setNonModelStateValue:(id)value forKey:(NSString *)key;
    - (id) getNonModelStateValueForKey:(NSString *)key;

***/						

```

#### Volt MX Environment Protocol

Volt MX  provides a Volt MX Environment protocol. The model property in the Volt MX Environment Protocol fetches the data from the custom widget protocol and to send across data between the application and custom widget protocol.

```
@interface VoltMXCWIEnvironment: NSObject

@property(nonatomic, retain) id model;

- (void) forceLayout;

@end

```

#### Sample Custom Widget Implementation

The following is a sample implementation for the custom widget, Range Slider. This consists of all the basic data about the Range Slider Widget.

```
//
//  RangeSlider.m
//  RangeSlider
//
//  Copyright 2011 __MyCompanyName__. All rights reserved.
//

#import "RangeSlider.h"

@interface RangeSlider(PrivateMethods) - (float) xForValue: (float) value; - (float) valueForX: (float) x; - (void) updateTrackHighlight;@
end

@implementation RangeSlider

@synthesize minimumValue, maximumValue, minimumRange, selectedMinimumValue, selectedMaximumValue;

@synthesize voltmxEnviroment, rangeSliderDelegate;@
synthesize minThumbImageName, maxThumbImageName, trackBackgroundImageName, trackHighlightImageName;



- (id) init {
    self = [super init];
    if (self) {
        _minThumbOn = false;
        _maxThumbOn = false;
        _padding = 20;

        _trackBackground = [
            [
                [UIImageView alloc] initWithImage: [UIImage imageNamed: @"bar-background.png"]
            ] autorelease
        ];
        [self addSubview: _trackBackground];

        _track = [
            [
                [UIImageView alloc] initWithImage: [UIImage imageNamed: @"bar-highlight.png"]
            ] autorelease
        ];
        [self addSubview: _track];

        _minThumb = [
            [
                [UIImageView alloc] initWithImage: [UIImage imageNamed: @"handle.png"] highlightedImage: [UIImage imageNamed: @"handle-hover.png"]
            ] autorelease
        ];
        _minThumb.contentMode = UIViewContentModeCenter;
        [self addSubview: _minThumb];

        _maxThumb = [
            [
                [UIImageView alloc] initWithImage: [UIImage imageNamed: @"handle.png"] highlightedImage: [UIImage imageNamed: @"handle-hover.png"]
            ] autorelease
        ];
        _maxThumb.contentMode = UIViewContentModeCenter;
        [self addSubview: _maxThumb];
    }

    return self;
}

- (void) updateWithFrame: (CGRect) frame {

    self.frame = frame;
    _trackBackground.frame = CGRectMake(0, 0, frame.size.width, _trackBackground.image.size.height);
    _track.frame = CGRectMake(0, 0, frame.size.width, _track.frame.size.height);
    _trackBackground.center = self.center;
    _track.center = self.center;
    _minThumb.frame = CGRectMake(0, 0, self.frame.size.height, self.frame.size.height);
    _maxThumb.frame = CGRectMake(0, 0, self.frame.size.height, self.frame.size.height);

}


- (void) layoutSubviews {
    // Set the initial state
    _minThumb.center = CGPointMake([self xForValue: selectedMinimumValue], self.center.y);

    _maxThumb.center = CGPointMake([self xForValue: selectedMaximumValue], self.center.y);

    [self updateTrackHighlight];

}

- (float) xForValue: (float) value {
    return ((self.frame.size.width - (_padding * 2)) * ((value - minimumValue) / (maximumValue - minimumValue)) + _padding);
}

- (float) valueForX: (float) x {

    return minimumValue + (x - _padding) / (self.frame.size.width - (_padding * 2)) * (maximumValue - minimumValue);
}

- (BOOL) continueTrackingWithTouch: (UITouch * ) touch withEvent: (UIEvent * ) event {
    if (!_minThumbOn & amp; & amp; !_maxThumbOn) {
        return YES;
    }

    CGPoint touchPoint = [touch locationInView: self];
    if (_minThumbOn) {
        _minThumb.center = CGPointMake(MAX([self xForValue: minimumValue], MIN(touchPoint.x - distanceFromCenter, [self xForValue: selectedMaximumValue - minimumRange])), _minThumb.center.y);
        selectedMinimumValue = [self valueForX: _minThumb.center.x];

    }
    if (_maxThumbOn) {
        _maxThumb.center = CGPointMake(MIN([self xForValue: maximumValue], MAX(touchPoint.x - distanceFromCenter, [self xForValue: selectedMinimumValue + minimumRange])), _maxThumb.center.y);
        selectedMaximumValue = [self valueForX: _maxThumb.center.x];
    }
    [self updateTrackHighlight];
    [self setNeedsLayout];

    [self sendActionsForControlEvents: UIControlEventValueChanged];
    return YES;
}

- (BOOL) beginTrackingWithTouch: (UITouch * ) touch withEvent: (UIEvent * ) event {
    CGPoint touchPoint = [touch locationInView: self];

    if (CGRectContainsPoint(_minThumb.frame, touchPoint)) {
        _minThumbOn = true;
        distanceFromCenter = touchPoint.x - _minThumb.center.x;
    } else if (CGRectContainsPoint(_maxThumb.frame, touchPoint)) {
        _maxThumbOn = true;
        distanceFromCenter = touchPoint.x - _maxThumb.center.x;

    }
    return YES;
}

- (void) endTrackingWithTouch: (UITouch * ) touch withEvent: (UIEvent * ) event {
    _minThumbOn = false;
    _maxThumbOn = false;
}

- (void) updateTrackHighlight {
    _track.frame = CGRectMake(
        _minThumb.center.x,
        _track.center.y - (_track.frame.size.height / 2),
        _maxThumb.center.x - _minThumb.center.x,
        _track.frame.size.height
    );

    [self.rangeSliderDelegate updatedMinValue: self.selectedMinimumValue andMaxValue: self.selectedMaximumValue];
}

/*
 // Only override drawRect: if you perform custom drawing.
 // An empty implementation adversely affects performance during animation.
 - (void)drawRect:(CGRect)rect
 {
 // Drawing code
 }
 */

#
pragma mark Custom Widget Protocols Methods


- (id) initWithEventDelegate: (id) eventDelegate withVoltMXEnvironment: (id) env {
    self = [self init];

    self.rangeSliderDelegate = eventDelegate;
    self.voltmxEnviroment = env;

    [self setDefaultValuesFromModel];
    return self;
}

// View related methods
- (UIView * ) getWidgetView {
    return self;
}

- (CGSize) getPreferredSizeForGivenSize: (CGSize) givenSize {
    CGSize preferredSize = givenSize;
    preferredSize.height = 44;
    return preferredSize;
}

- (void) setWidgetViewFrame: (CGRect) frame {
    [self updateWithFrame: frame];
}


- (void) modelUpdatedForProperty: (NSString * ) propertyName withOldValue: (id) oValue newValue: (id) nValue {

    if ([propertyName isEqualToString: @"maximumValue"]) {

        self.maximumValue = [nValue floatValue];

    } else if ([propertyName isEqualToString: @"minimumValue"]) {

        self.minimumValue = [nValue floatValue];

    } else if ([propertyName isEqualToString: @"minThumbImageName"]) {

        self.minThumbImageName = nValue;

        [_minThumb setImage: [UIImage imageNamed: self.minThumbImageName];

    } else if ([propertyName isEqualToString: @"maxThumbImageName"]) {

        self.maxThumbImageName = nValue;

        [_maxThumb setImage: [UIImage imageNamed: self.maxThumbImageName];

    } else if ([propertyName isEqualToString: @"trackBackgroundImageName"]) {

        self.trackBackgroundImageName = nValue;

        [_trackBackground setImage: [UIImage imageNamed: self.trackBackgroundImageName];

    } else if ([propertyName isEqualToString: @"trackHighlightImageName"]) {

        self.trackHighlightImageName = nValue;
        [_track setImage: [UIImage imageNamed: self.trackHighlightImageName];
    }
}



// Layout related methods
- (void) willBeginLayout {
    NSLog(@"in %s", __PRETTY_FUNCTION__);
}

- (void) didEndLayout {
    NSLog(@"in %s", __PRETTY_FUNCTION__);
}

// Widget lifecycle events
- (void) didCreateWidget {
    NSLog(@"in %s", __PRETTY_FUNCTION__);
}

- (void) willDestroyWidget {

    NSLog(@"in %s", __PRETTY_FUNCTION__);
}


- (void) setDefaultValuesFromModel {

    self.minimumRange = [
        [self.voltmxEnviroment.model valueForKey: @"minimumRange"] floatValue
    ];

    self.maximumValue = [
        [self.voltmxEnviroment.model valueForKey: @"maximumValue"] floatValue
    ];

    self.minimumValue = [
        [self.voltmxEnviroment.model valueForKey: @"minimumValue"] floatValue
    ];

    self.selectedMaximumValue = [
        [self.voltmxEnviroment.model valueForKey: @"selectedMaximumValue"] floatValue
    ];

    self.selectedMinimumValue = [
        [self.voltmxEnviroment.model valueForKey: @"selectedMinimumValue"] floatValue
    ];

    self.minThumbImageName = [self.voltmxEnviroment.model valueForKey: @"minThumbImageName"];

    self.maxThumbImageName = [self.voltmxEnviroment.model valueForKey: @"maxThumbImageName"];

    self.trackBackgroundImageName = [self.voltmxEnviroment.model valueForKey: @"trackBackgroundImageName"];

    self.trackHighlightImageName = [self.voltmxEnviroment.model valueForKey: @"trackHighlightImageName"];
}

- (void) dealloc {

    self.minThumbImageName = nil;
    self.maxThumbImageName = nil;
    self.trackBackgroundImageName = nil;
    self.trackHighlightImageName = nil;

    [super dealloc];
}  
@end
```

#### Event Delegate Protocol

The Event delegate protocol consists of information about all the events to be invoked for your custom widget. The methods in this protocol are useful for raising events for the widget in the Volt MX IrisPlatform. This ensures that a mapping exists between the methods in this _CustomWidgetEventDelegate_ protocol and the events defined in Volt MX Iris. Volt MX Iris automatically generates a class that confirms to the _CustomWidgetEventDelegate_ protocol, passing an instance of it in the initialization method. Thus, when an event needs to be raised, the methods in protocol _CustomWidgetEventDelegate_ can be invoked on the saved instance object.

#### Sample Event Delegate Implementation

The following code snippet provides a sample Event Delegate implementation for a Range Slider.

```
//
//  RangeSliderEventDelegate.h
//  CustomRangeSlider
//  Copyright (c) 2013 Volt MX. All rights reserved.
//

#import <Foundation/Foundation.h>

@protocol RangeSliderEventDelegate <NSObject>

-(void)updatedMinValue:(CGFloat)minValue andMaxValue:(CGFloat)maxValue;

@end
```
