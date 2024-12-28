import User from "../models/userModel.js"
const register = async (req, res) => {
   const { fullName, email, password } = req.body;
   try {
      if (!fullName || !email || !password) {
         res.status(500).json({ success: true, message: 'all field are required' })
      }
      // find user exist or not 
      const ExistUser = await User.findOne({ email })
      if (ExistUser) {
         res.status(500).json({ success: true, message: 'User already exist' })
      }
       // Hash the password
       const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(password, salt);
   //   create user
      const user = await User.create({
         fullName: fullName,
         email: email,
         password: hashedPassword
      })
   // save user in database
      user.save();

      res.status(200).json({
         success: true,
         message: "User Create Successfully"
      })

   } catch (error) {
      res.status(404).json({ success: false, message: error.message })
   }

}

export default register