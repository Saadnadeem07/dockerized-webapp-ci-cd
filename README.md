# Assignment 1: Setup Containerized Development and Continuous Integration for Web Applications

# **Assignment Overview**

### **Before Starting**

- Read through the whole assignment.
- **Create a group of three people**.
- Create a private GitHub repository and add your group members.
- Break down the project into smaller tasks and create GitHub issues to track each task.
- Assign the tasks to each member.
- Use proper Git workflows, including creating branches and merging into the main branch.
- Create a proper folder structure (do not structure based on team members’ names or roll numbers).

## **About Assignment**

### **Objective**

Students will select an existing project (e.g., their final year project (FYP), a course project, or a previous semester’s FYP) and containerize it using Docker. The project must include at least three services: **Frontend**, **Backend**, and **Database**. Students will build a secure, scalable, and automated web application development pipeline using Linux administration, Docker optimizations, and CI workflow. 

---

### **Task 1: Linux System Administration**

1. **Systemd Service**
    - Create a simple `systemd` service that runs a Python/NodeJS web server (using Flask/ExpressJS).
    - Configure the service to restart automatically if it stops unexpectedly.
2. **Kernel Tuning**
    - Edit your `/etc/sysctl.conf` to adjust one network parameter (for example, increase `net.core.somaxconn`).
    - Apply the changes and verify they are in effect (using `sysctl -p`).
3. **Firewall Setup**
    - Use UFW (or firewalld) to allow only HTTP/HTTPS traffic.
    - Block all other incoming connections.

**Deliverable:**

A short script or a set of command-line instructions that create the service, adjust the kernel parameter, and configure the firewall.

---

### **Task 2: Bash Scripting**

1. **Health Check Script**
    - Write a Bash script that checks if your web server (from Task 1) is running.
    - If the server is not running, restart it and log the event (e.g., append a timestamped message to a log file).
2. **Log Analysis**
    - Given a sample web server log file, write a simple script (using AWK, grep, or sed) that:
        - Counts the number of requests from each IP address.
        - Displays the top 3 IP addresses with the most requests.

**Deliverable:**

Two scripts:

- One for health checking and restarting the web server.
- One for analyzing a sample log file and printing a summary report.

---

### **Task 3: Docker & Docker Compose Optimization**

1. **Containerization with Docker**
    - Containerize the project by creating Dockerfiles for all services (backend, frontend, databases, etc.).
    - Optimize Dockerfiles for minimal image size, fast build times, and security (e.g., multi-stage builds, using non-root users).
    - Ensure the final image runs as a non-root user.
2. **Docker Compose Setup for Local Development**
    - Create a `docker-compose.yml` file that spins up all services locally.
    - Ensure hot reloading of changes (e.g., using `nodemon` for Node.js apps, live reload for web servers).

**Deliverables:**

- Optimized Dockerfile.
- A `docker-compose.yml` file with proper setup for each service, including bind mounts and configurations for hot-reloading.

---

### **Task 4: Continuous Integration (CI) Pipeline**

1. **Task:**
    - Set up Continuous Integration (CI) pipelines using GitHub Actions.
    - The pipeline should perform the following tasks:
        - **Build Containers:** Create separate jobs for building containers for all components (FE, BE, each microservice, etc.).
        - **Run Unit Tests:** Use the Docker image created to run unit tests. If the project does not have unit tests, add a sample unit test.
        - **Run Linter and SAST Jobs:** Implement linting and static application security testing (SAST) jobs for the project based on its programming language.
        - **Push Containers to DockerHub:** Ensure proper tagging and authentication for pushing containers.
- **When to Run Jobs:**
    - On every commit to the main branch.
    - On every pull request creation.
- **Best Practices:**
    - Use ignore files and paths to avoid unnecessary job execution.
    - Optimize job execution using caching features of GitHub Actions.
    - Use artifacts to publish unit test results.
- **Deliverable:**
    - CI pipeline configuration files (e.g., `.github/workflows/ci.yml`).

---

### **Submission Guidelines**

1. Code, scripts, Dockerfiles, and CI/CD configurations must be hosted on GitHub/GitLab.
2. Include a `README.md` with:
    - Setup instructions.
    - Docker optimizations.
    - Local development environment setup.
    - CI pipeline configuration and best practices.

---

### **Evaluation Criteria**

1. **Linux System Administration & Bash Scripting (20%) -** Is the web server properly configured and logs are handled as mentioned?
2. **Quality of Dockerfiles (20%)** - Are the Dockerfiles optimized for performance, size, and security?
3. **Functionality of Docker Compose Setup (20%)** - Does the `docker-compose.yml` file support easy local development with hot-reloading?
4. **CI Pipeline Automation (20%)**
    - **Job Execution**: All jobs run without errors.
    - **Rule-Based Triggers**: Pipeline triggers correctly on pushes to `main`, PRs, or tags.
5. **CI Best Practices (20%)**
    - **Optimization**: Use of caching (dependency/package caches), parallel job execution.
    - **Secrets Management**: Secure handling of credentials via GitHub Secrets/Vault.

---