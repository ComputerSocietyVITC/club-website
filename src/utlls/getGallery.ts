// import fs from 'fs';

// const imageFolderPath = 'public/images/events/appdev';

// const getGallery = () => {
//   try {
//     const imageFiles = fs.readdirSync(imageFolderPath);
//     const images = imageFiles.map((file) => `${imageFolderPath}/${file}`);
//     return images;
//   } catch (error) {
//     console.error('Error reading image files:', error);
//     return [];
//   }
// };

// export default getGallery;

import fs from 'fs';

const imageFolderPath = 'public/images/events/appdev';

const getGallery = (): string[] => {
  try {
    const imageFiles: string[] = fs.readdirSync(imageFolderPath);
    const images: string[] = imageFiles.map((file: string) => `${imageFolderPath}/${file}`);
    return images;
  } catch (error) {
    console.error('Error reading image files:', error);
    return [];
  }
};

export default getGallery;

