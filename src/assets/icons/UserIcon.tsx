import {SvgXml} from 'react-native-svg';

const UserIcon = () => {
    const xml = `
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 11.8421C12.5 18.3711 18.1083 23.6842 25 23.6842C31.8917 23.6842 37.5 18.3711 37.5 11.8421C37.5 5.31316 31.8917 0 25 0C18.1083 0 12.5 5.31316 12.5 11.8421ZM47.2222 50H50V47.3684C50 37.2132 41.275 28.9474 30.5556 28.9474H19.4444C8.72222 28.9474 0 37.2132 0 47.3684V50H47.2222Z" fill="#6AEC9D"/>
        </svg>
    
    `
    
    return(
        <SvgXml xml={xml}/>
    )
}

export default UserIcon