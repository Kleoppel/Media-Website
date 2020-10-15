import React, {useState} from 'react';
import API, {graphqlOperation} from '@aws-amplify/api';
import {Header, Input, Segment} from 'semantic-ui-react';
import * as mutations from '../graphql/mutations';

export default function NewCategory(){
  const [name, setName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await API.graphql(graphqlOperation(mutations.createCategory, {
      input: {
        name
      }
    }));
    setName('')
  };

  return (
    <Segment>
      <Header as='h3'>Add a new category</Header>
      <Input
        type='text'
        placeholder='New Category Name'
        icon='plus'
        iconPosition='left'
        action={{
          content: 'Create',
          onClick: handleSubmit
        }}
        name='name'
        value={name}
        onChange={(e) => setName(e.target.value)}/>
    </Segment>
  )
};
