import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '21816911-1420e6eb818d750af174e21f8';

const findImage = ({ searchQuery, currentPage }) =>
  axios
    .get(
      `?q=${searchQuery}&key=${API_KEY}&image_type=photo&orientation=horizontal&page=${currentPage}&per_page=12`,
    )
    .then(response => response.data.hits);

// eslint-disable-next-line import/no-anonymous-default-export
export default { findImage };