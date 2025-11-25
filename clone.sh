#!/bin/bash

# Script untuk Clone Repository CV. Kurnia Jaya Teknik
# Usage: bash clone.sh

echo "========================================"
echo "Clone Repository CV. Kurnia Jaya Teknik"
echo "========================================"
echo ""

# URL Repository
REPO_URL="https://github.com/Kurnia-Jaya-Teknik/Company-profile-Fix.git"
FOLDER_NAME="Company-profile-Fix"

# Cek apakah folder sudah ada
if [ -d "$FOLDER_NAME" ]; then
    echo "Folder $FOLDER_NAME sudah ada!"
    read -p "Apakah Anda ingin menghapus folder yang ada dan clone ulang? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "Menghapus folder yang ada..."
        rm -rf "$FOLDER_NAME"
    else
        echo "Clone dibatalkan."
        exit 1
    fi
fi

# Clone repository
echo "Mengclone repository dari GitHub..."
git clone "$REPO_URL" "$FOLDER_NAME"

if [ $? -eq 0 ]; then
    echo "✓ Repository berhasil di-clone!"
    echo ""
    
    # Masuk ke folder
    cd "$FOLDER_NAME"
    
    # Install dependencies
    echo "Menginstall dependencies..."
    cd package
    npm install
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "========================================"
        echo "✓ Setup selesai!"
        echo "========================================"
        echo ""
        echo "Untuk menjalankan development server:"
        echo "  cd package"
        echo "  npm run dev"
        echo ""
        echo "Atau dari root directory:"
        echo "  npm run dev"
        echo ""
    else
        echo "✗ Error saat install dependencies"
        exit 1
    fi
else
    echo "✗ Error saat clone repository"
    exit 1
fi

