import {
    handleCors,
    handleCompression,
    handleBodyRequestParsing,
} from "./common";

import {
    handleAPIDocs
} from "./apiDocs";

export default [ handleCors, handleCompression, handleBodyRequestParsing, handleAPIDocs];
