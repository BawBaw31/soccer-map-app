import {SvgXml} from 'react-native-svg';

const PlusIcon = () => {
    const xml = `
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C7.16364 0 0 7.16364 0 16C0 24.8364 7.16364 32 16 32C24.8364 32 32 24.8364 32 16C32 7.16364 24.8364 0 16 0ZM17.4545 21.8182C17.4545 22.204 17.3013 22.5739 17.0285 22.8467C16.7557 23.1195 16.3858 23.2727 16 23.2727C15.6142 23.2727 15.2443 23.1195 14.9715 22.8467C14.6987 22.5739 14.5455 22.204 14.5455 21.8182V17.4545H10.1818C9.79605 17.4545 9.42608 17.3013 9.1533 17.0285C8.88052 16.7557 8.72727 16.3858 8.72727 16C8.72727 15.6142 8.88052 15.2443 9.1533 14.9715C9.42608 14.6987 9.79605 14.5455 10.1818 14.5455H14.5455V10.1818C14.5455 9.79605 14.6987 9.42608 14.9715 9.1533C15.2443 8.88052 15.6142 8.72727 16 8.72727C16.3858 8.72727 16.7557 8.88052 17.0285 9.1533C17.3013 9.42608 17.4545 9.79605 17.4545 10.1818V14.5455H21.8182C22.204 14.5455 22.5739 14.6987 22.8467 14.9715C23.1195 15.2443 23.2727 15.6142 23.2727 16C23.2727 16.3858 23.1195 16.7557 22.8467 17.0285C22.5739 17.3013 22.204 17.4545 21.8182 17.4545H17.4545V21.8182Z" fill="#00EE5F"/>
        </svg>       
    `
    
    return(
        <SvgXml xml={xml}/>
    )
}

export default PlusIcon