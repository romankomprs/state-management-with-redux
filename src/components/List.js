import React from 'react';
import CardContainer from '../containers/CardContainer';

// import CreateCard from './CreateCard';
import CreateCardContainer from '../containers/CreateCardContainer';

const List = ({ list = {}, removeList }) => {
  return (
    <article className="List">
      <h2>{list.title}</h2>
      <CreateCardContainer listId={list.id}/>
      <div>
        {list.cards.map(cardId => (
          <CardContainer key={cardId} cardId={cardId} />
        ))}
      </div>
    </article>
  );
};

export default List;
