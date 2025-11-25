# Script untuk Clone Repository CV. Kurnia Jaya Teknik
# Usage: .\clone.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Clone Repository CV. Kurnia Jaya Teknik" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# URL Repository
$repoUrl = "https://github.com/Kurnia-Jaya-Teknik/Company-profile-Fix.git"
$folderName = "Company-profile-Fix"

# Cek apakah folder sudah ada
if (Test-Path $folderName) {
    Write-Host "Folder $folderName sudah ada!" -ForegroundColor Yellow
    $response = Read-Host "Apakah Anda ingin menghapus folder yang ada dan clone ulang? (y/n)"
    if ($response -eq "y" -or $response -eq "Y") {
        Write-Host "Menghapus folder yang ada..." -ForegroundColor Yellow
        Remove-Item -Recurse -Force $folderName
    } else {
        Write-Host "Clone dibatalkan." -ForegroundColor Red
        exit
    }
}

# Clone repository
Write-Host "Mengclone repository dari GitHub..." -ForegroundColor Green
git clone $repoUrl $folderName

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Repository berhasil di-clone!" -ForegroundColor Green
    Write-Host ""
    
    # Masuk ke folder
    Set-Location $folderName
    
    # Install dependencies
    Write-Host "Menginstall dependencies..." -ForegroundColor Green
    Set-Location package
    npm install
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "========================================" -ForegroundColor Cyan
        Write-Host "✓ Setup selesai!" -ForegroundColor Green
        Write-Host "========================================" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Untuk menjalankan development server:" -ForegroundColor Yellow
        Write-Host "  cd package" -ForegroundColor White
        Write-Host "  npm run dev" -ForegroundColor White
        Write-Host ""
        Write-Host "Atau dari root directory:" -ForegroundColor Yellow
        Write-Host "  npm run dev" -ForegroundColor White
        Write-Host ""
    } else {
        Write-Host "✗ Error saat install dependencies" -ForegroundColor Red
    }
} else {
    Write-Host "✗ Error saat clone repository" -ForegroundColor Red
}

