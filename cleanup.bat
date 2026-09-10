@echo off
title DevTask HUB - Complete Project Cleanup
color 0A
echo ======================================================================
echo           DevTask HUB - Project Structure Cleanup & Unification
echo ======================================================================
echo.

echo [1/5] Removing old unused React Frontend folder...
if exist "Frontend\src" (
    rmdir /s /q "Frontend" 2>nul
    echo  [OK] Removed old unused Frontend template folder.
) else if exist "Frontend\vite.config.js" (
    rmdir /s /q "Frontend" 2>nul
    echo  [OK] Removed old unused Frontend template folder.
) else (
    echo  [INFO] No old React Frontend folder found.
)

echo.
echo [2/5] Unifying folder: Renaming 'Frontend - Copy' to 'Frontend'...
if exist "Frontend - Copy" (
    if exist "Frontend" (
        rmdir /s /q "Frontend" 2>nul
    )
    ren "Frontend - Copy" "Frontend"
    echo  [OK] Successfully renamed 'Frontend - Copy' to 'Frontend'!
) else if exist "Frontend" (
    echo  [INFO] 'Frontend' folder already in place.
)

echo.
echo [3/5] Removing Git Initiate (.git) and .gitignore files...
if exist "Frontend\Own_Project\my-portfolio\.git" (
    attrib -h -r -s "Frontend\Own_Project\my-portfolio\.git" /s /d 2>nul
    rmdir /s /q "Frontend\Own_Project\my-portfolio\.git" 2>nul
    echo  [OK] Removed: Frontend\Own_Project\my-portfolio\.git
)
if exist "Frontend\Own_Project\my-portfolio\.gitignore" (
    del /f /q "Frontend\Own_Project\my-portfolio\.gitignore" 2>nul
    echo  [OK] Removed: Frontend\Own_Project\my-portfolio\.gitignore
)
if exist "Frontend - Copy\Own_Project\my-portfolio\.git" (
    attrib -h -r -s "Frontend - Copy\Own_Project\my-portfolio\.git" /s /d 2>nul
    rmdir /s /q "Frontend - Copy\Own_Project\my-portfolio\.git" 2>nul
    echo  [OK] Removed: Frontend - Copy\Own_Project\my-portfolio\.git
)
if exist "Frontend - Copy\Own_Project\my-portfolio\.gitignore" (
    del /f /q "Frontend - Copy\Own_Project\my-portfolio\.gitignore" 2>nul
    echo  [OK] Removed: Frontend - Copy\Own_Project\my-portfolio\.gitignore
)

echo.
echo [4/5] Removing .vscode and scratch folders...
for /d /r %%d in (.vscode) do @if exist "%%d" (
    rmdir /s /q "%%d" 2>nul
    echo  [OK] Removed: %%d
)
for /d /r %%d in (scratch) do @if exist "%%d" (
    rmdir /s /q "%%d" 2>nul
    echo  [OK] Removed: %%d
)

echo.
echo [5/5] Removing empty and unused folders...
if exist "Frontend\Css-v3\Day5" rmdir /q "Frontend\Css-v3\Day5" 2>nul
if exist "Frontend\Css-v3\Day8" rmdir /q "Frontend\Css-v3\Day8" 2>nul
if exist "Frontend\Tailwind-v4.3\Day2" rmdir /s /q "Frontend\Tailwind-v4.3\Day2" 2>nul

echo.
echo ======================================================================
echo   SUCCESS: Cleanup complete!
echo   You now have ONE single, clean, professional 'Frontend' folder.
echo ======================================================================
echo.
pause
