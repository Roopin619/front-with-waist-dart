import { version } from "../package.json";

// ?? 🤔 ?? --> https://en.freesewing.dev/packages/core/config

export default {
  name: "front",
  version,
  design: "Roopin619",
  code: "Roopin619",
  department: "womenswear",
  type: "pattern",
  difficulty: 3,
  tags: [
    "freesewing",
    "design",
    "diy",
    "fashion",
    "made to measure",
    "parametric design",
    "pattern",
    "sewing",
    "sewing pattern"
  ],
  optionGroups: {
    waistdart: ["waistdartwidth", "waistdartlength"]
  },
  measurements: [
    "shoulderToShoulder",
    "highBust",
    "naturalWaist",
    "bustSpan",
    "topToWaist",
    "naturalWaistToUnderarm"
  ],
  dependencies: {},
  inject: {},
  hide: [],
  parts: ["front"],
  options: {
    waistdartwidth: { mm: 25.4, min: 0, max: 50.8 },
    waistdartlength: { mm: 0, min: -101.6, max: 101.6}
  }
};
