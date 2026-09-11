@echo off
title Delete Fullstack-learning-site Folder & Files
color 0C
echo Deleting Frontend - Copy\Own_Project\Fullstack-learning-site...
if exist "Frontend - Copy\Own_Project\Fullstack-learning-site" (
    attrib -h -r -s "Frontend - Copy\Own_Project\Fullstack-learning-site\*" /s /d 2>nul
    rmdir /s /q "Frontend - Copy\Own_Project\Fullstack-learning-site"
    echo [OK] Folder deleted successfully!
) else (
    echo [INFO] Folder already removed.
)

if exist "project4_bundle.js" (
    del /f /q "project4_bundle.js"
    echo [OK] Deleted project4_bundle.js
)

if exist ".gitmodules" (
    del /f /q ".gitmodules"
    echo [OK] Deleted .gitmodules
)

echo.
echo =======================================================
echo Done! All error-causing files and folders removed!
echo =======================================================
pause
