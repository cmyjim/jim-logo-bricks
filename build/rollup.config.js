import vue from "rollup-plugin-vue";
import css from "rollup-plugin-css-only";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { name } from "../package.json";
import typescript from "rollup-plugin-typescript2";
const file = (type) => `dist/${name}.${type}.js`;
export { name, file };
// ts 处理 生成.d.ts声明文件
const overrides = {
  compilerOptions: {
    declaration: true,
  },
  exclude: ["node_modules", "src/main.ts", "src/App.vue"],
};
export default {
  input: "src/index.ts",
  output: {
    name,
    file: file("esm"),
    format: "es",
  },
  plugins: [
    nodeResolve(),
    typescript({ tsconfigOverride: overrides }),
    vue(),
    css({ output: "bundle.css" }),
  ],
  external: ["vue", "lodash-es"],// 过滤不需要打包的依赖 依靠本地安装
};
