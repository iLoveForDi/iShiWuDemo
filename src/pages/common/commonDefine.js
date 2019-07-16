
import { Dimensions } from 'react-native'

export const SIZE = Dimensions.get('window')
export const SCREENWIDTH = SIZE.width;
export const SCREENHEIGHT = SIZE.height;

export const Foods =  [
    {
      "kind": "group", 
      "categories": [
        {
          "id": 1, 
          "name": "主食类", 
          "image_url": "http://up.boohee.cn/house/u/food_library/category/1_v1.png", 
          "sub_category_count": 3, 
          "sub_categories": [
            {
              "id": 13, 
              "name": "包装谷薯", 
              "image_url": null
            }, 
            {
              "id": 11, 
              "name": "天然谷薯", 
              "image_url": null
            }, 
            {
              "id": 12, 
              "name": "谷薯制品", 
              "image_url": null
            }
          ], 
          "description": null
        }, 
        {
          "id": 2, 
          "name": "肉蛋类", 
          "image_url": "http://up.boohee.cn/house/u/food_library/category/2_v1.png", 
          "sub_category_count": 3, 
          "sub_categories": [
            {
              "id": 22, 
              "name": "白肉", 
              "image_url": null
            }, 
            {
              "id": 21, 
              "name": "红肉", 
              "image_url": null
            }, 
            {
              "id": 23, 
              "name": "蛋类", 
              "image_url": null
            }
          ], 
          "description": null
        }, 
        {
          "id": 3, 
          "name": "大豆及制品", 
          "image_url": "http://up.boohee.cn/house/u/food_library/category/3_v1.png", 
          "sub_category_count": 1, 
          "sub_categories": [
            {
              "id": 31, 
              "name": "大豆及制品", 
              "image_url": null
            }
          ], 
          "description": null
        }, 
        {
          "id": 4, 
          "name": "蔬菜菌藻类", 
          "image_url": "http://up.boohee.cn/house/u/food_library/category/4_v1.png", 
          "sub_category_count": 2, 
          "sub_categories": [
            {
              "id": 42, 
              "name": "菌藻", 
              "image_url": null
            }, 
            {
              "id": 41, 
              "name": "蔬菜", 
              "image_url": null
            }
          ], 
          "description": null
        }, 
        {
          "id": 5, 
          "name": "水果类", 
          "image_url": "http://up.boohee.cn/house/u/food_library/category/5_v1.png", 
          "sub_category_count": 1, 
          "sub_categories": [
            {
              "id": 51, 
              "name": "水果", 
              "image_url": null
            }
          ], 
          "description": null
        }, 
        {
          "id": 6, 
          "name": "奶类", 
          "image_url": "http://up.boohee.cn/house/u/food_library/category/6_v1.png", 
          "sub_category_count": 5, 
          "sub_categories": [
            {
              "id": 65, 
              "name": "其它", 
              "image_url": null
            }, 
            {
              "id": 64, 
              "name": "奶粉", 
              "image_url": null
            }, 
            {
              "id": 63, 
              "name": "奶酪", 
              "image_url": null
            }, 
            {
              "id": 62, 
              "name": "酸奶", 
              "image_url": null
            }, 
            {
              "id": 61, 
              "name": "鲜奶", 
              "image_url": null
            }
          ], 
          "description": null
        }, 
        {
          "id": 7, 
          "name": "油脂类", 
          "image_url": "http://up.boohee.cn/house/u/food_library/category/7_v1.png", 
          "sub_category_count": 2, 
          "sub_categories": [
            {
              "id": 72, 
              "name": "动物油", 
              "image_url": null
            }, 
            {
              "id": 71, 
              "name": "植物油", 
              "image_url": null
            }
          ], 
          "description": null
        }, 
        {
          "id": 8, 
          "name": "坚果类", 
          "image_url": "http://up.boohee.cn/house/u/food_library/category/8_v1.png", 
          "sub_category_count": 1, 
          "sub_categories": [
            {
              "id": 81, 
              "name": "坚果种子", 
              "image_url": null
            }
          ], 
          "description": null
        }, 
        {
          "id": 9, 
          "name": "调味品", 
          "image_url": "http://up.boohee.cn/house/u/food_library/category/9_v1.png", 
          "sub_category_count": 4, 
          "sub_categories": [
            {
              "id": 94, 
              "name": "糖和蜂蜜", 
              "image_url": null
            }, 
            {
              "id": 91, 
              "name": "调味料", 
              "image_url": null
            }, 
            {
              "id": 92, 
              "name": "调味酱", 
              "image_url": null
            }, 
            {
              "id": 93, 
              "name": "酱菜", 
              "image_url": null
            }
          ], 
          "description": null
        }, 
        {
          "id": 10, 
          "name": "饮料类", 
          "image_url": "http://up.boohee.cn/house/u/food_library/category/10_v1.png", 
          "sub_category_count": 8, 
          "sub_categories": [
            {
              "id": 108, 
              "name": "乳饮料", 
              "image_url": null
            }, 
            {
              "id": 104, 
              "name": "含糖饮料", 
              "image_url": null
            }, 
            {
              "id": 107, 
              "name": "固体饮料", 
              "image_url": null
            }, 
            {
              "id": 106, 
              "name": "无糖咖啡", 
              "image_url": null
            }, 
            {
              "id": 105, 
              "name": "无糖茶饮", 
              "image_url": null
            }, 
            {
              "id": 102, 
              "name": "碳酸饮料", 
              "image_url": null
            }, 
            {
              "id": 103, 
              "name": "纯果蔬汁饮料", 
              "image_url": null
            }, 
            {
              "id": 101, 
              "name": "酒精饮料", 
              "image_url": null
            }
          ], 
          "description": null
        }, 
        {
          "id": 11, 
          "name": "零食，点心及冷饮", 
          "image_url": "http://up.boohee.cn/house/u/food_library/category/11_v1.png", 
          "sub_category_count": 3, 
          "sub_categories": [
            {
              "id": 113, 
              "name": "冷饮", 
              "image_url": null
            }, 
            {
              "id": 112, 
              "name": "点心", 
              "image_url": null
            }, 
            {
              "id": 111, 
              "name": "零食", 
              "image_url": null
            }
          ], 
          "description": null
        }, 
        {
          "id": 12, 
          "name": "其它", 
          "image_url": "http://up.boohee.cn/house/u/food_library/category/12_v1.png", 
          "sub_category_count": 2, 
          "sub_categories": [
            {
              "id": 121, 
              "name": "药食", 
              "image_url": null
            }, 
            {
              "id": 122, 
              "name": "营养保健", 
              "image_url": null
            }
          ], 
          "description": null
        }
      ]
    }, 
    {
      "kind": "brand", 
      "categories": [
        {
          "id": 24, 
          "name": "可口可乐", 
          "image_url": "http://up.boohee.cn/house/u/food_library/brand/coca_cola.png?imageView2/1/w/100/h/60", 
          "sub_category_count": 0, 
          "sub_categories": [ ], 
          "description": null
        }, 
        {
          "id": 25, 
          "name": "百事可乐", 
          "image_url": "http://up.boohee.cn/house/u/food_library/brand/pepsi.png?imageView2/1/w/100/h/60", 
          "sub_category_count": 0, 
          "sub_categories": [ ], 
          "description": null
        }, 
        {
          "id": 26, 
          "name": "雪碧", 
          "image_url": "http://up.boohee.cn/house/u/food_library/brand/sprite.png?imageView2/1/w/100/h/60", 
          "sub_category_count": 0, 
          "sub_categories": [ ], 
          "description": null
        }, 
        {
          "id": 27, 
          "name": "桂格", 
          "image_url": "http://up.boohee.cn/house/u/food_library/brand/guaker.png?imageView2/1/w/100/h/60", 
          "sub_category_count": 0, 
          "sub_categories": [ ], 
          "description": null
        }, 
        {
          "id": 28, 
          "name": "卡乐比", 
          "image_url": "http://up.boohee.cn/house/u/food_library/brand/calbee.png?imageView2/1/w/100/h/60", 
          "sub_category_count": 0, 
          "sub_categories": [ ], 
          "description": null
        }
      ]
    }, 
    {
      "kind": "restaurant", 
      "categories": [
        {
          "id": 1, 
          "name": "肯德基", 
          "image_url": "http://up.boohee.cn/house/u/food_library/chain_restaurant/linkage1.png", 
          "sub_category_count": 0, 
          "sub_categories": [ ], 
          "description": null
        }, 
        {
          "id": 2, 
          "name": "麦当劳", 
          "image_url": "http://up.boohee.cn/house/u/food_library/chain_restaurant/linkage2.png", 
          "sub_category_count": 0, 
          "sub_categories": [ ], 
          "description": null
        }, 
        {
          "id": 7, 
          "name": "沙绿轻食", 
          "image_url": "http://up.boohee.cn/house/u/food_library/chain_restaurant/linkage7.png", 
          "sub_category_count": 0, 
          "sub_categories": [ ], 
          "description": null
        }, 
        {
          "id": 3, 
          "name": "星巴克", 
          "image_url": "http://up.boohee.cn/house/u/food_library/chain_restaurant/linkage3.png", 
          "sub_category_count": 0, 
          "sub_categories": [ ], 
          "description": null
        }, 
        {
          "id": 4, 
          "name": "吉野家", 
          "image_url": "http://up.boohee.cn/house/u/food_library/chain_restaurant/linkage4.png", 
          "sub_category_count": 0, 
          "sub_categories": [ ], 
          "description": null
        }, 
        {
          "id": 5, 
          "name": "德克士", 
          "image_url": "http://up.boohee.cn/house/u/food_library/chain_restaurant/linkage5.png", 
          "sub_category_count": 0, 
          "sub_categories": [ ], 
          "description": null
        }, 
        {
          "id": 6, 
          "name": "大娘水饺", 
          "image_url": "http://up.boohee.cn/house/u/food_library/chain_restaurant/linkage6.png", 
          "sub_category_count": 0, 
          "sub_categories": [ ], 
          "description": null
        }
      ]
    }
  ]