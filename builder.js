const isDev = process.env.NODE_ENV === "development";
await Bun.build({
  entrypoints: ["./frontend/src/index.js"],
  outdir: "./web/static",
  // naming: "[name]-[hash].[ext]",
  target: "browser",
  minify: !isDev,
});
