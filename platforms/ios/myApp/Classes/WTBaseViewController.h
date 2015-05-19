//
//  WTBaseViewController.h
//  myApp
//
//  Created by wxq on 5/19/15.
//
//
#import <Cordova/CDVViewController.h>
#import <Cordova/CDVCommandDelegateImpl.h>
#import <Cordova/CDVCommandQueue.h>


@interface WTBaseViewController : CDVViewController

@end

@interface MainCommandDelegate : CDVCommandDelegateImpl
@end

@interface MainCommandQueue : CDVCommandQueue
@end
