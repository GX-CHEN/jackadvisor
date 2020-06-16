const language = localStorage.getItem("language") || "zh-CN";

let text;
if (language === "en-US") {
  text = {
    listingTitle: "Small Tools Created By Gongxia Chen",
    timerTitle: "Circle Shaped Timer",
    timerLine1: "Timer with range 10-120 seconds",
    timerLine2: "With colorful animation and emojis",
    timerLine3: "Web & Android web will have a finishing sound",
    colorTitle: "Color picker for Chinese classic colors",
    colorLine1: "Can be used to explore many colors with poetic names",
    colorLine2: "Provide save/like feature, to compare and refine",
    colorLine3: "Click the button to copy the corresponding color code",
  };
} else {
  text = {
    listingTitle: "小菜刀的网页小工具集合",
    timerTitle: "环形的计时器",
    timerLine1: "可以定义10-120秒的计时器",
    timerLine2: "斑斓的色彩和有趣的emoji",
    timerLine3: "网页版和手机版会有彩蛋的截止音",
    colorTitle: "古色生香：中国古典颜色选择器",
    colorLine1: "可以探索很多古典颜色与其诗意的名字",
    colorLine2: "提供收藏功能供初步选择和对比",
    colorLine3: "可以直接点击按钮获取对应的颜色码",
  };
}

export default text;
