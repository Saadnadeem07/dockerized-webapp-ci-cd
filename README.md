# Production Deployment Guide

## Environment Setup
- Dev: `kubectl apply -f kubernetes/namespaces/environments.yaml`
- Prod: Requires additional security controls

## Service Mesh (Istio)
1. Install Istio: `istioctl install`
2. Enable sidecar injection: `kubectl label namespace prod istio-injection=enabled`
3. Apply traffic rules: `kubectl apply -f service-mesh/traffic-split.yaml`
4. Access Kiali: `istioctl dashboard kiali`

## GitOps Workflow
1. Install Argo CD: `kubectl apply -f argocd/install.yaml`
2. Apply application: `kubectl apply -f argocd/application.yaml`
3. Rollback Process:
   - Via UI: Use Argo CD dashboard
   - Via CLI: `argocd app rollback myapp-prod`

## Security Practices
- All secrets managed via sealed-secrets
- mTLS enabled cluster-wide
- Network policies restrict pod-to-pod communication
- RBAC implemented for all service accounts
