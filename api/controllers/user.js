const jwt = require("jsonwebtoken");
const Users = require("../models/users.json");
const secret = process.env.SECRET_KEY;
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = Users.find((u) => u.email === email);
    if (!user) {
      return res.status(401).json({ msg: "Invalid email or password" });
    }
    // simpler way to check password
    // const isMatch = await bcrypt.compare(password, user.password);
    const isMatch = password === user.password;
    if (!isMatch) {
      return res.status(401).json({ msg: "Invalid email or password" });
    }
    user.token = jwt.sign({ user }, secret, { expiresIn: "1h" });
    let loginuser = { ...user };
    delete loginuser.password;
    res.json({ user: loginuser });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
