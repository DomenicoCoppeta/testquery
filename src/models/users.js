import mongoose, { Model, Schema } from "mongoose";

const UserSchema = new Schema ({
    index: {
        type: Number,   
        required: true,
    },
    guid: {
        type: String,  
        required: true,
    },
    isActive: {
        type: Boolean,   
        required: true,
    },
    balance: {
        type: String,   
        required: true,
    },
    picture: {
        type: String,  
        required: true,
    },
    age: {
        type: Number,  
        required: true,
    },
    eyeColor: {
        type: String,  
        required: true,
    },
    name: {
        first: {
            type: String, 
            required: true,
        },
        last: {
            type: String, 
            required: true,
        }
    },
    company: {
        type: String,  
        required: true,
    },
    email: {
        type: String,  
        required: true,
    },
    phone: {
        type: String,  
        required: true,
    },
    address: {
        type: String,  
        required: true,
    },
    about: {
        type: String,  
        required: true,
    },
    about: {
        type: String,  
        required: true,
    },
    registered: {
        type: String,  
        required: true,
    },
    latitude: {
        type: String,  
        required: true,
    },
    longitude: {
        type: String,  
        required: true,
    },
    tags: {
        0: {
            type: String, 
            required: true,
        },
        1: {
            type: String, 
            required: true,
        },
        2: {
            type: String, 
            required: true,
        },
        3: {
            type: String, 
            required: true,
        },
        4: {
            type: String, 
            required: true,
        }
    },
    range: {
        0: {
            type: Number, 
            required: true,
        },
        1: {
            type: Number, 
            required: true,
        },
        2: {
            type: Number, 
            required: true,
        },
        3: {
            type: Number, 
            required: true,
        },
        4: {
            type: Number, 
            required: true,
        },
        5: {
            type: Number, 
            required: true,
        },
        6: {
            type: Number, 
            required: true,
        },
        7: {
            type: Number, 
            required: true,
        },
        8: {
            type: Number, 
            required: true,
        },
        9: {
            type: Number, 
            required: true,
        }
    },
    friends: {
        0: {
            id: {
                type: Number, 
                required: true,
            },
            name: {
                type: String,
                required: true,
            }
        },
        1: {
            id: {
                type: Number, 
                required: true,
            },
            name: {
                type: String,
                required: true,
            }
        },
        2: {
            id: {
                type: Number, 
                required: true,
            },
            name: {
                type: String,
                required: true,
            }
        }  
    },
    greeting: {
        type: String,
        required: true,
    },
    favoriteFruit: {
        type: String,
        required: true,
    },
});

export const User = mongoose.model("users", UserSchema);