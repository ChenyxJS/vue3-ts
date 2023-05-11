import noImg from "@/assets/images/no-img.png";
import { Directive } from "vue";

// 定义自定义指令
export const lazy: Directive = {
    mounted(el: HTMLImageElement, bindings: any) {
        // el表示使用指令的DOM元素
        // bindings表示指令相关的信息是一个对象 如v-lazy="xxx",bindlings即是xxx对应的内容
        // 指令的功能：实现图片的懒加载
        // 1、监听图片是否进入可视区
        const oberver = new IntersectionObserver(([{ isIntersecting }]) => {
            // true；进入可视区域，false：未进入可视区域
            if (isIntersecting) {
                // 1、给图片的src属性赋值图片的地址
                if (el.src !== bindings.value) {
                    el.src = bindings.value;
                }
                // 2、加载上后就不需要继续监听了，取消图片的监听，默认是会一直监听的，如果不取消。就会一直执行
                oberver.unobserve(el);
                // 3、加载的图片失败了，显示默认的图片地址
                el.onerror = () => {
                    el.src = noImg;
                };
            }
        });
        // 监听dom元素
        oberver.observe(el);
    },
};
