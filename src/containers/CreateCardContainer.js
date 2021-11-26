import { connect } from 'react-redux';
import CreateCard from '../components/CreateCard';

const defaultCardData = {
    title: '',
    description: '',
    assignedTo: ''
}

const mapDispatchToProps = dispatch => {
    return {
        createCard(listId, cardData) {
            const cardId = Date.now().toString();
            const card = {
                id: cardId,
                ...defaultCardData,
                ...cardData, // this one comes lasts so it overrided the previous properties
            }; // this is what we write into the input field and therefore overrites the previous values
            dispatch({
                type: 'CARD_CREATE',
                payload: { card, listId, cardId }
            })
        }        
    };
}

// we don't have any mapStateToProps
export default connect(null,mapDispatchToProps)(CreateCard);