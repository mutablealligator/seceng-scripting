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

// sort a hashmap by value
const hashMapA = new Map<string, number>();
hashMapA.set('a', 1);
hashMapA.set('b', 2);

const sortedHashMapA = new Map([...hashMapA.entries()].sort((a, b) => b[1] - a[1]));
console.log(sortedHashMapA);

// sort a hashmap by key
const hashMapB = new Map<string, number>();
hashMapB.set('a', 1);
hashMapB.set('b', 2);

const sortedMapB = new Map([...hashMapB.entries()].sort((a, b) => a[0].localeCompare(b[0])));
const top5 = [...sortedMapB.entries()].slice(0, 5)
console.log(top5);