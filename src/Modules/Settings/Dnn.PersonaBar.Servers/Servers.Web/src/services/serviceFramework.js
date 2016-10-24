function serializeQueryStringParameters(obj) {
    const s = [];
    for (let p in obj) {
        if (obj.hasOwnProperty(p)) {
            s.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    }
    return s.join("&");
}

function getServiceFramework(controllerName) {
    const sf = window.dnn.initServers().utility.sf;

    sf.moduleRoot = "PersonaBar/Host";
    sf.controller = controllerName;

    return sf;
}

const serviceFramework = {
    get(controllerName, method, parameters) {
        const sf = getServiceFramework(controllerName);
        return new Promise((callback, errorCallback) => {
            sf.get(method + "?" + serializeQueryStringParameters(parameters), {}, callback, errorCallback);
        });
    }
};

export default serviceFramework; 