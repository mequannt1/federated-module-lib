import NextFederationPlugin from "@module-federation/nextjs-mf";
import { FederatedTypesPlugin } from "@module-federation/typescript";

const federatedConfig: any = {
  name: "common-lib",
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./Card": "./src/common/Button.tsx",
    "./Form": "./src/common/Form.tsx",
  },
  shared: {},
};

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config:any, options:any) {
    config.plugins.push(
      new NextFederationPlugin(federatedConfig),
      new FederatedTypesPlugin({ federationConfig: federatedConfig })
    );
    return config;
  },
};

export default nextConfig;
