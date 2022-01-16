import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import replace from "@rollup/plugin-replace";
import nodeGlobals from "rollup-plugin-node-globals";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

const input = "./src/index.ts";
const globals = {
  "@emotion/styled": "EmotionStyled",
  "@emotion/react": "EmotionReact",
  "@mui/icons-material": "MaterialUIIcons",
  "@mui/material": "MaterialUI",
  react: "React",
  "react-dom": "ReactDOM",
};
const commonjsOptions = {
  ignoreGlobal: true,
  include: /node_modules/,
  namedExports: {
    "../../node_modules/prop-types/index.js": [
      "elementType",
      "bool",
      "func",
      "object",
      "oneOfType",
      "element",
    ],
    "../../node_modules/react/jsx-runtime.js": ["jsx", "jsxs"],
    "../../node_modules/react-is/index.js": [
      "ForwardRef",
      "isFragment",
      "isLazy",
      "isMemo",
      "Memo",
      "isValidElementType",
    ],
  },
};
const nodeOptions = {
  extensions: [".js", ".tsx", ".ts"],
};

function onwarn(warning) {
  if (
    warning.code === "UNUSED_EXTERNAL_IMPORT" &&
    warning.source === "react" &&
    warning.names.filter((identifier) => identifier !== "useDebugValue")
      .length === 0
  ) {
    // only warn for
    // import * as React from 'react'
    // if (__DEV__) React.useDebugValue()
    // React.useDebug not fully dce'd from prod bundle
    // in the sense that it's still imported but unused. Downgrading
    // it to a warning as a reminder to fix at some point
    console.warn(warning.message);
  } else {
    throw Error(warning.message);
  }
}

export default [
  {
    input,
    onwarn,
    output: {
      file: "build/index.js",
      format: "umd",
      name: "MaterialUI",
      globals,
    },
    external: Object.keys(globals),
    plugins: [
      nodeResolve(nodeOptions),
      typescript(),
      commonjs(commonjsOptions),
      nodeGlobals(), // Wait for https://github.com/cssinjs/jss/pull/893
      replace({
        preventAssignment: true,
        "process.env.NODE_ENV": JSON.stringify("production"),
      }),
      terser(),
    ],
  },
];
