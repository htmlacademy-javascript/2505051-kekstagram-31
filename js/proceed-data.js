import { getData } from './api.js';
import { renderThumbnailList } from './thumbnail.js';

getData()
  .then((posts) => renderThumbnailList(posts));
