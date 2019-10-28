export default {
    src: {
        type: String,
        required: true,
    },
    muted: {
        type: Boolean,
        default: true,
    },
    loop: {
        type: Boolean,
        default: true,
    },
    preload: {
        type: String,
        default: 'auto',
    },
    objectFit: {
        type: String,
        default: 'cover',
    },
};
