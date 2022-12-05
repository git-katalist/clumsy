const debug = process.env.NODE_ENV !== "production";

const prefix = !debug ? "/clumsy" : "";

export { prefix };
