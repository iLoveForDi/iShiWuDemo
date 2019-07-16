//
//  NativeViewController.m
//  SecondProject
//
//  Created by iWander on 2018/11/5.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "NativeViewController.h"

@interface NativeViewController ()

@end

@implementation NativeViewController

- (void)viewDidLoad {
    [super viewDidLoad];
  
  [self.navigationController setNavigationBarHidden:false animated:YES];
    // Do any additional setup after loading the view.
  self.view.backgroundColor = [UIColor whiteColor];
  self.title = @"RN跳转过来的本地页面";
  NSLog(@"这里是从RN页面跳转过来的native页面");
  
  UILabel *label = [[UILabel alloc] initWithFrame:CGRectMake(50, 100, 300, 200)];
  label.text = @"这里是从RN页面跳转过来的native页面";
  [self.view addSubview:label];
  
}

- (void)viewWillDisappear:(BOOL)animated{
  [super viewWillDisappear:animated];
  
  [self.navigationController setNavigationBarHidden:true animated:YES];
  
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
