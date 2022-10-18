@echo off
cls
for /F %%a in ('echo prompt $E ^| cmd') do set "ESC=%%a"

cd ../../

echo Installing the %ESC%[32mnecessary %ESC%[0mdependencies 
echo; 
echo; 

call npm install

echo %ESC%[32mInstallations done %ESC%[0m
echo Starting the development server in around 5 seconds
timeout 5

call npm start
pause