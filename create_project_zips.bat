@echo off
title DevTask HUB - Project Zip Archive Generator
color 0A
echo ======================================================================
echo           DevTask HUB - All Project .Zip Archives Generator
echo ======================================================================
echo.
echo Compressing your project folders into download-ready .zip archives...
echo.

echo [1/3] Creating Zip for Project 2: Lab - JavaScript Learning...
powershell -NoProfile -Command "if (Test-Path 'Frontend - Copy\Own_Project\Lab-javascript-learning') { Compress-Archive -Path 'Frontend - Copy\Own_Project\Lab-javascript-learning\*' -DestinationPath 'Frontend - Copy\Own_Project\Lab-javascript-learning.zip' -Force; Write-Host ' [OK] Lab-javascript-learning.zip created successfully!' -ForegroundColor Green } else { Write-Host ' [SKIP] Folder not found' -ForegroundColor Yellow }"

echo.
echo [2/3] Creating Zip for Project 3: My Portfolio (Clean Source)...
powershell -NoProfile -Command "if (Test-Path 'Frontend - Copy\Own_Project\my-portfolio') { $items = Get-ChildItem 'Frontend - Copy\Own_Project\my-portfolio' -Exclude 'node_modules', '.git'; Compress-Archive -Path $items.FullName -DestinationPath 'Frontend - Copy\Own_Project\my-portfolio.zip' -Force; Write-Host ' [OK] my-portfolio.zip created successfully!' -ForegroundColor Green } else { Write-Host ' [SKIP] Folder not found' -ForegroundColor Yellow }"

echo.
echo [3/3] Creating Zip for Project 4: Fullstack Learning Hub...
powershell -NoProfile -Command "if (Test-Path 'Frontend - Copy\Own_Project\Fullstack-learning-site') { Compress-Archive -Path 'Frontend - Copy\Own_Project\Fullstack-learning-site\*' -DestinationPath 'Frontend - Copy\Own_Project\Fullstack-learning-site.zip' -Force; Write-Host ' [OK] Fullstack-learning-site.zip created successfully!' -ForegroundColor Green } else { Write-Host ' [SKIP] Folder not found' -ForegroundColor Yellow }"

echo.
echo ======================================================================
echo   SUCCESS: All project .zip files are ready!
echo   You can now click '.Zip' on any project in DevTask HUB to download it!
echo ======================================================================
echo.
pause
