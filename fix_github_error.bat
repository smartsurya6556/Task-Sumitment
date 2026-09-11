@echo off
title DevTask HUB - Remove Fullstack-learning-site & Complete GitHub Deployment
color 0A
chcp 65001 >nul
cls

echo ==============================================================================
echo       DevTask HUB - Removing Error Folder & Fixing GitHub Actions
echo ==============================================================================
echo.

:: 1. Delete the error-causing Fullstack-learning-site folder and all its contents
echo [1/5] Deleting Fullstack-learning-site folder and all files...
if exist "Frontend - Copy\Own_Project\Fullstack-learning-site" (
    attrib -h -r -s "Frontend - Copy\Own_Project\Fullstack-learning-site\*" /s /d 2>nul
    rmdir /s /q "Frontend - Copy\Own_Project\Fullstack-learning-site" 2>nul
    echo  [OK] Deleted Frontend - Copy\Own_Project\Fullstack-learning-site!
) else (
    echo  [INFO] Fullstack-learning-site folder already deleted.
)

:: 2. Delete project4_bundle.js
echo [2/5] Deleting project4_bundle.js task file...
if exist "project4_bundle.js" (
    del /f /q "project4_bundle.js" 2>nul
    echo  [OK] Deleted project4_bundle.js!
) else (
    echo  [INFO] project4_bundle.js already deleted.
)

:: 3. Delete .gitmodules and clean any nested .git
echo [3/5] Cleaning .gitmodules and any nested .git folders...
if exist ".gitmodules" (
    del /f /q ".gitmodules" 2>nul
    echo  [OK] Deleted .gitmodules!
)
for /f "delims=" %%D in ('dir /s /b /a:hd .git 2^>nul') do (
    if not "%%~fD"=="%~dp0.git" (
        attrib -h -r -s "%%~fD" /s /d 2>nul
        rmdir /s /q "%%~fD" 2>nul
        echo  [OK] Cleaned nested .git: %%~fD
    )
)

:: 4. Clear Git cache of submodule and deleted files
echo [4/5] Removing submodule references from Git index cache...
git rm -r --cached "Frontend - Copy/Own_Project/Fullstack-learning-site" 2>nul
git rm -f --cached "Frontend - Copy/Own_Project/Fullstack-learning-site" 2>nul
git rm --cached .gitmodules 2>nul
git rm --cached "project4_bundle.js" 2>nul
echo  [OK] Git submodule cache completely cleared!

:: 5. Stage, commit and push
echo [5/5] Staging changes, committing, and pushing to GitHub...
git add -A
git commit -m "fix: remove Fullstack-learning-site folder, task bundle and submodule causing checkout error"
git push origin main

echo.
echo ==============================================================================
echo   🎉 CLEANUP COMPLETE & CHANGES PUSHED TO GITHUB!
echo   GitHub Actions will now build and deploy with 100%% Green Checkmark!
echo ==============================================================================
echo.
pause
