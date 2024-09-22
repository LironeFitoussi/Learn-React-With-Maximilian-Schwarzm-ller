'use client';
import classes from './image-picker.module.css';
import { useRef, useState } from 'react';

// Next.js Components
import Image from 'next/image';
export default function ImagePicker ({ label, name }){
    const [pickedImage, setPickedImage] = useState();

    const filePickerRef = useRef();
    function handlePickImage() {
        filePickerRef.current.click();
    }

    function handleImagePicked(event) {
        const file = event.target.files[0];
        if (!file) {
            setPickedImage(null);
            return;
        }

        const fr = new FileReader();
        fr.onload = () => {
            setPickedImage(fr.result);
        };
        
        fr.readAsDataURL(file);
    }


    return (
        <div className={classes.picker}>
           <label htmlFor={name}>{label}</label>
           <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet.</p>}
                    {pickedImage && 
                    <Image 
                        src={pickedImage} 
                        alt="Preview" 
                        fill
                    />}
                </div>
                <input 
                    ref={filePickerRef}
                    className={classes.input}
                    type="file" 
                    id={name} 
                    accept="image/png, image/jpeg" 
                    name={name} 
                    onChange={handleImagePicked}
                    required
                />
                <button className={classes.button} type="button" onClick={handlePickImage}>
                    Pick an Image
                </button>
           </div>
        </div>
    );
};
