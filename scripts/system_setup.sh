#!/bin/bash

# Kernel Tuning
echo "Adjusting kernel parameters..."
sudo tee -a /etc/sysctl.conf > /dev/null <<EOL
# Increase max connections
net.core.somaxconn=2048
# Increase TCP backlog
net.ipv4.tcp_max_syn_backlog=2048
# Enable TCP keepalive
net.ipv4.tcp_keepalive_time=60
net.ipv4.tcp_keepalive_intvl=10
net.ipv4.tcp_keepalive_probes=6
EOL

# Apply sysctl changes
sudo sysctl -p

# Firewall Setup (UFW)
echo "Configuring firewall..."
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw allow 22/tcp    # SSH (optional, for remote access)
sudo ufw allow 3000/tcp  # Frontend dev server
sudo ufw allow 5000/tcp  # Backend API
sudo ufw --force enable

echo "System configuration completed!"