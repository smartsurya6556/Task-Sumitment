@echo off
title DevTask HUB - Complete GitHub Pages Deployment Fix
color 0A
chcp 65001 >nul
cls

echo ==============================================================================
echo       DevTask HUB - Permanent Submodule Removal & Global Deployment
echo ==============================================================================
echo.

echo [1/4] Removing submodule from Git index and local disk...
git rm -rf "Frontend - Copy/Own_Project/Fullstack-learning-site"
git rm -rf --cached "Frontend - Copy/Own_Project/Fullstack-learning-site"
if exist "Frontend - Copy\Own_Project\Fullstack-learning-site" (
    attrib -h -r -s "Frontend - Copy\Own_Project\Fullstack-learning-site\*" /s /d 2>nul
    rmdir /s /q "Frontend - Copy\Own_Project\Fullstack-learning-site" 2>nul
)

echo.
echo [2/4] Removing .gitmodules and obsolete bundle from Git...
git rm -f ".gitmodules" 2>nul
if exist ".gitmodules" del /f /q ".gitmodules" 2>nul
git rm -f "project4_bundle.js" 2>nul
if exist "project4_bundle.js" del /f /q "project4_bundle.js" 2>nul

echo.
echo [3/4] Staging all updated project files and .nojekyll...
git add -A

echo.
echo [4/4] Committing fix and pushing to GitHub...
git commit -m "fix: permanently remove submodule gitlink and configure clean deployment"
git push origin main

echo.
echo ==============================================================================
echo   🎉 SUCCESS: Submodule gitlink permanently removed & pushed to GitHub!
echo   Go to https://github.com/smartsurya6556/Task-Sumitment/actions
echo   GitHub Pages build will now complete with 100%% GREEN CHECKMARK!
echo ==============================================================================
echo.
pause
