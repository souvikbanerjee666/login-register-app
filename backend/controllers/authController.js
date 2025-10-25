import User from '../models/User.js';

// Register user
export const registerUser = async (req, res) => {
    try {
        const { fullname, username, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ 
            $or: [{ username }, { email }] 
        });

        if (existingUser) {
            return res.status(400).json({ 
                message: existingUser.username === username ? 'Username already exists' : 'Email already exists' 
            });
        }

        // Create new user
        const user = new User({
            fullname,
            username,
            email,
            password
        });

        await user.save();

        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: user._id,
                fullname: user.fullname,
                username: user.username,
                email: user.email
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Login user
export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find user by username
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Check password
        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        res.json({
            message: 'Login successful',
            user: {
                id: user._id,
                fullname: user.fullname,
                username: user.username,
                email: user.email,
                profilePicture: user.profilePicture
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};