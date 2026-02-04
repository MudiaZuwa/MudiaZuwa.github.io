import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  serverExternalPackages: ["@xenova/transformers", "sharp", "onnxruntime-node"],
  experimental: {
    serverComponentsExternalPackages: ["@xenova/transformers", "sharp", "onnxruntime-node"],
  },
  turbopack: {
    resolveAlias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  webpack(config, { isServer }) {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // Externalize native modules on server
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push("sharp", "onnxruntime-node");
    }

    return config;
  },
};
