let html = document.querySelector("#html"); //通过CSS 选择器找到这个元素
let style = document.querySelector("#style");

let string = `/*你好，我是杨蓉
*接下来我演示一下我的前端功底
*首先我要准备一个div
**/
#div1{
    border: 1px solid red;
    width:200px;
    height:200px;
}
/*接下来，我把div变成一个八卦图
*注意看好了
*首先，把div变成一个圆
**/
#div1{
    border-radius:50%;
  box-shadow:0 0 3px rgba(0,0,0,0.5);
border:none;
}
/*八卦是用阴阳形成的
*一黑一白
**/
#div1{
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(248,248,248,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加俩个神秘的小球*/
#div1::before{
     width:100px;
     height:100px;
     left:0;
     top:0;
     left:50%;
     transform:translateX(-50%);
     background:#000;
     border-radius:50%;
     background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(248,248,248,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(248,248,248,1) 100%);
}

`; //stirng是保存要展示的结果的
let string2 = ""; //string2 缓存要展示的结果的
let n = 0;

let step = () => {
  setTimeout(() => {
    //如是是回车就不照搬
    //如果不是回车就照搬
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (String[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    if (n < string.length - 1) {
      //如果n不是最后一个，不是最后一个
      n += 1;
      step();
    }
  }, 50);
};

step();
//在一段时间之后在执行另一个函数setTimeout闹钟只会响一次,setInterval每三秒响一次
