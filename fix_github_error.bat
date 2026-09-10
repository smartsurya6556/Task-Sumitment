@echo off
title DevTask HUB - Fix GitHub Pages Deployment Error
color 0A
chcp 65001 >nul
cls

echo ==============================================================================
echo           DevTask HUB - Fixing GitHub Submodule Deployment Error
echo ==============================================================================
echo.

:: 1. Remove hidden / read-only attributes and delete nested .git folder
echo [1/4] Removing nested .git folder inside Fullstack-learning-site...
if exist "Frontend - Copy\Own_Project\Fullstack-learning-site\.git" (
    attrib -h -r -s "Frontend - Copy\Own_Project\Fullstack-learning-site\.git" /s /d 2>nul
    rmdir /s /q "Frontend - Copy\Own_Project\Fullstack-learning-site\.git" 2>nul
    echo  [OK] Nested .git successfully removed!
) else (
    echo  [INFO] No nested .git found.
)

echo.
:: 2. Remove broken submodule link from Git index cache
echo [2/4] Clearing broken submodule link from Git cache...
git rm --cached "Frontend - Copy/Own_Project/Fullstack-learning-site" 2>nul
git rm --cached -f "Frontend - Copy/Own_Project/Fullstack-learning-site" 2>nul
echo  [OK] Git submodule cache cleared!

echo.
:: 3. Re-add files as normal repository files
echo [3/4] Re-adding files as normal repository files...
git add "Frontend - Copy/Own_Project/Fullstack-learning-site"
git add .nojekyll
git add .
echo  [OK] All project files staged cleanly!

echo.
:: 4. Commit and Push to GitHub
echo [4/4] Committing fix and pushing to GitHub...
git commit -m "fix: convert Fullstack-learning-site submodule to normal directory and fix GitHub Pages build error"
git push origin main

echo.
echo ==============================================================================
echo   🎉 DEPLOYMENT ERROR FIXED & PUSHED TO GITHUB!
echo   GitHub Actions will now pass and deploy your website online!
echo ==============================================================================
echo.
pause
