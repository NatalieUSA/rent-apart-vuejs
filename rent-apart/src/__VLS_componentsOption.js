import Btn from './components/Button.js';

export default (await import('vue')).defineComponent({
name: 'App',
components: {
Btn
}
});
const __VLS_componentsOption = {
Btn
};
const __VLS_name = 'App' as const;
function __VLS_template() {
let __VLS_ctx!: InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_localComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption & typeof __VLS_ctx;
let __VLS_otherComponents!: typeof __VLS_localComponents & import('./__VLS_types.js').GlobalComponents;
let __VLS_own!: import('./__VLS_types.js').SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; }) >;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_templateComponents!: {} &
import('./__VLS_types.js').WithComponent<'Btn', typeof __VLS_components, 'Btn'>;
__VLS_components.Btn; __VLS_components.Btn;
// @ts-ignore
[Btn, Btn,];
{
({} as JSX.IntrinsicElements).img;
(__VLS_x as JSX.IntrinsicElements)['img'] = { alt: ("Vue logo"), src: ("./assets/logo.png"), };
}
{
__VLS_templateComponents.Btn;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.Btn>) = {};
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
declare var __VLS_slots: {};
return __VLS_slots;
}
let __VLS_internalComponent!: typeof import('./App.vue')['default'];
