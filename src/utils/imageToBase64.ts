export const ImageToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result;
            if (result && typeof result === 'string') {
                resolve(result.split(',')[1]); // Get only the Base64 part
            } else {
                reject(new Error('Failed to convert file to Base64.'));
            }
        };
        reader.onerror = (error) => {
            reject(error);
        };
        reader.readAsDataURL(file);
    });
}