
#import "WTNavigation.h"
#import "WTBaseViewController.h"
@implementation WTNavigation




-(void) forward:(CDVInvokedUrlCommand*)command{
    
    NSObject *str = [command.arguments objectAtIndex:0];
    //NSDictionary* options = [command.arguments objectAtIndex:0];
    WTBaseViewController *vc =[[WTBaseViewController alloc] init];
    vc.startPage =(NSString *)str;
    vc.title=@"chat detail";
    [[self getNavigationController] pushViewController:vc animated:YES];
    
}


-(UINavigationController *) getNavigationController{
    
    return [self.viewController navigationController];
}



@end



