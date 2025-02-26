#!/bin/bash

SERVICE_NAME="myapp-backend"
LOG_FILE="/home/your-username/MYAPP/logs/health_check.log"
TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")

# Check if service is running
if systemctl is-active --quiet $SERVICE_NAME; then
    echo "$TIMESTAMP - $SERVICE_NAME is running" >> $LOG_FILE
else
    echo "$TIMESTAMP - $SERVICE_NAME was down, restarting..." >> $LOG_FILE
    sudo systemctl restart $SERVICE_NAME
    echo "$TIMESTAMP - Restarted $SERVICE_NAME" >> $LOG_FILE
fi
