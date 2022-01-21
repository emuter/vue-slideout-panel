import VueSlideoutPanel from './components/SlideoutPanel';
import vueSlideoutPanelService from './service';

// expose component and service to global scope
if (typeof window !== 'undefined' && window.Vue) {
  if (window.vue2PanelDebug) {
    console.log('installing Vue js plugin - browser'); //eslint-disable-line
  }

  window.Vue.use({
    install(NewVue) {
      NewVue.component('slideout-panel', VueSlideoutPanel);
      NewVue.prototype.$showPanel = vueSlideoutPanelService.showPanel;
      NewVue.prototype.$showPanelStack = vueSlideoutPanelService.showPanelStack;
      NewVue.prototype.$hideAllPanels = vueSlideoutPanelService.hideAllPanels;
      NewVue.prototype.$setPanelDefaults =
        vueSlideoutPanelService.setPanelDefaults;
    }
  });

  window.vueSlideoutPanelService = vueSlideoutPanelService; 
}

/*export default {
  install: function(NewVue) {
    NewVue.component('slideout-panel', VueSlideoutPanel);
    NewVue.prototype.$showPanel = vueSlideoutPanelService.showPanel;
    NewVue.prototype.$showPanelStack = vueSlideoutPanelService.showPanelStack;
    NewVue.prototype.$hideAllPanels = vueSlideoutPanelService.hideAllPanels;
    NewVue.prototype.$setPanelDefaults =
      vueSlideoutPanelService.setPanelDefaults;
  },
  VueSlideoutPanel,
  vueSlideoutPanelService
};
*/

const VueSlideoutPanelPlugin = {
  install(app, options) {
    if (!options) {
      options = {};
    }
    const VueSlidPanel = new VueSlideoutPanel(options);
    app.component('slideout-panel', VueSlideoutPanel);
    app.config.globalProperties.$showPanel = vueSlideoutPanelService.showPanel;
    app.config.globalProperties.$showPanelStack = vueSlideoutPanelService.showPanelStack;
    app.config.globalProperties.$hideAllPanels = vueSlideoutPanelService.hideAllPanels;
    app.config.globalProperties.$setPanelDefaults = vueSlideoutPanelService.setPanelDefaults;
  },
};

export default VueSlideoutPanelPlugin;
