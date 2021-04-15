export { default as CardBlock } from '../../components/CardBlock.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Hero } from '../../components/Hero.vue'
export { default as Icon } from '../../components/Icon.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as PageHeader } from '../../components/PageHeader.vue'
export { default as RightRail } from '../../components/RightRail.vue'

export const LazyCardBlock = import('../../components/CardBlock.vue' /* webpackChunkName: "components/CardBlock" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/Footer" */).then(c => c.default || c)
export const LazyHero = import('../../components/Hero.vue' /* webpackChunkName: "components/Hero" */).then(c => c.default || c)
export const LazyIcon = import('../../components/Icon.vue' /* webpackChunkName: "components/Icon" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyPageHeader = import('../../components/PageHeader.vue' /* webpackChunkName: "components/PageHeader" */).then(c => c.default || c)
export const LazyRightRail = import('../../components/RightRail.vue' /* webpackChunkName: "components/RightRail" */).then(c => c.default || c)
