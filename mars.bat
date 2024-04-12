@echo off
node cli %1 %2 %3 %4 %5 %6 %7 %8 %9

if %errorlevel% neq 0 (
  echo An error occurred. Script did not run properly.
) else (
  echo Done. Script ran successfully.
)