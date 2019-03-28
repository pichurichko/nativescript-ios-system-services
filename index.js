const platformModule = require("tns-core-modules/platform");

module.exports = {
    getUptimeInMinutes: function () {
        if (platformModule.isIOS){
            var uptime = SystemServices.sharedServices().systemsUptime;
            var values = uptime.split(" ");
            if(values.length != 3)
                return null;
            
            return +values[0] * 1440 + +values[1] * 60 + +values[2];
        }
        return null;
    }
};
