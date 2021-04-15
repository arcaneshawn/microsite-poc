import Vue from 'vue'

export default async (_, inject) => {
  let sliceMachine = new Vue({
    methods: {
      resolver({ sliceName, i }) {
        return [ import(`/Users/arcaneshawn/DocsNoSync/testApp/my-slicemachine-project/slices/${sliceName}.vue`), import(`/Users/arcaneshawn/DocsNoSync/testApp/my-slicemachine-project/slices/${sliceName}/index.vue`), import(`/Users/arcaneshawn/DocsNoSync/testApp/my-slicemachine-project/slices/${sliceName}/index.js`), import(`/Users/arcaneshawn/DocsNoSync/testApp/my-slicemachine-project/slices/${sliceName}/${sliceName}.vue`),import(`vue-essential-slices/src/slices/${sliceName}.vue`), import(`vue-essential-slices/src/slices/${sliceName}/index.vue`), import(`vue-essential-slices/src/slices/${sliceName}/index.js`), import(`vue-essential-slices/src/slices/${sliceName}/${sliceName}.vue`) ]
      }
    }
  })
  inject('sliceMachine', sliceMachine);
}
