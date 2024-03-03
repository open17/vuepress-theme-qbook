import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

function generateAutoSidebar(pages, themeConfig) {
    if (themeConfig.autoSidebar === true) {
        const sidebar = [];
        const forbidCategory = new Set(["tags", "", "post", "page"])
        if (Array.isArray(themeConfig.forbidCategory)) {
            themeConfig.forbidCategory.forEach(category => {
                forbidCategory.add(category)
            })
        }
        pages.forEach(page => {
            const pathArray = page.path.split('/')
            const category = pathArray[1]
            let currentNav = sidebar
            if (forbidCategory.has(category)) {
                return
            }
            pathArray.shift()
            while (pathArray.length > 1) {
                const subCategory = pathArray.shift()
                let subNav = currentNav.find(item => item.text === subCategory)
                if (!subNav) {
                    subNav = {
                        text: subCategory,
                        links: []
                    };
                    currentNav.push(subNav);
                }
                currentNav = subNav.links;
            }
            currentNav.push({
                text: page.title,
                link: page.path
            });
        })
        // 注入自动生成的侧边栏菜单
        if (themeConfig.sidebar) {
            themeConfig.sidebar = themeConfig.sidebar.concat(sidebar)
        }
        else themeConfig.sidebar = sidebar
    }
}



export default ({ Vue, siteData, isServer, router }) => {
    Vue.use(ElementUI);
    generateAutoSidebar(siteData.pages, siteData.themeConfig)


    const eventBus = new Vue();
    Vue.prototype.$bus = eventBus;
    Vue.prototype.$isMobile = false;
    Vue.prototype.$lanType='zh';
    if (!isServer) {
    }
};
