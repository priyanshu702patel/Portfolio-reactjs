import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId:"nx92nega",
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token:"sk3xE7WLd31JWASR2Ng3HiZbL0OgJsJc7KRNsQw8WHT0kx27TxkpOjrfYVirpqppBjnHULYxAMmulL5GefTfHEhUF6CQkRFbLgjj3zANX7nkNOx0aGbTx301kEqRiSmjVHA8t1Dvt0QoHbUpEpP6zXxnDC2eWoDQq3iOEGId3fg27o71zL0G"
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);