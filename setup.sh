   #!/bin/bash

   # Remove existing .git directory if it exists
   if [ -d ".git" ]; then
     echo "Removing existing .git directory..."
     rm -rf .git
   fi

   # Initialize a new git repository
   echo "Initializing new git repository..."
   git init

   # Add all files to the new repository
   echo "Adding files to the repository..."
   git add .

   # Commit the files
   echo "Committing files..."
   git commit -m "Initial commit from template"

   echo "Setup complete!"