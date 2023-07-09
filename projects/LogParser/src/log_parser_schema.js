"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var LOG_LINE_REGEX = new RegExp('^(?P<IP>\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}).*\[(?P<timestamp>.*)\]\s"(?P<verb>[A-Z]+)\s(?P<path>[\w\/]+)\s+(?P<protocol>[\w\/\.]+)"\s(?P<status_code>\d+)\s(?P<response_size>\d+).*');
var contents = fs.readFileSync('./request.log', { encoding: 'utf8', flag: 'r' });
console.log(contents);
var lines = contents.toString().split('\n');
lines.forEach(function (line) {
    var match = LOG_LINE_REGEX.exec(line);
    if (match) {
        var logEntry = {
            ipAddress: match[0],
            timestamp: match[1],
            httpVerb: match[2],
            httpPath: match[3],
            httpProtocol: match[4],
            httpStatusCode: parseInt(match[5]),
            responseSize: parseInt(match[6])
        };
        console.log(logEntry);
    }
});
var used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log("The script uses approximately ".concat(Math.round(used * 100) / 100, " MB"));
