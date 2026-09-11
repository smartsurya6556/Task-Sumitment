# DevTask HUB - PowerShell Deployment Script
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host " DevTask HUB - Permanent Submodule Removal & Deployment   " -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "[1/4] Removing submodule from Git index and local disk..." -ForegroundColor Yellow
git rm -rf "Frontend - Copy/Own_Project/Fullstack-learning-site"
git rm -rf --cached "Frontend - Copy/Own_Project/Fullstack-learning-site"
if (Test-Path "Frontend - Copy\Own_Project\Fullstack-learning-site") {
    Remove-Item -Recurse -Force "Frontend - Copy\Own_Project\Fullstack-learning-site"
}

Write-Host "[2/4] Removing .gitmodules and obsolete bundle from Git..." -ForegroundColor Yellow
git rm -f ".gitmodules" 2>$null
if (Test-Path ".gitmodules") { Remove-Item -Force ".gitmodules" }
git rm -f "project4_bundle.js" 2>$null
if (Test-Path "project4_bundle.js") { Remove-Item -Force "project4_bundle.js" }

Write-Host "[3/4] Staging all files..." -ForegroundColor Yellow
git add -A

Write-Host "[4/4] Committing and pushing to GitHub..." -ForegroundColor Yellow
git commit -m "fix: permanently remove submodule gitlink and deploy cleanly"
git push origin main

Write-Host ""
Write-Host "==========================================================" -ForegroundColor Green
Write-Host " SUCCESS: Pushed to GitHub! Check GitHub Actions now!    " -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Green
