import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { analytics } from '@/lib/firebase/config';

export const UploadMediaFiles = async (item: any, uploadFilePath: any) => {
    const fileref = ref(analytics, uploadFilePath);
    const response = await uploadBytes(fileref, item);
    const url = await getDownloadURL(response.ref);
    return url;
}