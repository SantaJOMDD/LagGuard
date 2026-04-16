console.log("🚀 LagGuard backend starting...");

require("./featureEngine");
require("./predictionEngine");

const startNetworkCollector = require("./networkCollector");
startNetworkCollector();

console.log("✅ Backend subsystems initialized");