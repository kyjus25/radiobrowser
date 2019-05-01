#!/bin/bash
file="$1"
curl "GET" -H "Icy-Metadata: 1" file > ~/Desktop/icy
tail +16000c ~/Desktop/icy | head | sed "s/StreamTitle='\(.*\)';.*/\1~/" | perl -i.bak -pe 's/[^[:ascii:]]//g' | cut -d '~' -f 1 | head -n 1
