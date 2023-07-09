#! /bin/env python3

# https://www.learnsteps.com/log-parsing-in-python-using-regular-expressions/

import sys
import re

# 27.59.104.166 - - [04/Oct/2019:21:15:54 +0000] "GET /users/login HTTP/1.1" 200 41716 "-" "okhttp/3.12.1"

LOG_LINE_REGEX = r'^(?P<IP>\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}).*\[(?P<timestamp>.*)\]\s"(?P<verb>[A-Z]+)\s(?P<path>[\w\/]+)\s+(?P<protocol>[\w\/\.]+)"\s(?P<status_code>\d+)\s(?P<response_size>\d+).*'

pattern = re.compile(LOG_LINE_REGEX)

for line in sys.stdin:
    m = pattern.match(line)
    if m:
        print(m.groupdict())
