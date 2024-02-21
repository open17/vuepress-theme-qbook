import Reveal from "./lib/Reveal";

export default function (ctx) {
  const { Vue } = ctx;
  Vue.component("Reveal", Reveal);
}
