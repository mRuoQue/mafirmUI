import { defineComponent as o, createElementBlock as l, openBlock as i, normalizeClass as s, createElementVNode as u, renderSlot as d, createTextVNode as c } from "vue";
const m = ["autofocus", "nativeType", "disabled"], r = /* @__PURE__ */ o({
  name: "SmButton",
  __name: "button",
  props: {
    type: {},
    nativeType: { default: "button" },
    size: {},
    disabled: { type: Boolean },
    plain: { type: Boolean },
    round: { type: Boolean },
    circle: { type: Boolean },
    autofocus: { type: Boolean },
    onClick: {}
  },
  setup(e) {
    return (t, n) => (i(), l("button", {
      class: s(["sm-button", {
        [`sm-button--${e.type}`]: e.type,
        [`sm-button--${e.size}`]: e.size,
        "is-disabled": e.disabled,
        "is-plain": e.plain,
        "is-round": e.round,
        "is-circle": e.circle
      }]),
      autofocus: e.autofocus,
      nativeType: e.nativeType,
      disabled: e.disabled
    }, [
      u("span", null, [
        d(t.$slots, "default", {}, () => [
          n[0] || (n[0] = c("button", -1))
        ])
      ])
    ], 10, m));
  }
}), b = (e) => (e.install = (t) => {
  t.component(e.name, e);
}, e), f = b(r), y = [f], a = (e) => {
  a.installed || (a.installed = !0, y.forEach((t) => {
    e.component(t.name, t);
  }));
};
export {
  a as default,
  a as install
};
