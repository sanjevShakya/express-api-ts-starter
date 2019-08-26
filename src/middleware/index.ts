import {
    handleCors,
    handleCompression,
    setAppPortAndHost,
    handleBodyRequestParsing,
} from "./common";

import {
    handleAPIDocs
} from "./apiDocs";

export default [ setAppPortAndHost, handleCors, handleCompression, handleBodyRequestParsing, handleAPIDocs];
