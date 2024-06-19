export async function getImageAsFile(imageUrl: string, name: string) {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const file = new File([blob], name, { type: blob.type });
    return file;
}