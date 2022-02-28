import { Fragment } from "react";
import { Basic } from "./components/Basic"
import { UseProps } from "./components/UseProps"
import { ModifyExtends } from "./components/ModifyExtends"
import { ThirdPartComponent } from "./components/ThirdPartComponent"
import { AutoCheckAttr } from "./components/AutoCheckAttr"
import { CssSelector } from "./components/CssSelector"
import { DefaultAttr } from "./components/DefaultAttr"
import { GlobalComponent } from "./components/GlobalComponent"

function App() {
  return (
    <div >
      <Fragment>
        <Basic />

        {/* props传递 */}
        <UseProps />

        {/* 修改父组件的继承组件 */}
        <ModifyExtends />

        {/* 可以继承第三方组件 */}
        <ThirdPartComponent />

        {/* 可以智能的区分哪儿些属性是原生DOM属性，哪儿些属性是我们自己添加的属性 */}
        <AutoCheckAttr />

        {/* css的选择器相关 */}
        <CssSelector />

        {/* 提供具有默认属性的组件 */}
        {/* type不再显示定义，可由内部指定 */}
        <DefaultAttr />

        {/* 提供全局 */}
        <GlobalComponent />

      </Fragment>
    </div>
  );
}

export default App;
