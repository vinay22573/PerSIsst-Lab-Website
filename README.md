# PerSIsst Lab | IIIT Delhi

## 🎯 About
The Pervasive Sensing & Intelligent Assistive Systems (PerSIsst) Lab, founded by Dr. Pragma Kar, is a creative research hub dedicated to designing Human-Centric solutions that assist in smart living. The lab provides an innovation space to the team of researchers and engineers who are passionate about weaving novel techniques of integrating systems with sensing capabilities to solve critical challenges in people's lives.

Our work spans a variety of domains, from smart entertainment to education, always driven by the core belief that pervasive, intelligent digital assistants—powered by secure, ubiquitous physiological and behavioral sensing—can make a significant impact.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- Git
- Access to IIIT Delhi VPN (for deployment)

### Local Development
```bash
# Clone the repository
git clone https://github.com/vinay22573/PerSIsst-Lab-Website.git

# Navigate to latest version
cd PerSIsst-Lab/v5

# Install dependencies
npm install
npm update

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

## 🏗 Tech Stack

### Frontend
- **Next.js**: React-based framework for easy enhanced functionality
- **Tailwind CSS**: Utility-first framework for responsive design

### Backend
- **Next.js API Routes**: Handle submissions, blogs, student info, publications, news for future
- **Data Storage**: 
  - Development: JSON files for fast development
  - Production: MongoDB/PostgreSQL for storing blog posts, student data, publications, news as needed for future

### DevOps
- **Apache 2**: Serve the Next.js application
- **Let's Encrypt**: Provide HTTPS configuration
- **NixOS**: Manage configs and dependencies reproducibly
- **Ubuntu Server**: Host Apache 2 and SSL setup

## 📁 Project Structure

### Directory Organization
```
root/
├── v5/                     # Latest version
│   ├── public/            # Static assets
│   │   ├── bg/           # Background images
│   │   ├── team/         # Team member photos
│   │   └── images/       # General images
│   ├── src/
│   │   ├── app/         # All pages
│   │   ├── components/  # All reusable components
│   │   └── lib/        # All utility functions
│   └── config files     # Don't touch unless you know what you're doing
└── Archive/             # Contains old versions
```

### Key Files
- Latest version (v5) is inside root dir
- Archive dir contains old versions
- Config files: Don't modify unless you understand their purpose
- Never delete code portions - comment them instead
- Experimental ("Exp") page is for review and future use

## 🔧 Development Guidelines

### Code Style
1. Use Arrow Functions in `.tsx` files
2. Use `<> </>` or `use client` declaration for fragmentation error
3. Use `h-[55rem]` in code files for main body top alignment
4. Use `pb-10` for bottom padding
5. Use `@/` alias for imports (maps to `app/` directory)
   Example: `import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'`

### Best Practices
1. Always Refer to [Tailwind Docs](https://v2.tailwindcss.com/docs) and [NextJS Docs](https://nextjs.org/docs)
2. Be aware of `.gitignore` contents
3. During git conflicts, always attempt to merge
4. Never copy-paste - append or modify instead
5. Map directories with Navbar links
6. Follow layout patterns to reduce redundancy
7. Debug Dark Mode when using libraries
8. Document complex logic
9. Never use CLI Install for UI/Libs/Etc.  - use manual installation
10. Maintain accessibility standards
11. Implement responsive design
12. Involves a lot of icon and other libraries with the regular Node.js folder (contact developers for exact info about them)

### UI/Layout Guidelines
1. Structure top alignment using `h-[55rem]`
2. Use `pb-10` for consistent bottom padding
3. Follow responsive design principles
4. Ensure dark mode compatibility
5. Test across different screen sizes

## 🚀 Build and Export

### Local Build
```bash
# Generate production build
npm run build
```

### Static Export
```bash
# Create static export
npm run export
# Exported site will be in 'out' directory
```

## 📡 Server Deployment Process

### VPN Connection
1. Connect to IIIT Delhi VPN (if outside college network):
```bash
sudo openfortivpn vpn.iiitd.edu.in:10443 --username=username
# Example:
sudo openfortivpn vpn.iiitd.edu.in:10443 --username=vinay22573
```

### SSH Access
2. Access the server:
```bash
ssh username@iiitd.edu.in@ip_address
# Example:
ssh vinay22573@iiitd.edu.in@192.168.3.70
```

### Deployment Steps
3. Clean up old files:
```bash
rm main.zip
rm -r PerSIsst-Lab-main/
cd ..
cd ..
cd var/www/html/
rm -r persisst  # Remove deployed files
mkdir persisst  # Create directory if needed
```

4. Get and deploy new version:
```bash
wget https://github.com/kintsugi-programmer/PerSIsst-Lab/archive/refs/heads/main.zip
unzip main.zip
cd PerSIsst-Lab-main/v6
npm install
npm run build
npm run export
cp -r out/* /var/www/html/persisst/
```

## ⚠️ Important Notes

### IT-Team@IIITD Guidelines
1. No external input collection through website
2. All website export files must be static
3. Limited sudo access
4. Don't interfere with other users' files
5. Don't share sensitive data and access

### Configuration Requirements
1. `next.config.mjs` settings:
   ```javascript
   {
     output: 'export',     // Enable static export
     trailingSlash: true,  // Ensures trailing slash in URLs
     images: {
       unoptimized: true,  // Avoid IIITD server optimization errors
     }
   }
   ```

### Development Notes
1. Be cautious with config files
2. Never delete code - comment it out instead
3. Review commented portions and Exp page for future use
4. Follow arrow function syntax in TSX
5. Use layout patterns to reduce redundancy
6. Implement proper fragmentation handling
7. Test dark mode compatibility
8. Use proper directory mapping
9. Follow import alias conventions

## 🛠 Troubleshooting

### Common Issues
1. Fragmentation errors: Use `<> </>` or `use client` declaration
2. Dark mode issues: Test thoroughly when using new libraries
3. Directory mapping: Ensure proper alignment with Navbar
4. UI Library conflicts: Use manual installation instead of CLI

### Server Access
1. VPN connection issues: Verify credentials and network
2. SSH access problems: Check username and IP
3. File permission issues: Work within user permissions

## 👥 Team & Credits 
- Frontend Developer: [Vinay Kumar Dubey](https://github.com/vinay22573/)
- Backend Developer (2024): [Siddhant Bali](https://github.com/kintsugi-programmer)
- Frontend Designer: [Daksh Tongaria](https://www.behance.net/dakshtongaria)
- Lab Director: Dr. Pragma Kar
- IT Support: IT-Team@IIITD

## 📞 Contact & Support
For technical issues or access requests:
1. Lab Administration
2. IT Support: IT-Team@IIITD
3. Web Administration
## 🔄 Version Control
- Main repository: [PerSIsst-Lab](https://github.com/vinay22573/PerSIsst-Lab-Website.git)
- Version: v6 (Latest)
- Archive: Contains previous versions for reference

** Note: This is not the original website for the main repo link where we have contributed kindly check [PerSIsst-Lab](https://github.com/kintsugi-programmer/PerSIsst-Lab) **
---
Last Updated: January 2025
Maintained by: PerSIsst Lab, IIIT Delhi

