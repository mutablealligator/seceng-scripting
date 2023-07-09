import * as fs from 'fs';
import Ajv from "ajv";
type LogEntry = {
    rawEntry: string
    ipAddress: string
    timestamp: string
    httpVerb: string
    httpPath: string
    httpProtocol: string
    httpStatusCode: number
    responseSize: number
};

const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
const LOG_LINE_REGEX: RegExp = new RegExp(/^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}).*\[(.*)\]\s"([A-Z]+)\s([\w\/]+)\s+([\w\/\.]+)"\s(\d+)\s(\d+).*/g)

const contents = fs.readFileSync('./request.log', { encoding: 'utf8', flag: 'r' });
const lines = contents.toString().split('\n');
lines.forEach(line => {
    let match = LOG_LINE_REGEX.exec(line);
    if (match) {
        const logEntry: LogEntry = {
            rawEntry: match[0],
            ipAddress: match[1],
            timestamp: match[2],
            httpVerb: match[3],
            httpPath: match[4],
            httpProtocol: match[5],
            httpStatusCode: parseInt(match[6]),
            responseSize: parseInt(match[7])
        };
        console.log(logEntry);
    }
})

console.log(lines);
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);