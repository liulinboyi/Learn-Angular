import { Component, OnInit } from "@angular/core";

interface user {
  name: String;
  age: Number;
}

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"]
})
export class NewsComponent implements OnInit {
  //定义数据指定类型
  public title: String = "我是新闻组件";

  public UserInfo: user = {
    name: "张三",
    age: 20
  };
  public content = "<h1>我是h1</h1>";
  //定义数组
  //泛类
  public arr: Array<Number> = [111, 222, 333, 444];
  public list: Array<String | Number> = ["第一个", "第二个", 3, 4];
  public UserList: Array<user> = [
    {
      name: "张三",
      age: 21
    },
    {
      name: "李四",
      age: 22
    }
  ];
  public Food:Array<Object> = [
    {
      name: '西红柿炒鸡蛋',
      detail: [
        '西红柿','鸡蛋'
      ],
      price: 10
    },
    {
      name: '辣椒炒鸡蛋',
      detail: [
        '辣椒','鸡蛋'
      ],
      price: 13
    }
  ]
  constructor() {}

  /**
   * 声明属性的 几种方式
   * public 公共的
   * private 私有的
   * protected 保护的
   */
  ngOnInit() {}

  changeTitle() {
    this.title = "title修改后的值";
  }
}
