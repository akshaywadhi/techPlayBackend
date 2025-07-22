import base64 from 'base64-js'

export const format = async (req,res) => {
   const { rawJson } = req.body;
   console.log(rawJson)

  try {
    const parsed = JSON.parse(rawJson);
    const formatted = JSON.stringify(parsed, null, 2);
    console.log(formatted)
    res.status(200).json({ success: true, formatted });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Invalid JSON' });
  }
}

export const encode = async (req, res) => {
  try {
    const encoded = base64.fromByteArray(Buffer.from(req.body.input));
    res.json({ encoded });
  } catch (error) {
    res.status(400).json({ message: 'Invalid input' });
  }
}

export const decode = async (req,res) => {
  try {
    const decoded = Buffer.from(base64.toByteArray(req.body.input)).toString();
    res.json({ decoded });
  } catch (error) {
    res.status(400).json({ message: 'Invalid Base64 string' });
  }
}
