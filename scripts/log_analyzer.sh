#!/bin/bash

LOG_FILE="/var/log/nginx/access.log"  # Adjust path as needed

if [ ! -f "$LOG_FILE" ]; then
    echo "Error: Log file not found at $LOG_FILE"
    exit 1
fi

echo "Analyzing log file: $LOG_FILE"
echo "----------------------------------------"

# Count requests per IP address and display top 3
echo "Top 3 IP addresses by request count:"
awk '{print $1}' "$LOG_FILE" | sort | uniq -c | sort -nr | head -n 3 | \
while read count ip; do
    echo "IP: $ip - Requests: $count"
done

# Additional statistics
echo "----------------------------------------"
echo "Total requests: $(wc -l < "$LOG_FILE")"
echo "Unique IPs: $(awk '{print $1}' "$LOG_FILE" | sort -u | wc -l)"
echo "----------------------------------------"

# HTTP Status Code Distribution
echo "HTTP Status Code Distribution:"
awk '{print $9}' "$LOG_FILE" | sort | uniq -c | sort -nr