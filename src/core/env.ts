export interface Env extends NodeJS.ProcessEnv {
  REACT_APP_BACKEND_URL:string
}

const instanceOfEnv = (object: NodeJS.ProcessEnv): object is Env => {
    return "REACT_APP_BACKEND_URL" in object;
};

const validateEnv = () => {
    if(!instanceOfEnv(process.env)) throw new Error("MISSING ENV VARS");
};

validateEnv();
const env = process.env as unknown as Env;
export default env;