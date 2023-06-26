import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, storage } from "../firebase";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  //파일 storage에 업로드
  const handleUpload = async () => {
    //ref 함수로 Storage 내부 저장할 위치 지정하고, uploadBytes 함수 이용해서 파일 저장
    const imageRef = ref(
      storage,
      `${auth.currentUser.uid}/${selectedFile.name}` //user의 사진이 들어옴
    );
    // console.log(auth.currentUser.uid);
    await uploadBytes(imageRef, selectedFile);

    //파일 URL 가져오기
    const downloadURL = await getDownloadURL(imageRef);
    console.log("downloadURL", downloadURL);
  };

  return (
    <div>
      <h2>파일 업로드 컴포넌트</h2>
      <input type="file" onChange={handleFileSelect} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
