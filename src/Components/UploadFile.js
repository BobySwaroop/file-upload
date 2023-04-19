import React from 'react';
import { useState } from 'react';
import Firebase from "./Firebase"
import {storage} from "./Firebase";
import app from "./Firebase";
const UploadFile = () => {
  const [progress, setProgress] = useState(0);
  
    const handleUploadProgress = (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProgress(progress);
    };
  
    function handleFileUpload(event) {
      const file = event.target.files[0];
      const storageRef = storage.ref(`/files/${file.name}`);
      const fileRef = storageRef.child(file.name);
      const uploadTask = fileRef.put(file);
  
      uploadTask.on("state_changed", handleUploadProgress);
    }    
  return (
    <div>
          <input type="file" onChange={handleFileUpload} />
        {progress > 0 && <progress value={progress} max="100" />}
    
    </div>
  )
}

export default UploadFile

  