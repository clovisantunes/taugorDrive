import { Text } from '../Text/Text';
import Button from '../UI/Button/Button';
import { getDownloadURL, ref, getStorage } from 'firebase/storage';
import { 
    Entypo, 
    Ionicons, 
    FontAwesome 
} from '@expo/vector-icons';
import {
    ModalView,
    CloseModalBox,
    CloseButton,
    TextDescription,
    TypeItem
} from './styles';

type ModalProps = {
    setModalVisible: boolean;
    closeModal: any;
    selectedItem: any;
}

export default function ModalItem({ setModalVisible, closeModal, selectedItem }: ModalProps) {
    if (!selectedItem) {
        return null;
    }

    const { name, contentType, uploadDate } = selectedItem;

    const contentTypeToIconMap: { [key: string]: JSX.Element } = {
        'image/': <Entypo name="images" size={40} color="white" />,
        'video/': <Entypo name="folder-video" size={40} color="white" />,
        'audio/': <FontAwesome name="file-audio-o" size={40} color="white" />,
    };

    const getIconForContentType = (contentType: string) => {
        for (const key in contentTypeToIconMap) {
            if (contentType.startsWith(key)) {
                return contentTypeToIconMap[key];
            }
        }
        return <Ionicons name="document" size={40} color="white" />
    };

    return (
        <ModalView>
            <CloseModalBox>
                <CloseButton>
                    <Button buttoncolor='dark' onPress={closeModal} textColor='white'>
                        <Text color='white' size={16} weight='medium'>X</Text>
                    </Button>
                </CloseButton>
            </CloseModalBox>
                <TextDescription>
                    <Text color='white' size={16} weight='medium'>Name: {name}</Text>
                </TextDescription>
                <TextDescription>
                    <Text color='white' size={16} weight='medium'>File type: {contentType}</Text>
                </TextDescription>
                <TextDescription>    
                    <Text color='white' size={16} weight='medium'>Upload Date: {uploadDate.toString()}</Text>
                </TextDescription>
                <TypeItem>
                    {getIconForContentType(contentType)}
                </TypeItem>
        </ModalView>
    )
}
