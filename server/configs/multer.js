// enables file uploads in Express and temporarily stores files on disk 
// backend can process PDFs, images, or documents only with the help of multer.


import multer from 'multer';

const storage = multer.diskStorage({});

export const upload = multer({ storage})