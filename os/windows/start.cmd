@echo off
cls
for /F %%a in ('echo prompt $E ^| cmd') do set "ESC=%%a"

cd ../../

echo If you're getting an error like this: '%ESC%[31mreact-scripts%ESC%[0m'%ESC%[31m is not recognized as an internal or external command%ESC% %ESC%[0m
echo then you're missing some dependencies.
echo You can run the file '%ESC%[32minstall.cmd%ESC% %ESC%[0m' to install the dependencies

call npm start
pause