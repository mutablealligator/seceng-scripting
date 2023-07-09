'''
charles=3918
alice=0
bob=100
charles=3918
django=77
alice=0
'''

import collections
log = collections.defaultdict(list)
with open('./access.log', 'r') as file_handle:
    for line in file_handle:
        (k, v) = line.split('=')
        log[int(v)].append(k)

for key, values in sorted(log.items()):
    for value in sorted(set(values)): # set() is used to remove duplicates
        print ('{}={}'.format(value, key))