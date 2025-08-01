#!/bin/bash

echo "🚀 Building Cutting Edge Web Application..."

# Pull latest changes
git pull

# Install dependencies
npm install

# Build the application
npm run build

# Copy .htaccess to dist folder
cp .htaccess dist/

echo "✅ Build completed successfully!"
echo ""
echo "📁 Build files are in the 'dist' directory"
echo ""
echo "🔧 To deploy to OpenLiteSpeed:"
echo "1. Upload the contents of the 'dist' folder to your web server"
echo "2. Ensure the .htaccess file is in the root directory of your website"
echo "3. Make sure mod_rewrite is enabled on your server"
echo ""
echo "🐳 To deploy with Docker:"
echo "docker-compose up --build -d"
echo ""
echo "📝 The updated .htaccess file now includes:"
echo "- Client-side routing support for React Router"
echo "- Security headers"
echo "- Static asset caching"
echo ""
echo "🎯 Your routes should now work correctly:"
echo "- https://cuttingedgesl.com/services"
echo "- https://cuttingedgesl.com/services/cybersecurity"
echo "- And all other React Router routes" 