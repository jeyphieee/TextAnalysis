const express = require('express');
const multer = require('multer');
const axios = require('axios');
const FormData = require('form-data');

const router = express.Router();
const upload = multer();

router.post('/analyze-text', upload.single('input_file'), async (req, res) => {
  const data = new FormData();
  data.append('input_file', req.file.buffer);
  data.append('language', 'english');

  const options = {
    method: 'POST',
    url: 'https://text-analysis12.p.rapidapi.com/text-mining/api/v1.1',
    headers: {
      'X-RapidAPI-Key': 'ea98521173msh09acc3df674a20fp17fe08jsn7e35691b0240',
      'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com',
      ...data.getHeaders(),
    },
    data: data,
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const app = express();
app.use(express.json());
app.use('/', router);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
