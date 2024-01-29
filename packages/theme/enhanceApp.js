import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export default ({ Vue, siteData, isServer }) => {
    Vue.use(ElementUI);
    if (!isServer) {
    }
};
