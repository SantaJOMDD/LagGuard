const eventBus = require("./eventBus");

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startNetworkCollector() {
    setInterval(() => {
        const sample = {
            timestamp: Date.now(),
            ping: getRandom(20, 120),
            jitter: getRandom(0, 30)
        };

        eventBus.publish("NETWORK_SAMPLE", sample);

        console.log("Sample:", sample);
    }, 500);
}

module.exports = startNetworkCollector;