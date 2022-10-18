@echo off
cls
for /F %%a in ('echo prompt $E ^| cmd') do set "ESC=%%a"

echo Installing the necessary dependencies 
echo; 
echo; 

echo Installing in %ESC%[32mReact %ESC%[0m
call npm install react --save
echo; 
echo;

echo Installing in %ESC%[32mReact-Scripts %ESC%[0m
call npm install react-scripts --save
echo; 
echo;

echo Installing in %ESC%[32mMaterial UI %ESC%[0m
call npm install @mui/material @emotion/react @emotion/styled
echo; 
echo;

echo Installing in the %ESC%[32mVendia SDK %ESC%[0m
call npm install -g @vendia/share-cli
echo; 
echo;

echo %ESC%[32mInstallations done %ESC%[0m
echo Starting the development server in around 5 seconds
timeout 5

call npm start
pause