import React, {useState} from 'react';
import Storage from '@aws-amplify/storage';
import { Form } from 'semantic-ui-react';
import {Auth} from 'aws-amplify';
import {v4 as uuid} from 'uuid';

// This component is used to upload objects to S3 along with any metadata.
export default function S3ImageUpload(props){

  const [uploading, setUploading] = useState(false);

  const uploadFile = async (file) => {
    const fileName = 'upload/'+ uuid();
    const user = await Auth.currentAuthenticatedUser();

    const result = await Storage.vault.put(
      fileName,
      file,
      {
        metadata: {
          categoryid: props.dropdownChoice,
          owner: user.username,
        }
      }
    );

    console.log('Uploaded file: ', result);
  };

  const onChange = async (e) => {
    setUploading(true);

    let files = [];
    for (var i = 0; i < e.target.files.length; i++) {
      files.push(e.target.files.item(i));
    }
    await Promise.all(files.map(f => uploadFile(f)));

    setUploading(false)
  };

  return (
    <div>
      <Form.Button
        onClick={() => document.getElementById('add-image-file-input').click()}
        disabled={uploading}
        icon='file image outline'
        content={uploading ? 'Uploading...' : 'Add Images'}
      />
      <input
        id='add-image-file-input'
        type="file"
        accept='image/*'
        multiple
        onChange={onChange}
        style={{display: 'none'}}
      />
    </div>
  );
};

