
import Rollbar from 'rollbar';

const baseConfig = {
    captureUncaught: true,
    captureUnhandledRejections: true,
    environment: process.env.NODE_ENV,
};

export const clientConfig = {
    accessToken: "",
    ...baseConfig,
};

export const serverInstance = new Rollbar({
    accessToken: "",
    ...baseConfig,
});